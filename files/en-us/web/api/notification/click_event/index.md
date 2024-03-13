---
title: "Notification: click event"
short-title: click
slug: Web/API/Notification/click_event
page-type: web-api-event
browser-compat: api.Notification.click_event
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`click`** event of the {{domxref("Notification")}}
interface fires when the user clicks on displayed {{domxref("Notification")}}.

The default behavior is to move the focus to the viewport of the notification's related
[browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context).
If you don't want that behavior, call {{domxref("Event/preventDefault", "preventDefault()")}} on the event object.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

In the following example, we use an onclick handler to open a webpage in a new tab
(specified by the inclusion of the `'_blank'` parameter) once a notification
is clicked:

```js
notification.onclick = (event) => {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open("http://www.mozilla.org", "_blank");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
