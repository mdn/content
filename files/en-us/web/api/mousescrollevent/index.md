---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Events
  - Deprecated
  - Event
  - Interface
  - Reference
  - Non-standard
browser-compat: api.MouseScrollEvent
---
{{APIRef("UI Events")}}{{ Non-standard_Header }}{{Deprecated_Header}}

The **`MouseScrollEvent`** interface represents events that occur due to the user moving a mouse wheel or similar input device.

> **Warning:** Do not use this interface for wheel events.
>
> Like `MouseWheelEvent`, this interface is non-standard and deprecated. It was used in Gecko-based browsers only. Instead use the standard _{{domxref("WheelEvent")}}._

## Method overview

```
void initMouseScrollEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in nsIDOMAbstractView viewArg,
  in long detailArg,
  in long screenXArg,
  in long screenYArg,
  in long clientXArg,
  in long clientYArg,
  in boolean ctrlKeyArg,
  in boolean altKeyArg,
  in boolean shiftKeyArg,
  in boolean metaKeyArg,
  in unsigned short buttonArg,
  in nsIDOMEventTarget relatedTargetArg,
  in long axis);
```

## Attributes

| Attribute                 | Type   | Description                 |
| ------------------------- | ------ | --------------------------- |
| `axis` {{ReadOnlyInline}} | `long` | Indicates scroll direction. |

## Constants

### Delta modes

| Constant          | Value  | Description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | The event is caused by horizontal wheel operation. |
| `VERTICAL_AXIS`   | `0x02` | The event is caused by vertical wheel operation.   |

## Methods

- `initMouseScrollEvent()`
  - : See `nsIDOMMouseScrollEvent::initMouseScrollEvent()`.

## Browser compatibility

{{Compat}}

## See also

- `DOMMouseScroll`
- `MozMousePixelScroll`
- Standardized mouse wheel event object: {{ domxref("WheelEvent") }}
