---
title: InputEvent()
slug: Web/API/InputEvent/InputEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM
  - DOM Events
  - Input
  - InputEvent
  - Reference
  - events
browser-compat: api.InputEvent.InputEvent
---
{{APIRef("UI Events")}}

The **`InputEvent()`** constructor creates a new {{domxref("InputEvent")}} object.

## Syntax

```js
new InputEvent(type)
new InputEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `beforeinput`, or `input`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("UIEvent/UIEvent", "UIEvent()")}}_, can have the following properties:
    - `inputType` {{optional_inline}}
      - : A string specifying the type of change for editable content
        such as, for example, inserting, deleting, or formatting text.
    - `data` {{optional_inline}}
      - : A string containing characters to insert.
        This may be an empty string if the change doesn't insert text
        (such as when deleting characters, for example).
    - `isComposing` {{optional_inline}}
      - : A boolean indicating that the event is part of a composition session,
        meaning it is after a {{domxref("Element/compositionstart_event", "compositionstart")}} event but before a {{domxref("Element/compositionend_event", "compositionend")}} event. The default is `false`.

## Return value

A new {{domxref("InputEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputEvent")}}, the interface of the objects it constructs.
