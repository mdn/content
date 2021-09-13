---
title: 'ServiceWorkerContainer: message event'
slug: Web/API/ServiceWorkerContainer/message_event
tags:
  - API
  - Event
  - Reference
  - Service Workers
browser-compat: api.ServiceWorkerContainer.message_event
---
{{APIRef}}

The **`message`** event is used in a page controlled by a service worker to receive messages from the service worker.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/ServiceWorkerContainer/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

In this example the service worker get the client's ID from a [`fetch`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/onfetch) event and then sends it a message using [`Client.postMessage`](/en-US/docs/Web/API/Client/postMessage):

```js
// in the service worker
async function messageClient(clientId) {
    const client = await clients.get(clientId);
    client.postMessage('Hi client!');
}

addEventListener('fetch', (event) => {
    messageClient(event.clientId);
    event.respondWith(() => {
      // ...
    });
});
```

The client can receive the message by listening to the `message` event:

```js
// in the page being controlled
navigator.serviceWorker.addEventListener('message', (message) => {
    console.log(message);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
