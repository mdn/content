---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Keyboard API
  - Keyboard Map
  - KeyboardLayoutMap
  - Reference
  - keyboard
browser-compat: api.KeyboardLayoutMap
---
{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`KeyboardLayoutMap`** interface of the [Keyboard API](/en-US/docs/Web/API/Keyboard_API) is a map-like object with functions for retrieving the string associated with specific physical keys.

A list of valid keys is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) specification.

## Properties

- {{domxref('KeyboardLayoutMap.entries')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns an array of a given object's own enumerable property `[key, value]` pairs, in the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop (the difference being that a `for-in` loop enumerates properties in the prototype chain as well).
- {{domxref('KeyboardLayoutMap.keys')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a new _array iterator_ object that contains the keys for each index in the array.
- {{domxref('KeyboardLayoutMap.size')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns the number of elements in the `KeyboardLayoutMap` object.
- {{domxref('KeyboardLayoutMap.values')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a new _array iterator_ object that contains the values for each index in the `KeyboardLayoutMap` object.

## Methods

- {{domxref('KeyboardLayoutMap.forEach()')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Executes a provided function once for each element of `KeyboardLayoutMap`.
- {{domxref('KeyboardLayoutMap.get()')}} {{experimental_inline}}
  - : Returns the element with the given key from the `KeyboardLayoutMap` object.
- {{domxref('KeyboardLayoutMap.has()')}} {{experimental_inline}}
  - : Returns a boolean indicating whether the `KeyboardLayoutMap` object has an element with the specified key.

## Examples

The following example demonstrates how to get the location- or layout-specific string associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
const keyboard = navigator.keyboard;
keyboard.getLayoutMap()
.then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get('KeyW');
  window.alert(`Press ${upKey} to move up.`);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
