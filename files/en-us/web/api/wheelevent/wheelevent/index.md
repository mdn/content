---
title: "WheelEvent: WheelEvent() constructor"
short-title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
page-type: web-api-constructor
browser-compat: api.WheelEvent.WheelEvent
---

{{APIRef("UI Events")}}

The **`WheelEvent()`** constructor returns a new {{domxref("WheelEvent")}} object.

> **Note:** If you construct a synthetic event using this constructor, that event will not be _trusted_, for security reasons.
> Only browser-generated `WheelEvent` objects are trusted and only trusted events trigger default actions.

## Syntax

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `wheel`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("MouseEvent/MouseEvent", "MouseEvent()")}}_, can have the following properties:
    - `deltaX` {{optional_inline}}
      - : A floating number representing the horizontal scroll amount in the `deltaMode` unit.
        It defaults to `0.0`.
    - `deltaY` {{optional_inline}}
      - : A floating number representing the vertical scroll amount in the `deltaMode` unit.
        It defaults to `0.0`.
    - `deltaZ` {{optional_inline}}
      - : A floating number representing the scroll amount for the z-axis scroll amount in the `deltaMode` unit.
        It defaults to `0.0`.
    - `deltaMode` {{optional_inline}}
      - : An integer representing the unit of the delta values scroll amount. It defaults to `0x00`. Permitted values are:
        | Constant | Value | Description |
        | ----------------- | ------ | ----------------------------------------- |
        | `DOM_DELTA_PIXEL` | `0x00` | The delta values are specified in pixels. |
        | `DOM_DELTA_LINE` | `0x01` | The delta values are specified in lines. |
        | `DOM_DELTA_PAGE` | `0x02` | The delta values are specified in pages. |

### Return value

A new {{domxref("WheelEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WheelEvent")}} interface it belongs to.
