---
title: Keyboard.getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
page-type: web-api-instance-method
tags:
  - API
  - Keyboard API
  - Keyboard Lock
  - Keyboard Map
  - Method
  - Reference
  - getLayoutMap()
  - keyboard
  - Experimental
browser-compat: api.Keyboard.getLayoutMap
---
{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`getLayoutMap()`** method of the
{{domxref("Keyboard")}} interface returns a {{jsxref('Promise')}} that resolves with
an instance of {{domxref('KeyboardLayoutMap')}} which is a map-like object with
functions for retrieving the strings associated with specific physical keys.

## Syntax

```js
getLayoutMap()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with an instance of
{{domxref('KeyboardLayoutMap')}}.

## Examples

The following example demonstrates how to get the location- or layout-specific string
associated with the key that corresponds to the 'W' key on an English QWERTY keyboard.

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
