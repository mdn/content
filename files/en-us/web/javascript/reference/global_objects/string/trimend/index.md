---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trimEnd
---

{{JSRef}}

The **`trimEnd()`** method of {{jsxref("String")}} values removes whitespace from the end of this string and returns a new string, without modifying the original string. `trimRight()` is an alias of this method.

{{InteractiveExample("JavaScript Demo: String.trimEnd()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## Syntax

```js-nolint
trimEnd()

trimRight()
```

### Parameters

None.

### Return value

A new string representing `str` stripped of whitespace from its end (right side). Whitespace is defined as [white space](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) characters plus [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

If the end of `str` has no whitespace, a new string is still returned (essentially a copy of `str`).

### Aliasing

After {{jsxref("String/trim", "trim()")}} was standardized, engines also implemented the non-standard method `trimRight`. However, for consistency with {{jsxref("String/padEnd", "padEnd()")}}, when the method got standardized, its name was chosen as `trimEnd`. For web compatibility reasons, `trimRight` remains as an alias to `trimEnd`, and they refer to the exact same function object. In some engines this means:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Examples

### Using trimEnd()

The following example trims whitespace from the end of `str`, but not from its start.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
