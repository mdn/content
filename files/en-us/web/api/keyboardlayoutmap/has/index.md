---
title: KeyboardLayoutMap.has()
slug: Web/API/KeyboardLayoutMap/has
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Keyboard API
  - Keyboard Map
  - KeyboardLayoutMap
  - Method
  - Reference
  - has()
  - keyboard
browser-compat: api.KeyboardLayoutMap.has
---
{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`has()`** method of the
{{domxref('KeyboardLayoutMap')}} interface returns a boolean indicating whether the
object has an element with the specified key.

A list of valid keys is found in
the [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) spec.

## Syntax

```js
has(key)
```

### Parameters

- `key`
  - : The key of an element to search for in the map.

### Return value

A {{jsxref('Boolean')}} indicating whether the specified key was found.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
