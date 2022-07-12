---
title: Touch.rotationAngle
slug: Web/API/Touch/rotationAngle
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Mobile
  - Property
  - touch
browser-compat: api.Touch.rotationAngle
---
{{ APIRef("Touch Events") }}

The **`rotationAngle`** read-only property of the {{domxref("Touch")}} interface returns the rotation angle, in degrees, of the contact area ellipse defined by {{ domxref("Touch.radiusX") }} and {{ domxref("Touch.radiusY") }}. The value may be between 0 and 90. Together, these three values describe an ellipse that approximates the size and shape of the area of contact between the user and the screen. This may be a relatively large ellipse representing the contact between a fingertip and the screen or a small area representing the tip of a stylus, for example.

## Value

A number.

## Examples

The [Touch.radiusX example](/en-US/docs/Web/API/Touch/radiusX#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
