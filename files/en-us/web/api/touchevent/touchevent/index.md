---
title: "TouchEvent: TouchEvent() constructor"
short-title: TouchEvent()
slug: Web/API/TouchEvent/TouchEvent
page-type: web-api-constructor
browser-compat: api.TouchEvent.TouchEvent
---

{{APIRef("Touch Events")}}

The **`TouchEvent()`** constructor creates a new {{domxref("TouchEvent")}} object.

> **Note:** If you construct a synthetic event using this constructor, that event will not be _trusted_, for security reasons.
> Only browser-generated `TouchEvent` objects are trusted and only trusted events trigger default actions.

## Syntax

```js-nolint
new TouchEvent(type)
new TouchEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `touchstart`, `touchend`, `touchmove`, `touchcancel`
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("UIEvent/UIEvent", "UIEvent()")}}_, can have the following properties:
    - `touches` {{optional_inline}}
      - : A {{domxref("TouchList")}}, defaulting to an empty one, that is a list of objects for every point of contact currently touching the surface.
    - `targetTouches` {{optional_inline}}
      - : A {{domxref("TouchList")}}, defaulting to an empty one,, that is a list of objects for every point of contact that is touching the surface
        _and_ started on the element that is the target of the current event.
    - `changedTouches` {{optional_inline}}
      - : and defaulting to `[]`, of type `Touch[]`, that is a list of objects for every point of contact which contributed to the event.
    - `ctrlKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, indicating if the <kbd>ctrl</kbd> key was simultaneously pressed.
    - `shiftKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, indicating if the <kbd>shift</kbd> key was simultaneously pressed.
    - `altKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, indicating if the <kbd>alt</kbd> key was simultaneously pressed.
    - `metaKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, indicating if the <kbd>meta</kbd> key was simultaneously pressed.

### Return value

A new {{domxref("TouchEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TouchEvent")}}, the interface of the objects it constructs.
