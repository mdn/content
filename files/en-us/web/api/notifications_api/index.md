---
title: Notifications API
slug: Web/API/Notifications_API
page-type: web-api-overview
browser-compat:
  - api.Notification
  - api.ServiceWorkerRegistration.showNotification
  - api.ServiceWorkerRegistration.getNotifications
spec-urls: https://notifications.spec.whatwg.org/
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The Notifications API allows web pages to control the display of system notifications to the end user. These are outside the top-level browsing context viewport, so therefore can be displayed even when the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems, across different platforms.

## Concepts and usage

### Requesting permission

A website can only display notifications if the user has granted it permission to do so. To ask permission, the website needs to call the static {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} method. This method should only be called when handling a user gesture, such as when handling a mouse click. For example:

```js
button.addEventListener("click", async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    // we can show the notification
  } else {
    // we can't show the notification
  }
});
```

The `requestPermission()` method returns a {{jsxref("Promise")}} which resolves to one of the following three string values:

- `"granted"`: the user granted permission.
- `"denied"`: the user denied permission.
- `"default"`: the user has neither granted nor denied permission.

When the site calls `requestPermission()`, if the user has not already granted or denied permission for this {{glossary("origin")}}, then the browser shows the user a dialog asking them if they want to grant or deny permission:

![A dialog box asking the user to allow notifications from that origin. There are options to never allow or allow notifications.](screen_shot_2019-12-11_at_9.59.14_am.png)

Once the user has made a choice, the browser will resolve the returned promise with their choice, and remember it.

If the user has already chosen to grant or deny notifications for this origin, then `requestPermission()` will immediately resolve the promise with their choice.

### Persistent and non-persistent notifications

The specification distinguishes two sorts of notifications, _persistent notifications_ and _non-persistent notifications_. These serve different use cases and involve different APIs.

#### Persistent notifications

Persistent notifictions are created in a web page or a service worker, by calling {{domxref("ServiceWorkerRegistration.showNotification()")}}, and any user interaction with the notification is always handled in the service worker.

The browser should display the notification in the platform's notification center, if that is available, and the notification may persist in the notification center until it is removed (for example, because the user closed it).

When a persistent notification is created, you can pass it an array of [`action`](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#actions) objects: these are typically things the user might want the website to do in response to the notification. For example, an email app might display a notification which gives the user the chance to delete the email or open it.

```js
const registration = await navigator.serviceWorker.ready;
registration.showNotification("Ready for your order", {
  actions: [
    { action: "open", title: "Open this email" },
    { action: "delete", title: "Delete this email" },
  ],
});
```

When the user clicks a persistent notification, the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event is fired in the service worker's global scope. If the user selected an action, it is given as the {{domxref("NotificationEvent.action", "action")}} property of the event passed into the `notificationclick` handler, and the service worker can use it to decide what to do:

```js
self.addEventListener("notificationclick", (event) => {
  switch (event.action) {
    case "open":
      clients.openWindow("actions/open.html");
      break;
    case "delete":
      clients.openWindow("actions/delete.html");
      break;
  }
});
```

#### Non-persistent notifications

Non-persistent notifications are always created in a web page, by calling the {{domxref("Notification.Notification()", "Notification()")}} constructor, and user interaction with the notification is always handled in the web page.

The browser should not display the notification in the platform's notification center, and should automatically close the notification after a few seconds.

The web page can handle user interactions with the notification by listening for the {{domxref("Notification.click_event", "click")}} and {{domxref("Notification.close_event", "close")}} events.

```js
const notification = new Notification("Hello!");

notification.addEventListener("click", () => {
  console.log("clicked!");
});

notification.addEventListener("close", () => {
  console.log("closed!");
});
```

These events are passed a generic {{domxref("Event")}} object — unlike a persistent notification, with a non-persistent notification you can't provide actions, and therefore can't be informed about which action the user chose.

#### Which type should you use?

The most common use case for a notification is when something happens in your web app that the user should know about, but they should not be forced to immediately stop whatever else they are doing. For example, your web app is an email app and you have received a new email. You might want the user to know that they have an email, and when they are ready to deal with it, you want to handle their response — for example, to read the email or delete it unread.

To meet this use case you need to use persistent notifications, because web pages are inherently ephemeral. The user could close the page at any time, and if they do so, the notification object is destroyed along with any event listeners, so your web app will not able to handle the user's response.

However, if your notification is managed by a service worker, then when the user interacts with the notification, the browser will automatically resume your service worker and fire its `notificationclick` event.

On mobile devices, the situation for non-persistent notifications is even more challenging, because a mobile browser might stop a page from running as soon as it is put in the background. For this reason, Chromium-based browsers don't support non-persistent notifications at all on mobile, and the `Notification()` constructor will throw an exception.

## Interfaces

- {{domxref("Notification")}}
  - : Defines a notification object.
- {{domxref("NotificationEvent")}}
  - : Represents a notification event dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}.

### Extensions to other interfaces

- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}} event
  - : Occurs when a user clicks on a persistent notification.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}} event
  - : Occurs when a user closes a persistent notification.
- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Returns a list of persistent notifications in the order that they were created from the current origin via the current service worker registration.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Displays the persistent notification with the requested title.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
