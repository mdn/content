---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.@@iterator
---
{{JSRef}}

The **`[@@iterator]()`** method returns a new iterator object
that iterates over the code points of a String value, returning each code point as a
String value.

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## Syntax

```js
str[Symbol.iterator]
```

### Return value

A new iterator object.

## Examples

### Using \[@@iterator]\()

```js
var str = 'A\uD835\uDC68';

var strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

### Using \[@@iterator]\() with for..of

```js
var str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (var v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype[@@iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Iteration
  protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
