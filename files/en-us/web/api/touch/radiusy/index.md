---
title: Touch.radiusY
slug: Web/API/Touch/radiusY
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Mobile
  - Property
  - touch
browser-compat: api.Touch.radiusY
---
{{ APIRef("Touch Events") }}

The **`radiusX`** read-only property of the {{domxref("Touch")}} interface returns the Y radius of the ellipse that most closely circumscribes the area of contact with the touch surface. The value is in CSS pixels of the same scale as {{ domxref("Touch.screenX") }}.

This value, in combination with {{ domxref("Touch.radiusX") }} and {{ domxref("Touch.rotationAngle") }} constructs an ellipse that approximates the size and shape of the area of contact between the user and the screen. This may be a large ellipse representing the contact between a fingertip and the screen or a small one representing the tip of a stylus, for example.

## Value

A number.

## Examples

The [Touch.radiusX example](/en-US/docs/Web/API/Touch/radiusX#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
