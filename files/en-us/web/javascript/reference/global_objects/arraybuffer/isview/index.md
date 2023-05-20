---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
page-type: javascript-static-method
browser-compat: javascript.builtins.ArrayBuffer.isView
---

{{JSRef}}

The **`ArrayBuffer.isView()`** static method determines whether the
passed value is one of the `ArrayBuffer` views,
such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
or a {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html","shorter")}}

## Syntax

```js-nolint
ArrayBuffer.isView(value)
```

### Parameters

- `value`
  - : The value to be checked.

### Return value

`true` if the given argument is one of the {{jsxref("ArrayBuffer")}} views;
otherwise, `false`.

## Examples

### Using isView

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
