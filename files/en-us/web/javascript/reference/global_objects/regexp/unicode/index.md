---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.unicode
---
{{JSRef}}

The **`unicode`** accessor property indicates whether or not the `u` flag is used with the regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## Description

`RegExp.prototype.unicode` has the value `true` if the `u` flag was used; otherwise, `false`. The `u` flag enables various Unicode-related features. With the "u" flag:

- Any [Unicode code point escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) will be interpreted as such instead of as literal characters.
- Surrogate pairs will be interpreted as whole characters instead of two separate characters. For example, `/[😄]/u` would only match `"😄"` but not `"\ud83d"`.
- When [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) is automatically advanced (such as when calling [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), unicode regexes advance by Unicode code points instead of UTF-16 code units.

There are other changes to the parsing behavior that prevent possible syntax mistakes (which are analogous to [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) for regex syntax). This is explained in more detail in [Using Unicode regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_unicode_regular_expressions).

The set accessor of `unicode` is `undefined`. You cannot change this property directly.

## Examples

### Using the unicode property

```js
const regex = /\u{61}/u;

console.log(regex.unicode); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
