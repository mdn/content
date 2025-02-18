---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trimStart
---

{{JSRef}}

The **`trimStart()`** method of {{jsxref("String")}} values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. `trimLeft()` is an alias of this method.

{{InteractiveExample("JavaScript Demo: String.trimStart()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## Syntax

```js-nolint
trimStart()

trimLeft()
```

### Parameters

None.

### Return value

A new string representing `str` stripped of whitespace from its beginning (left side). Whitespace is defined as [white space](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) characters plus [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

If the beginning of `str` has no whitespace, a new string is still returned (essentially a copy of `str`).

### Aliasing

After {{jsxref("String/trim", "trim()")}} was standardized, engines also implemented the non-standard method `trimLeft`. However, for consistency with {{jsxref("String/padStart", "padStart()")}}, when the method got standardized, its name was chosen as `trimStart`. For web compatibility reasons, `trimLeft` remains as an alias to `trimStart`, and they refer to the exact same function object. In some engines this means:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Examples

### Using trimStart()

The following example trims whitespace from the start of `str`, but not from its end.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.trimStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
