---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.trim
---

{{JSRef}}

The **`trim()`** method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use {{jsxref("String.prototype.trimStart()", "trimStart()")}} or {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Syntax

```js-nolint
trim()
```

### Return value

A new string representing `str` stripped of whitespace from both its beginning and end. Whitespace is defined as [white space](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) characters plus [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

If neither the beginning or end of `str` has any whitespace, a new string is still returned (essentially a copy of `str`).

## Examples

### Using trim()

The following example trims whitespace from both ends of `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
