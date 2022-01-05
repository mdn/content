---
title: 'ServiceWorkerGlobalScope: push event'
slug: Web/API/ServiceWorkerGlobalScope/push_event
tags:
  - API
  - Event
  - Notifications
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
  - ServiceWorkerGlobalScope
  - messaging
browser-compat: api.ServiceWorkerGlobalScope.push_event
---
{{APIRef("Push API")}}

The **`push`** event is sent to a service worker's global scope (represented by the {{domxref("ServiceWorkerGlobalScope")}} interface) when the service worker has received a push message.

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
      <td>{{domxref("PushEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}}
      </td>
    </tr>
  </tbody>
</table>

## Example

This example sets up a handler for `push` events that takes {{Glossary("JSON")}} data, parses it, and dispatches the message for handling based on information contained within the message.

```js
self.addEventListener("push", event => {
  let message = event.data.json();

  switch(message.type) {
    case "init":
      doInit();
      break;
    case "shutdown":
      doShutdown();
      break;
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Push API](/en-US/docs/Web/API/Push_API)
- {{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}} event handler property
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} event
