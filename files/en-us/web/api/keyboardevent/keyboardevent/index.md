---
title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
tags:
  - API
  - Constructor
  - DOM
  - KeyboardEvent
  - Reference
browser-compat: api.KeyboardEvent.KeyboardEvent
---
{{APIRef("DOM Events")}}

The **`KeyboardEvent()`** constructor creates a new
{{domxref("KeyboardEvent")}}.

## Syntax

```js
 event = new KeyboardEvent(typeArg, KeyboardEventInit);
```

### Values

- _typeArg_
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- _KeyboardEventInit_{{optional_inline}}

  - : Is a `KeyboardEventInit` dictionary, having the following fields:

    - `"key"`, optional {{domxref("DOMString")}}, defaulting to `""`,
      that sets the value of {{domxref("KeyboardEvent.key")}}.
    - `"code"`, optional {{domxref("DOMString")}}, defaulting to `""`,
      that sets the value of {{domxref("KeyboardEvent.code")}}.
    - `"location"`, optional `unsigned long`, defaulting to `0`,
      that sets the value of {{domxref("KeyboardEvent.location")}}.
    - `"ctrlKey"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.ctrlKey")}}.
    - `"shiftKey"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.shiftKey")}}.
    - `"altKey"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.altKey")}}.
    - `"metaKey"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.metaKey")}}.<
      /li>
    - `"repeat"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.repeat")}}.
    - `"isComposing"`, optional boolean value, defaulting to `false`,
      that sets the value of {{domxref("KeyboardEvent.isComposing")}}.
    - `"charCode"`, optional `unsigned long`, defaulting to `0`,
      that sets the value of the deprecated {{domxref("KeyboardEvent.charCode")}}.
    - `"keyCode"`, optional `unsigned long`, defaulting to `0`,
      that sets the value of the deprecated {{domxref("KeyboardEvent.keyCode")}}.
    - `"which"`, optional `unsigned long`, defaulting to `0`,
      that sets the value of the deprecated {{domxref("KeyboardEvent.which")}}.

    > **Note:** The `KeyboardEventInit` dictionary also accepts fields from
    > the {{domxref("UIEvent.UIEvent", "UIEventInit")}} and
    > {{domxref("Event.Event", "EventInit")}} dictionaries.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}, the interface of the objects it constructs.
