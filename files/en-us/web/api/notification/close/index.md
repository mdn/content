---
title: Notification.close()
slug: Web/API/Notification/close
tags:
  - API
  - Method
  - Notification
  - Notifications
  - Notifications API
  - Reference
  - close
browser-compat: api.Notification.close
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The `close()` method of the {{domxref("Notification")}} interface is used to
close/remove a previously displayed notification.

> **Note:** This API shouldn't be used just to have the notification
> removed from the screen after a fixed delay since this method will also remove the
> notification from any notification tray, preventing users from interacting with it
> after it was initially shown. A valid use for this API would be to remove a
> notification that is no longer relevant (e.g. the user already read the notification
> on the webpage in the case of a messaging app or the following song is already playing
> in a music app).

## Syntax

```js
Notification.close();
```

### Parameters

None.

### Returns

Void.

## Examples

In the following snippet, we have a simple function that when called creates an
`options` object and then a new notification. At the end of the function, it
also calls `close()` inside a
{{domxref("EventTarget.addEventListener","addEventListener()")}} function to remove the
notification when the relevant content has been read on the webpage.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon
  };

  var n = new Notification(theTitle,options);
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
      n.close();
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
