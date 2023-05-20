---
title: "Window: appinstalled event"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
page-type: web-api-event
browser-compat: api.Window.appinstalled_event
---

{{APIRef}}

The **`appinstalled`** event of the [Web Manifest API](/en-US/docs/Web/Manifest) is fired when the browser has successfully installed a page as an application.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("appinstalled", (event) => {});

onappinstalled = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `appinstalled` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener("appinstalled", () => {
  console.log("Thank you for installing our app!");
});
```

Or use the `onappinstalled` event handler property:

```js
window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};
```

## Browser compatibility

{{Compat}}
