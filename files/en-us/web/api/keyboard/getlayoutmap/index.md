---
title: Keyboard.getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
tags:
  - API
  - Keyboard API
  - Keyboard Lock
  - Keyboard Map
  - Method
  - Reference
  - getLayoutMap()
  - keyboard
browser-compat: api.Keyboard.getLayoutMap
---
{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`getLayoutMap()`** method of the
{{domxref("Keyboard")}} interface returns a {{jsxref('Promise')}} that resolves with
an instance of {{domxref('KeyboardLayoutMap')}} which is a map-like object with
functions for retrieving the strings associated with specific physical keys.

## Syntax

```js
var promise = Keyboard.getLayoutMap()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with an instance of
{{domxref('KeyboardLayoutMap')}}.

## Example

The following example demonstrates how to get the location- or layout-specific string
associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

```js
var keyboard = navigator.keyboard;
keyboard.getLayoutMap()
.then(keyboardLayoutMap => {
  var upKey = keyboardLayoutMap.get('KeyW');
  window.alert('Press ' + upKey + ' to move up.');
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
