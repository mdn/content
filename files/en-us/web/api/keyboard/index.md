---
title: Keyboard
slug: Web/API/Keyboard
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Keyboard API
  - Keyboard Lock
  - Keyboard Map
  - Reference
  - keyboard
browser-compat: api.Keyboard
---
{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

The **`Keyboard`** interface of the [Keyboard API](/en-US/docs/Web/API/Keyboard_API) provides functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.

A list of valid code values is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

{{InheritanceDiagram}}

## Properties

None.

## Methods

- {{domxref('Keyboard.getLayoutMap()')}} {{experimental_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves with an instance of {{domxref('KeyboardLayoutMap')}} which is a map-like object with functions for retrieving the strings associated with specific physical keys.
- {{domxref('Keyboard.lock()')}} {{experimental_inline}}
  - : Returns a {{jsxref('Promise')}} after enabling the capture of keypresses for any or all of the keys on the physical keyboard.
- {{domxref('Keyboard.unlock()')}} {{experimental_inline}}
  - : Unlocks all keys captured by the `lock()` method and returns synchronously.

## Example

The following example demonstrates how to get the location- or layout-specific string associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap()
  .then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get('KeyW');
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // Do something else.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
