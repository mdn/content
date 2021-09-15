---
title: FontFace.load
slug: Web/API/FontFace/load
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Method
  - Reference
  - load
browser-compat: api.FontFace.load
---
{{APIRef("CSS Font Loading API")}}

The **`load()`** method of the
{{domxref("FontFace")}} interface loads a font based on current object's
constructor-passed requirements, including a location or source buffer, and returns a
{{jsxref('Promise')}} that resolves with the current FontFace object.

## Syntax

```js
let promise = FontFace.load();
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with a reference to the current
`FontFace` object when the font loads or rejects with a `NetworkError` {{domxref("DOMException")}} if the
loading process fails.

### Exceptions

- NetworkError
  - : Indicates that the attempt to load the font failed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
