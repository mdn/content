---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trimStart
---
{{JSRef}}

The **`trimStart()`** method removes whitespace from the
beginning of a string. `trimLeft()` is an alias of this method.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Syntax

```js
trimStart()

trimLeft()
```

### Return value

A new string representing `str` stripped of whitespace from its beginning (left side).

If the beginning of `str` has no whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

### Aliasing

For consistency with functions like {{jsxref("String.prototype.padStart")}} the
standard method name is `trimStart`. However, for web compatibility reasons,
`trimLeft` remains as an alias to `trimStart`. In some engines
this means:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Examples

### Using trimStart()

The following example displays the lowercase string `'foo '`:

```js
let str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.trimStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
