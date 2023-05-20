---
title: "KeyboardEvent: KeyboardEvent() constructor"
short-title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
page-type: web-api-constructor
browser-compat: api.KeyboardEvent.KeyboardEvent
---

{{APIRef("UI Events")}}

The **`KeyboardEvent()`** constructor creates a new
{{domxref("KeyboardEvent")}} object.

## Syntax

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `keydown`, `keyup`, or `keypress`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("UIEvent/UIEvent", "UIEvent()")}}_, can have the following properties:
    - `key` {{optional_inline}}
      - : A string, defaulting to `""`, that sets the value of {{domxref("KeyboardEvent.key")}}.
    - `code` {{optional_inline}}
      - : A string, defaulting to `""`, that sets the value of {{domxref("KeyboardEvent.code")}}.
    - `location` {{optional_inline}}
      - : A string, defaulting to `0`, that sets the value of {{domxref("KeyboardEvent.location")}}.
    - `repeat` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.repeat")}}.
    - `isComposing` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.isComposing")}}.
    - `charCode` {{optional_inline}} {{deprecated_inline}}
      - : A number, defaulting to `0`, that sets the value of the deprecated {{domxref("KeyboardEvent.charCode")}}.
    - `keyCode` {{optional_inline}} {{deprecated_inline}}
      - : A number, defaulting to `0`, that sets the value of the deprecated {{domxref("KeyboardEvent.keyCode")}}.
    - `which` {{optional_inline}} {{deprecated_inline}}
      - : A number, defaulting to `0`, that sets the value of the deprecated {{domxref("UIEvent.which")}}.
    - `ctrlKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.ctrlKey")}}.
    - `shiftKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.shiftKey")}}.
    - `altKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.altKey")}}.
    - `metaKey` {{optional_inline}}
      - : A boolean value, defaulting to `false`, that sets the value of {{domxref("KeyboardEvent.metaKey")}}.

### Return value

A new {{domxref("KeyboardEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}, the interface of the objects it constructs.
