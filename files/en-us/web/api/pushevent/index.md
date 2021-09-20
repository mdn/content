---
title: PushEvent
slug: Web/API/PushEvent
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
{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`PushEvent`** interface of the [Push API](/en-US/docs/Web/API/Push_API) represents a push message that has been received. This event is sent to the [global scope](/en-US/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains the information sent from an application server to a {{domxref("PushSubscription")}}.

## Constructor

- {{domxref("PushEvent.PushEvent()")}}
  - : Creates a new `PushEvent` object.

## Properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}. Additional properties:_

- {{domxref("PushEvent.data")}} {{readonlyinline}}
  - : Returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

## Examples

The following example takes data from a `PushEvent` and displays it on all of the service worker's clients.

```js
self.addEventListener('push', function(event) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";
  var icon = "images/new-notification.png";

  var notification = new self.Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
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
