---
title: "Window: languagechange event"
short-title: languagechange
slug: Web/API/Window/languagechange_event
page-type: web-api-event
browser-compat: api.Window.languagechange_event
---

{{APIRef}}

The **`languagechange`** event is fired at the global scope object when the user's preferred language changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("languagechange", (event) => {});
onlanguagechange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onlanguagechange` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

You can use the `languagechange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Or use the `onlanguagechange` event handler property:

```js
window.onlanguagechange = (event) => {
  console.log("languagechange event detected!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
