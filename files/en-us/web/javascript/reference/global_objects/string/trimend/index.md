---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trimEnd
---
{{JSRef}}

The **`trimEnd()`** method removes whitespace from the end of a
string. `trimRight()` is an alias of this method.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Syntax

```js
trimEnd()

trimRight()
```

### Return value

A new string representing `str` stripped of whitespace from its end (right side).

If the end of `str` has no whitespace, a new string is still returned (essentially a copy of `str`), with no exception being thrown.

### Aliasing

For consistency with functions like {{jsxref("String.prototype.padEnd")}} the standard
method name is `trimEnd`. However, for web compatibility reasons,
`trimRight` remains as an alias to `trimEnd`. In some engines this
means:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Examples

### Using trimEnd()

The following example displays the lowercase string `' foo'`:

```js
let str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
