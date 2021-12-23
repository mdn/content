---
title: ServiceWorkerGlobalScope.onpush
slug: Web/API/ServiceWorkerGlobalScope/onpush
tags:
  - API
  - Property
  - Push
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - onpush
browser-compat: api.ServiceWorkerGlobalScope.onpush
---
{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope.onpush`** event of the
{{domxref("ServiceWorkerGlobalScope")}} interface is fired whenever a push message is
received by a service worker via a push server.

## Syntax

```js
ServiceWorkerGlobalScope.onpush = function(PushEvent) { /* ... */ }
self.addEventListener('push', function(PushEvent) { /* ... */ })
```

## Example

The following example takes data from a {{domxref("PushEvent")}} and displays it on all
of the service worker's clients. The data payload of the push message is available in
the event object's `data` property ({{domxref("PushEvent.data")}}, which
contains a {{domxref("PushMessageData")}} object.)

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

  var notification = new Notification(title, {
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
