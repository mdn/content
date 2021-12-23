---
title: PushEvent.data
slug: Web/API/PushEvent/data
tags:
  - API
  - Experimental
  - Property
  - Push
  - PushEvent
  - Reference
  - data
browser-compat: api.PushEvent.data
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

The `data` read-only property of the **`PushEvent`** interface returns a reference to a {{domxref("PushMessageData")}} object containing data sent to the {{domxref("PushSubscription")}}.

## Syntax

```js
var myPushData = PushEvent.data;
```

### Value

A {{domxref("PushMessageData")}} object.

**Examples**

The following example takes data from a PushEvent and displays it on all of the service workers' clients.

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
