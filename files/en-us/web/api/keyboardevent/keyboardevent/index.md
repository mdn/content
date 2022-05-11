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
{{APIRef("UI Events")}}

The **`KeyboardEvent()`** constructor creates a new
{{domxref("KeyboardEvent")}}.

## Syntax

```js
new KeyboardEvent(typeArg)
new KeyboardEvent(typeArg, keyboardEventInit)
```

### Parameters

- `typeArg`
  - : A string representing the name of the event.
- `keyboardEventInit` {{optional_inline}}

  - : A `KeyboardEventInit` dictionary, having the following fields:

    - `"key"`, optional string, defaulting to `""`,
      that sets the value of {{domxref("KeyboardEvent.key")}}.
    - `"code"`, optional string, defaulting to `""`,
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
      that sets the value of {{domxref("KeyboardEvent.metaKey")}}.
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
