---
title: "WebTransport: responseHeaders property"
short-title: responseHeaders
slug: Web/API/WebTransport/responseHeaders
page-type: web-api-instance-property
browser-compat: api.WebTransport.responseHeaders
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`responseHeaders`** read-only property of the {{domxref("WebTransport")}} interface returns the HTTP headers that the server sent in its response to the request that set up the session.

## Value

A {{domxref("Headers")}} object, or `null` if the session has not yet been established.

The returned object is immutable: calling methods that modify it, such as {{domxref("Headers.set()", "set()")}} or {{domxref("Headers.append()", "append()")}}, throws a {{jsxref("TypeError")}}.

## Description

The session is set up using an [extended `CONNECT`](/en-US/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) request, to which the client can add custom headers using the [`headers`](/en-US/docs/Web/API/WebTransport/WebTransport#headers) constructor option.
The server can use the headers in its response to return application-specific information to the client, such as a session identifier.

The value is `null` until the session is established, and is set before the {{domxref("WebTransport.ready", "ready")}} promise fulfills.
The `WT-Protocol` response header, which the server uses to indicate the selected application protocol, is not included: read the selected protocol from {{domxref("WebTransport.protocol")}} instead.

## Examples

### Reading response headers

This example shows how you might send a custom header when setting up a session, and then read a header that the server returns in its response.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    // Custom request headers
    headers: { Authorization: "Bearer abc123" },
  });

  // responseHeaders is null until the session is established
  console.log(transport.responseHeaders); // null

  await transport.ready;

  // Log all the response headers
  for (const [name, value] of transport.responseHeaders) {
    console.log(`${name}: ${value}`);
  }

  // Read a specific header
  const sessionId = transport.responseHeaders.get("X-Session-Id");
  console.log(`Session ID: ${sessionId}`);

  return transport;
}

initTransport(url);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor [`headers`](/en-US/docs/Web/API/WebTransport/WebTransport#headers) option
- {{domxref("WebTransport.protocol")}}
