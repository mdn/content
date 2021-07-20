---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.join
---
{{JSRef}}

The **`join()`** method joins all elements of an array into a
string. This method has the same algorithm as {{jsxref("Array.prototype.join()")}}.
_TypedArray_ is one of the [typed
array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## Syntax

```js
join()
join(separator)
```

### Parameters

- `separator` {{optional_inline}}
  - : Specifies a string to separate each element. The `separator`
    is converted to a string if necessary. If omitted, the typed array elements are
    separated with a comma (",").

### Return value

A string with all array elements joined.

## Examples

### Using join()

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.join();      // '1,2,3'
uint8.join(' / '); // '1 / 2 / 3'
uint8.join('');    // '123'
```

## Polyfill

Since there is no global object with the name _TypedArray_, polyfilling must be
done on an "as needed" basis.

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, 'join', {
    value: Array.prototype.join
  });
}
```

If you need to support truly obsolete JavaScript engines that don't support
{{jsxref("Object.defineProperty")}}, it's best not to polyfill
`Array.prototype` methods at all, as you can't make them non-enumerable.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `TypedArray.prototype.join` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
