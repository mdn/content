---
title: PushEvent
slug: Web/API/PushEvent
page-type: web-api-interface
tags:
  - API
  - ExtendableEvent
  - Interface
  - Offline
  - Push
  - Push API
  - Reference
  - Service Workers
  - Workers
browser-compat: api.PushEvent
---
{{APIRef("Push API")}}

The **`PushEvent`** interface of the [Push API](/en-US/docs/Web/API/Push_API) represents a push message that has been received. This event is sent to the [global scope](/en-US/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains the information sent from an application server to a {{domxref("PushSubscription")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PushEvent.PushEvent", "PushEvent()")}}
  - : Creates a new `PushEvent` object.

## Properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}. Additional properties:_

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

## Examples

The following example takes data from a `PushEvent` and displays it on all of the service worker's clients.

```js
self.addEventListener('push', (event) => {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }

  const data = event.data?.json() ?? {};
  const title = data.title || "Something Has Happened";
  const message = data.message || "Here's something you might want to check out.";
  const icon = "images/new-notification.png";

  const notification = new self.Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon,
  });

  notification.addEventListener('click', () => {
    clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
