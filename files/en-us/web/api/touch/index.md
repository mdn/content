---
title: Touch
slug: Web/API/Touch
page-type: web-api-interface
browser-compat: api.Touch
---

{{APIRef("Touch Events")}}

The **`Touch`** interface represents a single contact point on a touch-sensitive device. The contact point is commonly a finger or stylus and the device may be a touchscreen or trackpad.

The {{ domxref("Touch.radiusX") }}, {{ domxref("Touch.radiusY") }}, and {{ domxref("Touch.rotationAngle") }} describe the area of contact between the user and the screen, the _touch area_. This can be helpful when dealing with imprecise pointing devices such as fingers. These values are set to describe an ellipse that as closely as possible matches the entire area of contact (such as the user's fingertip). {{experimental_inline}}

> **Note:** Many of the properties' values are hardware-dependent; for example, if the device doesn't have a way to detect the amount of pressure placed on the surface, the `force` value will always be 0. This may also be the case for `radiusX` and `radiusY`; if the hardware reports only a single point, these values will be 1.

## Constructor

- {{domxref("Touch.Touch", "Touch()")}}
  - : Creates a Touch object.

## Instance properties

_This interface has no parent, and doesn't inherit or implement other properties._

### Basic properties

- {{domxref("Touch.identifier")}} {{ReadOnlyInline}}
  - : Returns a unique identifier for this `Touch` object. A given touch point (say, by a finger) will have the same identifier for the duration of its movement around the surface. This lets you ensure that you're tracking the same touch all the time.
- {{domxref("Touch.screenX")}} {{ReadOnlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the screen.
- {{domxref("Touch.screenY")}} {{ReadOnlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top edge of the screen.
- {{domxref("Touch.clientX")}} {{ReadOnlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the browser viewport, not including any scroll offset.
- {{domxref("Touch.clientY")}} {{ReadOnlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top edge of the browser viewport, not including any scroll offset.
- {{domxref("Touch.pageX")}} {{ReadOnlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the document. Unlike `clientX`, this value includes the horizontal scroll offset, if any.
- {{domxref("Touch.pageY")}} {{ReadOnlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top of the document. Unlike `clientY,` this value includes the vertical scroll offset, if any.
- {{domxref("Touch.target")}} {{ReadOnlyInline}}
  - : Returns the {{ domxref("Element")}} on which the touch point started when it was first placed on the surface, even if the touch point has since moved outside the interactive area of that element or even been removed from the document.

### Touch area

- {{domxref("Touch.radiusX")}} {{ReadOnlyInline}}
  - : Returns the X radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenX`.
- {{domxref("Touch.radiusY")}} {{ReadOnlyInline}}
  - : Returns the Y radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenY`.
- {{domxref("Touch.rotationAngle")}} {{ReadOnlyInline}}
  - : Returns the angle (in degrees) that the ellipse described by radiusX and radiusY must be rotated, clockwise, to most accurately cover the area of contact between the user and the surface.
- {{domxref("Touch.force")}} {{ReadOnlyInline}}
  - : Returns the amount of pressure being applied to the surface by the user, as a `float` between `0.0` (no pressure) and `1.0` (maximum pressure).

## Instance methods

_This interface has no methods and no parent, and doesn't inherit or implement any methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{ domxref("Document.createTouch()") }}
