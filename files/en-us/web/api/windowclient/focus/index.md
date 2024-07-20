---
title: "WindowClient: focus() method"
short-title: focus()
slug: Web/API/WindowClient/focus
page-type: web-api-instance-method
browser-compat: api.WindowClient.focus
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`focus()`** method of the {{domxref("WindowClient")}}
interface gives user input focus to the current client and returns a
{{jsxref("Promise")}} that resolves to the existing
{{domxref("WindowClient")}}.

## Syntax

```js-nolint
focus()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to the existing {{domxref("WindowClient")}}.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : The promise is rejected with this exception if none of the windows in the app's origin have [transient activation](/en-US/docs/Web/Security/User_activation).

## Security requirements

- At least one window in the app's origin must have [transient activation](/en-US/docs/Web/Security/User_activation).

## Examples

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
