---
title: "Window: appinstalled event"
short-title: appinstalled
slug: Web/API/Window/appinstalled_event
page-type: web-api-event
browser-compat: api.Window.appinstalled_event
---

{{APIRef}}

The **`appinstalled`** event of the [Web Manifest API](/en-US/docs/Web/Progressive_web_apps/Manifest) is fired when the browser has successfully installed a page as an application.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("appinstalled", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onappinstalled = (event) => { }
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

Or use the `onappinstalled` event handler property (but note that this replaces other event listeners added using `onappinstalled`, if any):

```js
window.onappinstalled = () => {
  console.log("Thank you for installing our app!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
