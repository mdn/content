---
title: "KeyboardEvent: initKeyboardEvent() method"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.KeyboardEvent.initKeyboardEvent
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

The **`KeyboardEvent.initKeyboardEvent()`** method initializes
the attributes of a keyboard event object. This method was introduced in draft of DOM
Level 3 Events, but deprecated in newer draft. Gecko won't support this feature since
implementing this method as experimental broke existing web apps (see [Firefox bug 999645](https://bugzil.la/999645)).
Web applications should use constructor instead of this if it's available.

## Syntax

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### Parameters

- `type`
  - : The type of keyboard event; browsers always set it to one of `keydown`,
    `keypress`, or `keyup`.
- `canBubble` {{optional_inline}}
  - : Indicates whether or not the event can bubble. Defaults to `false`.
- `cancelable` {{optional_inline}}
  - : Indicates whether or not the event can be canceled. Defaults to `false`.
- `view` {{optional_inline}}
  - : The {{glossary("WindowProxy")}} it is associated to. Defaults to `null`.
- `key` {{optional_inline}}
  - : The value of the key attribute. Defaults to `""`.
- `location` {{optional_inline}}
  - : The value of the location attribute. Defaults to `0`.
- `ctrlKey` {{optional_inline}}
  - : Indicates whether the control key modifier is active. Defaults to `false`.
- `altKey` {{optional_inline}}
  - : Indicates whether the alt key modifier is active. Defaults to `false`.
- `shiftKey` {{optional_inline}}
  - : Indicates whether the shift key modifier is active. Defaults to `false`.
- `metaKey` {{optional_inline}}
  - : Indicates whether the meta key modifier is active. Defaults to `false`.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

The `KeyboardEvent` interface specification went through numerous draft versions, first under DOM Events Level 2 where it was dropped as no consensus arose, then under DOM Events Level 3. This led to the implementation of non-standard initialization methods, the early DOM Events Level 2 version, {{domxref("KeyboardEvent.initKeyEvent()")}} by Gecko browsers and the early DOM Events Level 3 version, {{domxref("KeyboardEvent.initKeyboardEvent()")}} by others. Both have been superseded by the modern usage of a constructor: {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Browser compatibility

{{Compat}}
