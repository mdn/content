---
title: Touch.rotationAngle
slug: Web/API/Touch/rotationAngle
tags:
  - API
  - DOM
  - Experimental
  - Mobile
  - Property
  - touch
browser-compat: api.Touch.rotationAngle
---
{{ APIRef("Touch Events") }}

## Summary

Returns the rotation angle, in degrees, of the contact area ellipse defined by {{ domxref("Touch.radiusX") }} and {{ domxref("Touch.radiusY") }}. The value may be between 0 and 90. Together, these three values describe an ellipse that approximates the size and shape of the area of contact between the user and the screen. This may be a relatively large ellipse representing the contact between a fingertip and the screen or a small area representing the tip of a stylus, for example.

> **Note:** This attribute has _not_ been formally standardized. It is specified in the {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} specification and not in {{SpecName('Touch Events')}} {{Spec2('Touch Events')}}. This attribute is not widely implemented.

## Syntax

```js
var angle = touchItem.rotationAngle;
```

### Return value

- `angle`
  - : The number of degrees of rotation to apply to the described ellipse to align with the contact area between the user and the touch surface.

## Example

The [Touch.radiusX example](/en-US/docs/Web/API/Touch/radiusX#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
