---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
page-type: web-api-interface
status:
  - experimental
browser-compat: api.KeyboardLayoutMap
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

The **`KeyboardLayoutMap`** interface of the {{domxref("Keyboard API", "", "", "nocode")}} is a read-only object with functions for retrieving the string associated with specific physical keys.

A `KeyboardLayoutMap` instance is a read-only [`Map`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is a string identifying the unique physical key on the keyboard (a "key code"), and the corresponding value is the associated key attribute value (which may be affected by the keyboard layout, and so on).

A list of valid keys is found in the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) specification.

## Instance properties

- {{domxref('KeyboardLayoutMap.size')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns the number of elements in the `KeyboardLayoutMap` object.

## Instance methods

- `KeyboardLayoutMap[Symbol.iterator]()` {{experimental_inline}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the key/value pairs.
- {{domxref('KeyboardLayoutMap.entries()')}} {{experimental_inline}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the key/value pairs.
- {{domxref('KeyboardLayoutMap.forEach()')}} {{experimental_inline}}
  - : Executes a provided function once for each element of `KeyboardLayoutMap`.
- {{domxref('KeyboardLayoutMap.get()')}} {{experimental_inline}}
  - : Returns the element with the given key from the `KeyboardLayoutMap` object.
- {{domxref('KeyboardLayoutMap.has()')}} {{experimental_inline}}
  - : Returns a boolean indicating whether the `KeyboardLayoutMap` object has an element with the specified key.
- {{domxref('KeyboardLayoutMap.keys()')}} {{experimental_inline}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the keys for each index in the `KeyboardLayoutMap` object.
- {{domxref('KeyboardLayoutMap.values()')}} {{experimental_inline}}
  - : Returns a new [Iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that contains the values for each index in the `KeyboardLayoutMap` object.

## Examples

The following example demonstrates how to get the location- or layout-specific string associated with the keyboard code that corresponds to the 'W' key on an English QWERTY keyboard.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
