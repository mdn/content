---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.isArray
---
{{JSRef}}

The **`Array.isArray()`** method determines whether the passed
value is an {{jsxref("Array")}}.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

## Syntax

```js
Array.isArray(value)
```

### Parameters

- `value`
  - : The value to be checked.

### Return value

`true` if the value is an {{jsxref("Array")}}; otherwise,
`false`.

## Description

If the value is an {{jsxref("Array")}}, `true` is returned; otherwise,
`false` is.

See the article
["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html)
for more details.
Given a {{jsxref("TypedArray")}} instance, `false` is always returned.

## Examples

### Using Array.isArray

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` vs `isArray`

When checking for `Array` instance, `Array.isArray` is preferred
over `instanceof` because it works through `iframes`.

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.isArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
