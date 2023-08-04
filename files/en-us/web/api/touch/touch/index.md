---
title: "Touch: Touch() constructor"
short-title: Touch()
slug: Web/API/Touch/Touch
page-type: web-api-constructor
browser-compat: api.Touch.Touch
---

{{APIRef("Touch Events")}}

The **`Touch()`** constructor creates a new {{domxref("Touch")}} object.

## Syntax

```js-nolint
new Touch(options)
```

### Parameters

- `touchInit`

  - : An object with the following fields:

    - `identifier`
      - : A `long` value, that is the identification number for the touch point.
    - `target`
      - : A {{domxref("EventTarget")}} object, the item at which the touch point started when it was first placed on the surface.
    - `clientX` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the horizontal position of the touch on the client window of user's screen, excluding any scroll offset.
    - `clientY` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the vertical position of the touch on the client window of the user's screen, excluding any scroll offset.
    - `screenX` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the horizontal position of the touch on the user's screen.
    - `screenY` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the vertical position of the touch on the user's screen.
    - `pageX` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the horizontal position of the touch on the client window of user's screen, including any scroll offset.
    - `pageY` {{optional_inline}}
      - : Defaults to `0`, of type `double`, that is the vertical position of the touch on the client window of the user's screen, including any scroll offset.
    - `radiusX` {{optional_inline}}
      - : Defaults to `0`, of type `float`, that is the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the axis indicated by rotationAngle, in CSS pixels of the same scale as screenX; `0` if no value is known. The value must not be negative.
    - `radiusY` {{optional_inline}}
      - : Defaults to `0`, of type `float`, that is the radius of the ellipse which most closely circumscribes the touching area (e.g. finger, stylus) along the axis perpendicular to that indicated by rotationAngle, in CSS pixels of the same scale as screenY; `0` if no value is known. The value must not be negative.
    - `rotationAngle` {{optional_inline}}
      - : Defaults to `0`, of type `float`, that is the angle (in degrees) that the ellipse described by radiusX and radiusY is rotated clockwise about its center; `0` if no value is known. The value must be greater than or equal to `0` and less than `90`. If the ellipse described by radiusX and radiusY is circular, then rotationAngle has no effect. The user agent may use `0` as the value in this case, or it may use any other value in the allowed range. (For example, the user agent may use the rotationAngle value from the previous touch event, to avoid sudden changes.).
    - `force` {{optional_inline}}
      - : Defaults to `0`, of type `float`, that is the relative value of pressure applied, in the range `0` to `1`, where `0` is no pressure, and `1` is the highest level of pressure the touch device is capable of sensing; `0` if no value is known. In environments where force is known, the absolute pressure represented by the force attribute, and the sensitivity in levels of pressure, may vary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TouchEvent")}}, the interface of the objects it constructs.
