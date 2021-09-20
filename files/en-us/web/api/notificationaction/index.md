---
title: NotificationAction
slug: Web/API/NotificationAction
browser-compat: api.NotificationAction
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The `NotificationAction` interface of the [Notifications API](/en-US/docs/Web/API/Notifications_API) is used to represent action buttons the user can click to interact with notifications.

These buttons' appearance and specific functionality vary across platforms but generally they provide a way to asynchronously show actions to the user in a notification.

## Properties

### Instance properties

These properties are available only on instances of the `Notification` object.

- {{domxref("NotificationAction.action")}} {{readonlyinline}}
  - : The name of the action, which can be used to identify the clicked action similar to [input names](/en-US/docs/Web/API/Element/name).
- {{domxref("NotificationAction.title")}} {{readonlyinline}}
  - : The string describing the action that is displayed to the user.
- {{domxref("NotificationAction.icon")}} {{readonlyinline}}
  - : The URL of the image used to represent the notification when there is not enough space to display the notification itself.

## Example

Notifications can fire {{Event("notificationclick")}} events on the {{domxref("ServiceWorkerGlobalScope")}}.

Here a service worker shows a notification with a single "Archive" action, allowing users to perform this common task from the notification without having to open the website. The user can also click the main body of the notification to open their inbox instead.

```js
self.registration.showNotification("New mail from Alice", {
  actions: [
    {
      action: 'archive',
      title: 'Archive'
    }
  ]
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'archive') {
    // Archive action was clicked
    archiveEmail();
  } else {
    // Main body of notification was clicked
    clients.openWindow('/inbox');
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
