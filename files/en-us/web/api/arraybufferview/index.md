---
title: ArrayBufferView
slug: Web/API/ArrayBufferView
tags:
  - API
  - Interface
  - JavaScript
  - Reference
  - Typed Arrays
---
{{APIRef}}

**`ArrayBufferView`** is a helper type representing any of the following JavaScript types:

- {{jsxref("Int8Array")}},
- {{jsxref("Uint8Array")}},
- {{jsxref("Uint8ClampedArray")}},
- {{jsxref("Int16Array")}},
- {{jsxref("Uint16Array")}},
- {{jsxref("Int32Array")}},
- {{jsxref("Uint32Array")}},
- {{jsxref("Float32Array")}},
- {{jsxref("Float64Array")}},
- {{jsxref("BigInt64Array")}},
- {{jsxref("BigUint64Array")}} or
- {{jsxref("DataView")}}.

All of them, except for `DataView`, are {{jsxref("TypedArray")}} objects.

This is a helper type to simplify the specification; it isn't an interface, and there are no objects implementing it.

## Specifications

| Specification                                                                    | Status                   | Comment             |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('WebIDL', "#ArrayBufferView", "ArrayBufferView")}} | {{Spec2('WebIDL')}} | Initial definition. |
