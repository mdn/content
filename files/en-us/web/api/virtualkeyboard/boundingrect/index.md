---
title: VirtualKeyboard.boundingRect
slug: Web/API/VirtualKeyboard/boundingRect
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VirtualKeyboard
  - boundingRect
  - Experimental
browser-compat: api.VirtualKeyboard.boundingRect
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`boundingRect`** property of the VirtualKeyboard interface contains a {{domxref("DOMRect")}} which indicates the position and size of the on-screen virtual keyboard which overlays the web page.

An on-screen virtual keyboard can overlay the viewport in which a web page is displayed when the VirtualKeyboard API is used to prevent the browser from resizing the viewport automatically. To learn more about this, see {{domxref("VirtualKeyboard_API", "Virtual Keyboard API")}}.

## Value

A {{domxref("DOMRect")}} which indicates the position and size of the virtual keyboard in the viewport.

The `x`, `y`, `width`, and `height` coordinates of the rectangle are useful to re-position content in the webpage that needs to be visible even when the virtual keyboard is displayed.

```js
const { x, y, width, height } = navigator.virtualKeyboard.boundingRect;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
