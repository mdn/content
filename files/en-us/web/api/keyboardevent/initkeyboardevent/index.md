---
title: KeyboardEvent.initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
tags:
  - API
  - Deprecated
  - KeyboardEvent
  - Method
  - Reference
browser-compat: api.KeyboardEvent.initKeyboardEvent
---
{{APIRef("DOM Events")}}{{Deprecated_Header}}

The **`KeyboardEvent.initKeyboardEvent()`** method initializes
the attributes of a keyboard event object. This method was introduced in draft of DOM
Level 3 Events, but deprecated in newer draft. Gecko won't support this feature since
implementing this method as experimental broke existing web apps (see {{bug(999645)}}).
Web applications should use constructor instead of this if it's available.

## Syntax

```js
kbdEvent.initKeyboardEvent(typeArg, canBubbleArg, cancelableArg,
                           viewArg, charArg, keyArg,
                           locationArg, modifiersListArg, repeat)
```

### Parameters

- _`typeArg`_
  - : The type of keyboard event; this will be one of `keydown`,
    `keypress`, or `keyup`.
- _`canBubbleArg`_
  - : Whether or not the event can bubble.
- _`cancelableArg`_
  - : Whether or not the event can be canceled.
- _`viewArg`_
  - : The {{domxref("WindowProxy")}} it is associated to.
- _`keyArg`_
  - : The value of the key attribute.
- _`locationArg`_
  - : The value of the location attribute.
- _`ctrlKey`_
  - : Whether the Control key modifier is active.
- _`altKey`_
  - : Whether the Alt key modifier is active.
- _`shiftKey`_
  - : Whether the Shift key modifier is active.
- _`metaKey`_
  - : Whether the Meta key modifier is active.

## Specifications

{{Specifications}}

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser compatibility

{{Compat}}
