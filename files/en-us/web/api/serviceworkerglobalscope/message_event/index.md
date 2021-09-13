---
title: 'ServiceWorkerGlobalScope: message event'
slug: Web/API/ServiceWorkerGlobalScope/message_event
tags:
  - Event
  - Reference
  - Service worker API
  - ServiceWorkerGlobalScope
  - message
browser-compat: api.ServiceWorkerGlobalScope.message_event
---
{{APIRef}}

The **`message`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface occurs when incoming messages are received. Controlled pages can use the {{domxref("ServiceWorker.postMessage()")}} method to send messages to service workers.
The service worker can optionally send a response back via the {{domxref("Client.postMessage()")}}, corresponding to the controlled page.

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
      <td>{{domxref("ExtendableMessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

In the below example a page gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}}, and then calls its `postMessage()` function.

```js
// in the page being controlled
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration => {
    registration.active.postMessage("Hi service worker");
  });

}
```

The service worker can receive the message by listening to the `message` event:

```js
// in the service worker
addEventListener('message', event => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
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
