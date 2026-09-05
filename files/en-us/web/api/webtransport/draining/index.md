---
title: "WebTransport: draining property"
short-title: draining
slug: Web/API/WebTransport/draining
page-type: web-api-instance-property
browser-compat: api.WebTransport.draining
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`draining`** read-only property of the {{domxref("WebTransport")}} interface returns a {{jsxref("Promise")}} that fulfills when the server indicates that it would like the transport session to start draining, prior to closing it.

## Value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Description

A session enters the _draining_ state when signaled by the server.
This signal might be sent if the session (and potentially the underlying connection) is going to be torn down soon, for example because the server is rebalancing load across backend instances, enforcing a maximum session lifetime, or even restarting.
Draining is only a request: either endpoint may continue using the session, and may still open new streams or send datagrams, but the expectation is that the application will start wrapping up and close the session soon.

A web application can use the `draining` promise to preemptively and gracefully handle the expected shutdown.
It might, for example, finish the current task at a natural stopping point, and open a new session to continue the work.

The returned promise is created when the `WebTransport` object is created and is fulfilled when the session enters the draining state.
Accessing or awaiting this promise does not trigger any action; it only allows actions to be taken when the session starts draining, similar to listening to an event.

## Examples

### Migrating to a new transport on draining

In this example we first define an `initTransport()` function that creates a connection and waits for it to be usable:

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  return transport;
}

let transport = await initTransport(url);
```

We then define a `migrateOnDraining()` function that waits for the server to indicate that the session should start draining.
This creates a new transport and returns it, and also closes the old transport.

```js
async function migrateOnDraining(url, oldTransport) {
  // Promise fulfills when signaled by server
  await oldTransport.draining;

  // Open a replacement session so the ongoing feed isn't interrupted
  const newTransport = await initTransport(url);

  // Switch to sending further data on newTransport instead of oldTransport
  // …

  // The old session is no longer needed once the new one is in use
  oldTransport.close();

  return newTransport;
}

// Not awaited: settles when draining starts
migrateOnDraining(url, transport).then((newTransport) => {
  transport = newTransport;
});
```

Note that while we close the session above when draining is signalled, we would still need to handle the case when the session is closed by some other mechanism.
This code waits on the promise returned by {{domxref("WebTransport.closed")}} and logs whether the session closed gracefully or unexpectedly.

```js
async function watchForClose(transport) {
  try {
    const { closeCode, reason } = await transport.closed;
    console.log(`Session closed gracefully (code ${closeCode}): ${reason}`);
  } catch (error) {
    // The session can close abruptly, without draining being signaled first
    console.error(`Session closed unexpectedly: ${error}`);
  }
}

watchForClose(transport);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
