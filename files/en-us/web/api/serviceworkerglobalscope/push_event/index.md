---
title: "ServiceWorkerGlobalScope: push event"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.push_event
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`push`** event is sent to a service worker's global scope (represented by the {{domxref("ServiceWorkerGlobalScope")}} interface) when the service worker has received a push message.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("push", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpush = (event) => { }
```

## Event type

A {{domxref("PushEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PushEvent")}}

## Example

This example sets up a handler for `push` events that takes {{Glossary("JSON")}} data, parses it, and dispatches the message for handling based on information contained within the message.

```js
self.addEventListener("push", (event) => {
  let message = event.data.json();

  switch (message.type) {
    case "init":
      doInit();
      break;
    case "shutdown":
      doShutdown();
      break;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Push API](/en-US/docs/Web/API/Push_API)
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} event
