---
title: FontFaceSet.status
slug: Web/API/FontFaceSet/status
tags:
  - API
  - Property
  - Reference
  - status
  - FontFaceSet
browser-compat: api.FontFaceSet.status
---
{{APIRef("CSS Font Loading API")}}

The **`status`** read-only property of the {{domxref("FontFaceSet")}} interface returns the loading state of the fonts in the set.

## Value

One of:

- `"loading"`
- `"loaded"`

## Examples

In the following example the `status` of the `FontFaceSet` is printed to the console.

```js
console.log(document.fonts.status);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


