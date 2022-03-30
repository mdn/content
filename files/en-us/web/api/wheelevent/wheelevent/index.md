---
title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
tags:
  - Constructor
  - DOM
  - Interface
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.WheelEvent
---
{{APIRef("DOM Events")}}

The **`WheelEvent()`** constructor returns a newly created
{{domxref("WheelEvent")}} object.

## Syntax

```js
new WheelEvent(typeArg, wheelEventInit);
```

### Properties

- `typeArg`
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- `wheelEventInit` {{optional_inline}}

  - : Is a `WheelEventInit` dictionary, having the following fields:

    - `"deltaX"`, optional and defaulting to `0.0`, is a
      `double` representing the horizontal scroll amount in the
      `deltaMode` unit.
    - `"deltaY"`, optional and defaulting to `0.0`, is a
      `double` representing the vertical scroll amount in the
      `deltaMode` unit.
    - `"deltaZ"`, optional and defaulting to `0.0`, is a
      `double` representing the scroll amount for the z-axis in the
      `deltaMode` unit.
    - `"deltaMode"`, optional and defaulting to `0`, is a
      `unsigned long` representing the unit of the delta values scroll
      amount. Permitted values are:

      | Constant          | Value  | Description                               |
      | ----------------- | ------ | ----------------------------------------- |
      | `DOM_DELTA_PIXEL` | `0x00` | The delta values are specified in pixels. |
      | `DOM_DELTA_LINE`  | `0x01` | The delta values are specified in lines.  |
      | `DOM_DELTA_PAGE`  | `0x02` | The delta values are specified in pages.  |

    > **Note:** The `WheelEventInit` dictionary also accepts fields from the
    > {{domxref("MouseEvent.MouseEvent", "MouseEventInit")}},
    > {{domxref("UIEvent.UIEvent", "UIEventInit")}} and {{domxref("Event.Event",
        "EventInit")}} dictionaries.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WheelEvent")}} interface it belongs to.
