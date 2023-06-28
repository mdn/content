---
title: "Keyboard: lock() method"
short-title: lock()
slug: Web/API/Keyboard/lock
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Keyboard.lock
---

{{APIRef("Keyboard Map API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`lock()`** method of the
{{domxref("Keyboard")}} interface returns a {{jsxref('Promise')}} after enabling the
capture of keypresses for any or all of the keys on the physical keyboard. This method
can only capture keys that are granted access by the underlying operating
system.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameters

- `keyCodes` {{optional_inline}}
  - : An {{jsxref('Array')}} of one or more key codes to lock. If no keycodes are provided
    all keys will be locked. A list of valid code values is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

### Return value

A {{jsxref('Promise')}}.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Examples

### Capturing all keys

The following example captures all keypresses.

```js
navigator.keyboard.lock();
```

### Capturing specific keys

The following example captures the "W", "A", "S", and "D" keys. It captures these keys
regardless of which modifiers are used with the key press. Assuming a standard US QWERTY
layout, registering `"KeyW"` ensures that "W", Shift+"W", Control+"W",
Control+Shift+"W", and all other key modifier combinations with "W" are sent to the app.
The same applies to for `"KeyA"`, `"KeyS"` and
`"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
