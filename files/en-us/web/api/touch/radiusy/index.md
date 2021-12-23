---
title: Touch.radiusY
slug: Web/API/Touch/radiusY
tags:
  - API
  - DOM
  - Experimental
  - Mobile
  - Property
  - touch
browser-compat: api.Touch.radiusY
---
{{ APIRef("Touch Events") }}

## Summary

Returns the Y radius of the ellipse that most closely circumscribes the area of contact with the touch surface. The value is in CSS pixels of the same scale as {{ domxref("Touch.screenX") }}.

This value, in combination with {{ domxref("Touch.radiusX") }} and {{ domxref("Touch.rotationAngle") }} constructs an ellipse that approximates the size and shape of the area of contact between the user and the screen. This may be a large ellipse representing the contact between a fingertip and the screen or a small one representing the tip of a stylus, for example.

> **Note:** This attribute has _not_ been formally standardized. It is specified in the {{SpecName('Touch Events 2')}} {{Spec2('Touch Events 2')}} specification and not in {{SpecName('Touch Events')}} {{Spec2('Touch Events')}}. This attribute is not widely implemented.

## Syntax

```js
var yRadius = touchItem.radiusY;
```

### Return value

- `yRadius`
  - : The Y radius of the ellipse that most closely circumscribes the area of contact with the screen.

## Example

The [Touch.radiusX example](/en-US/docs/Web/API/Touch/radiusX#example) includes an example of this property's usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
