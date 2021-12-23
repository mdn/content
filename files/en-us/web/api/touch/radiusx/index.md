---
title: Touch.radiusX
slug: Web/API/Touch/radiusX
tags:
  - API
  - DOM
  - Experimental
  - Mobile
  - Property
  - touch
browser-compat: api.Touch.radiusX
---
{{ APIRef("Touch Events") }}

## Summary

Returns the X radius of the ellipse that most closely circumscribes the area of contact with the touch surface. The value is in CSS pixels of the same scale as {{ domxref("Touch.screenX") }}.

This value, in combination with {{ domxref("Touch.radiusY") }} and {{ domxref("Touch.rotationAngle") }} constructs an ellipse that approximates the size and shape of the area of contact between the user and the screen. This may be a relatively large ellipse representing the contact between a fingertip and the screen or a small area representing the tip of a stylus, for example.

> **Note:** This attribute has _not_ been formally standardized. It is specified in the {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} specification and not in {{SpecName('Touch Events')}} {{Spec2('Touch Events')}}. This attribute is not widely implemented.

## Syntax

```js
var xRadius = touchItem.radiusX;
```

### Return value

- `xRadius`
  - : The X radius of the ellipse that most closely circumscribes the area of contact with the touch surface.

## Example

This example illustrates using the {{domxref("Touch")}} interface's {{domxref("Touch.radiusX")}}, {{domxref("Touch.radiusX")}} and {{domxref("Touch.rotationAngle")}} properties. The {{domxref("Touch.radiusX")}} property is the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the axis **indicated** by the touch point's {{domxref("Touch.rotationAngle")}}. Likewise, the {{domxref("Touch.radiusY")}} property is the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the axis **perpendicular** to that indicated by {{domxref("Touch.rotationAngle")}}. The {{domxref("Touch.rotationAngle")}} is the angle (in degrees) that the ellipse described by `radiusX` and `radiusY` is rotated clockwise about its center.

The following simple code snippet, registers a single handler for the {{domxref("Document/touchstart_event", "touchstart")}}, {{event("touchmove")}} and {{event("touchend")}} events. When the `src` element is touched, the element's width and height will be calculate based on the touch point's `radiusX` and `radiusY` values and the element will then be rotated using the touch point's `rotationAngle`.

```html
<div id="src"> ... </div>
```

```js
var src = document.getElementById("src");

src.addEventListener('touchstart', rotate);
src.addEventListener('touchmove', rotate);
src.addEventListener('touchend', rotate);

function rotate (e) {
  var touch = e.changedTouches.item(0);

  // Turn off default event handling
  e.preventDefault();

  // Rotate element 'src'.
  src.style.width = touch.radiusX * 2 + 'px';
  src.style.height = touch.radiusY * 2 + 'px';
  src.style.transform = "rotate(" + touch.rotationAngle + "deg)";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
