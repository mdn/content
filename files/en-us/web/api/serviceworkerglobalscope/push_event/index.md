---
title: 'ServiceWorkerGlobalScope: push event'
slug: Web/API/ServiceWorkerGlobalScope/push_event
page-type: web-api-event
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

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('periodicsync', (event) => { });

onperiodicsync = (event) => { };
```

## Event type

A {{domxref("PushEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PushEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("PushEvent")}}. Additional properties:_

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.

## Example

This example sets up a handler for `push` events that takes {{Glossary("JSON")}} data, parses it, and dispatches the message for handling based on information contained within the message.

```js
self.addEventListener("push", (event) => {
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
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} event
