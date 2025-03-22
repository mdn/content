---
title: Keyboard
slug: Web/API/Keyboard
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Keyboard
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

The **`Keyboard`** interface of the {{domxref("Keyboard API", "", "", "nocode")}} provides functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.

A list of valid code values is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("EventTarget")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("EventTarget")}}._

- {{domxref('Keyboard.getLayoutMap()')}} {{experimental_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves with an instance of {{domxref('KeyboardLayoutMap')}} which is a map-like object with functions for retrieving the strings associated with specific physical keys.
- {{domxref('Keyboard.lock()')}} {{experimental_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves after enabling the capture of keypresses for any or all of the keys on the physical keyboard.
- {{domxref('Keyboard.unlock()')}} {{experimental_inline}}
  - : Unlocks all keys captured by the `lock()` method and returns synchronously.

## Example

### Keyboard mapping

The following example demonstrates how to get the location- or layout-specific string associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // Do something else.
}
```

### Keyboard locking

The following example captures the <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, and <kbd>D</kbd> keys, call `lock()` with a list that contains the key code attribute value for each of these keys:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

This captures these keys regardless of which modifiers are used with the key press. Assuming a standard United States QWERTY layout, registering `KeyW` ensures that <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd>, and all other key modifier combinations with <kbd>W</kbd> are sent to the app. The same applies to for `KeyA`, `KeyS`, and `KeyD`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
