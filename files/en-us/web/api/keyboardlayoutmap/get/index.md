---
title: KeyboardLayoutMap.get()
slug: Web/API/KeyboardLayoutMap/get
tags:
  - API
  - Experimental
  - Keyboard API
  - Keyboard Map
  - KeyboardLayoutMap
  - Method
  - Reference
  - get()
  - keyboard
browser-compat: api.KeyboardLayoutMap.get
---
{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`get()`** method of the
{{domxref('KeyboardLayoutMap')}} interface returns the element with the given
key.

A list of valid keys is found in the [UI Events
KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

## Syntax

```js
var value = KeyboardLayoutMap.get(key)
```

### Parameters

- key
  - : The key of the item to return from the map.

### Return value

The value of the specified key.

## Example

The following example demonstrates how to get the location- or layout-specific string
associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
var keyboard = navigator.keyboard;
keyboard.getLayoutMap()
.then(keyboardLayoutMap => {
  var upKey = keyboardLayoutMap.get('KeyW');
  window.alert('Press ' + upKey + ' to move up.');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
