---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
tags:
  - API
  - DOM
  - DOM Events
  - Deprecated
  - Event
  - Interface
  - Reference
browser-compat: api.MouseScrollEvent
---
{{APIRef("DOM Events")}}{{ non-standard_header() }}{{deprecated_header}}

The **`MouseScrollEvent`** interface represents events that occur due to the user moving a mouse wheel or similar input device.

> **Warning:** Do not use this interface for wheel events.
>
> Like {{domxref("MouseWheelEvent")}}, this interface is non-standard and deprecated. It was used in Gecko-based browsers only. Instead use the standard _{{domxref("WheelEvent")}}._

## Method overview

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

## Attributes

| Attribute                       | Type   | Description                 |
| ------------------------------- | ------ | --------------------------- |
| `axis` {{ReadOnlyInline}} | `long` | Indicates scroll direction. |

## Constants

### Delta modes

| Constant          | Value  | Description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | The event is caused by horizontal wheel operation. |
| `VERTICAL_AXIS`   | `0x02` | The event is caused by vertical wheel operation.   |

## Methods

- `initMouseScrollEvent()`
  - : See [nsIDOMMouseScrollEvent::initMouseScrollEvent()](/en-US/docs/XPCOM_Interface_Reference/nsIDOMMouseScrollEvent#initMouseScrollEvent%28%29).

## Browser compatibility

{{Compat}}

## See also

- `DOMMouseScroll`
- `MozMousePixelScroll`
- Non-gecko browsers' legacy mouse wheel event object: {{ domxref("MouseWheelEvent") }}
- Standardized mouse wheel event object: {{ domxref("WheelEvent") }}
