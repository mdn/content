---
title: "Clients: openWindow() method"
short-title: openWindow()
slug: Web/API/Clients/openWindow
page-type: web-api-instance-method
browser-compat: api.Clients.openWindow
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`openWindow()`** method of the {{domxref("Clients")}}
interface creates a new top level browsing context and loads a given URL. If the calling
script doesn't have permission to show popups, `openWindow()` will throw an
`InvalidAccessError`.

In Firefox, the method is allowed to show popups only when called as the result of a
notification click event.

In Chrome for Android, the method may instead open the URL in an existing browsing
context provided by a [standalone web app](/en-US/docs/Web/Progressive_web_apps) previously added to the user's home screen. As of recently, this also works on
Chrome for Windows.

## Syntax

```js-nolint
openWindow(url)
```

### Parameters

- `url`
  - : A string representing the URL of the client you want to open in
    the window. Generally this value must be a URL from the same origin as the calling
    script.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("WindowClient")}} object if the
URL is from the same origin as the service worker or a {{Glossary("null", "null value")}} otherwise.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : The promise is rejected with this exception if none of the windows in the app's origin have [transient activation](/en-US/docs/Web/Security/User_activation).

## Security requirements

- At least one window in the app's origin must have [transient activation](/en-US/docs/Web/Security/User_activation).

## Examples

```js
// Send notification to OS if applicable
if (self.Notification.permission === "granted") {
  const notificationObject = {
    body: "Click here to view your messages.",
    data: { url: `${self.location.origin}/some/path` },
    // data: { url: 'http://example.com' },
  };
  self.registration.showNotification(
    "You've got messages!",
    notificationObject,
  );
}

// Notification click event listener
self.addEventListener("notificationclick", (e) => {
  // Close the notification popout
  e.notification.close();
  // Get all the Window clients
  e.waitUntil(
    clients.matchAll({ type: "window" }).then((clientsArr) => {
      // If a Window tab matching the targeted URL already exists, focus that;
      const hadWindowToFocus = clientsArr.some((windowClient) =>
        windowClient.url === e.notification.data.url
          ? (windowClient.focus(), true)
          : false,
      );
      // Otherwise, open a new tab to the applicable URL and focus it.
      if (!hadWindowToFocus)
        clients
          .openWindow(e.notification.data.url)
          .then((windowClient) => (windowClient ? windowClient.focus() : null));
    }),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
