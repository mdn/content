---
title: InputEvent()
slug: Web/API/InputEvent/InputEvent
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

<<<<<<< HEAD
- `typeArg`
  - : A string representing the name of the event.
- `inputEventInit` {{optional_inline}}

  - : A `InputEventInit` dictionary, having the following fields:

    - `inputType`
      - : (Optional) A string specifying the type of change for
        editable content such as, for example, inserting, deleting, or formatting text.
    - `data`
      - : (Optional) A string containing characters to insert. This may
        be an empty string if the change doesn't insert text (such as when deleting
        characters, for example).
    - `dataTransfer`
      - : (Optional) A {{domxref("DataTransfer")}} object
        containing information about richtext or plaintext data being added to or removed
        from editable content.
    - `isComposing`
      - : (Optional) A boolean indicating that the event is part
        of a composition session, meaning it is after a {{event("compositionstart")}}
        event but before a {{event("compositionend")}} event.  The default is
        `false`.
    - `ranges`
      - : (Optional) An array of static ranges that will be affected
        by a change to the DOM if the input event is not canceled.

    _The `InputEventInit` dictionary also accepts fields from
    {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event",
        "EventInit")}} dictionaries._
=======
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
        meaning it is after a {{event("compositionstart")}} event but before a {{event("compositionend")}} event. The default is `false`.

## Return value

A new {{domxref("InputEvent")}} object.

## Specifications

{{Specifications}}
>>>>>>> d1fdc27dad (Update Event constructors)

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputEvent")}}, the interface of the objects it constructs.
