---
title: FontFace.loaded
slug: Web/API/FontFace/loaded
page-type: web-api-instance-property
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - loaded
browser-compat: api.FontFace.loaded
---
{{APIRef("CSS Font Loading API")}}

The **`loaded`** read-only property of the
{{domxref("FontFace")}} interface returns a {{jsxref('Promise')}} that resolves with the
current `FontFace` object when the font specified in the object's constructor
is done loading or rejects with a `SyntaxError`.

## Value

A {{jsxref('Promise')}} that resolves with the current `FontFace` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
