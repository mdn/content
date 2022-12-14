---
title: VirtualKeyboard.overlaysContent
slug: Web/API/VirtualKeyboard/overlaysContent
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VirtualKeyboard
  - overlaysContent
  - Experimental
browser-compat: api.VirtualKeyboard.overlaysContent
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`overlaysContent`** property of the VirtualKeyboard interface can be used to opt-out of the automatic way in which browsers handle on-screen virtual keyboards by reducing the size of the viewport to make space for them.

By setting the `overlaysContent` property to `true`, the browser no longer resizes the viewport when the virtual keyboard appears. The virtual keyboard overlays the content of the web page and developers can adapt the page layout by using the {{domxref("VirtualKeyboard_API", "Virtual Keyboard API")}}.

## Value

The `overlaysContent` property is a Boolean whose value is `false` by default, and can be set to `true` to opt-out of the browser automatic handling of the on-screen virtual keyboard.

```js
if ("virtualKeyboard" in navigator) {
  console.log(navigator.virtualKeyboard.overlaysContent); // false
  navigator.virtualKeyboard.overlaysContent = true; // Opt-out of the automatic handling.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
