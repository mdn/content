---
title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
page-type: web-api-constructor
tags:
  - Constructor
  - Reference
browser-compat: api.DOMMatrixReadOnly.DOMMatrixReadOnly
---
{{APIRef("Geometry Interfaces")}}

The **`DOMMatrixReadOnly`** constructor creates a new
{{domxref("DOMMatrixReadOnly")}} object which represents 4x4 matrices, suitable for 2D
and 3D operations.

## Syntax

```js
DOMMatrixReadOnly();
DOMMatrixReadOnly(init);
```

### Parameters

- `init` {{optional_inline}}
  - : Either a string containing a sequence of numbers or an array of numbers
    specifying the matrix you want to create.

    In case an array of numbers is passed, the behavior depends on the length of the array:
    - for a 6-element array of components in the form `[a, b, c, d, e, f]`, a 2D read-only matrix is created, initialized with the provided components.
    - for a 16-element array of components (in the column-major order) in the form `[m11, m12, m13, …, m42, m43, m44]`, a 3D read-only matrix is created, initialized with the provided components.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
