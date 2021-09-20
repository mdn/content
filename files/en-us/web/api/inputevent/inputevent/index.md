---
title: InputEvent()
slug: Web/API/InputEvent/InputEvent
tags:
  - API
  - Constructor
  - DOM
  - DOM Events
  - Experimental
  - Input
  - InputEvent
  - Reference
  - events
browser-compat: api.InputEvent.InputEvent
---
{{APIRef("DOM Events")}}

The **`InputEvent()`** constructor creates a new
{{domxref("InputEvent")}}.

## Syntax

```js
 event = new InputEvent(typeArg, inputEventInit);
```

### Values

- _typeArg_
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- _inputEventInit_{{optional_inline}}

  - : Is a `InputEventInit` dictionary, having the following fields:

    - `inputType`: (Optional) A string specifying the type of change for
      editable content such as, for example, inserting, deleting, or formatting text.
    - `data`: (Optional) A string containing characters to insert. This may
      be an empty string if the change doesn't insert text (such as when deleting
      characters, for example).
    - `dataTransfer`: (Optional) A {{domxref("DataTransfer")}} object
      containing information about richtext or plaintext data being added to or removed
      from editable content.
    - `isComposing`: (Optional) A boolean indicating that the event is part
      of a composition session, meaning it is after a {{event("compositionstart")}}
      event but before a {{event("compositionend")}} event.  The default is
      `false`.
    - `ranges`: (Optional) An array of static ranges that will be affected
      by a change to the DOM if the input event is not canceled.

    _The `InputEventInit` dictionary also accepts fields from
    {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event",
        "EventInit")}} dictionaries._

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InputEvent")}}, the interface of the objects it constructs.
