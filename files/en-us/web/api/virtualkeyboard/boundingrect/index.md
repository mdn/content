---
title: "VirtualKeyboard: boundingRect property"
short-title: boundingRect
slug: Web/API/VirtualKeyboard/boundingRect
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.VirtualKeyboard.boundingRect
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`boundingRect`** property of the {{domxref("VirtualKeyboard")}} interface contains a {{domxref("DOMRect")}} indicating the position and size of the on-screen virtual keyboard that overlays the web page.

The on-screen virtual keyboard will overlay the viewport when the {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} is used to prevent the browser from resizing the viewport automatically. This is done by setting the {{domxref("VirtualKeyboard.overlaysContent", "overlaysContent")}} property to `true`.

## Value

A {{domxref("DOMRect")}} which indicates the position and size of the virtual keyboard in the viewport.

The `x`, `y`, `width`, and `height` coordinates of the rectangle are useful to reposition content in the webpage that needs to be visible even when the virtual keyboard is displayed.

```js
const { x, y, width, height } = navigator.virtualKeyboard.boundingRect;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VirtualKeyboard_API", "The VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
