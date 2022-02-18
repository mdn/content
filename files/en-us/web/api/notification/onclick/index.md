---
title: Notification.onclick
slug: Web/API/Notification/onclick
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - onclick
browser-compat: api.Notification.onclick
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`onclick`** property of the {{domxref("Notification")}}
interface specifies an event listener to receive {{event("click")}} events. These events
occur when the user clicks on a displayed {{domxref("Notification")}}.

## Syntax

```js
Notification.onclick = function(event) { /* ... */ };
```

The default behavior is to move the focus to the viewport of the notification's related
[browsing
context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context). If you don't want that behavior, call {{domxref("Event/preventDefault",
  "preventDefault()")}} on the event object.

## Examples

In the following example, we use an onclick handler to open a webpage in a new tab
(specified by the inclusion of the `'_blank'` parameter) once a notification
is clicked:

```js
notification.onclick = function(event) {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('http://www.mozilla.org', '_blank');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
