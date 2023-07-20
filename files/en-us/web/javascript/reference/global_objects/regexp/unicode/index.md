---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.unicode
---

{{JSRef}}

The **`unicode`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `u` flag is used with this regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## Description

`RegExp.prototype.unicode` has the value `true` if the `u` flag was used; otherwise, `false`. The `u` flag enables various Unicode-related features. With the "u" flag:

- Any [Unicode code point escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) will be interpreted as such instead of identity escapes. For example `/\u{61}/u` matches `"a"`, but `/\u{61}/` (without `u` flag) matches `"u".repeat(61)`, where the `\u` is equivalent to a single `u`.
- Surrogate pairs will be interpreted as whole characters instead of two separate characters. For example, `/[😄]/u` would only match `"😄"` but not `"\ud83d"`.
- When [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) is automatically advanced (such as when calling [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), unicode regexes advance by Unicode code points instead of UTF-16 code units.

There are other changes to the parsing behavior that prevent possible syntax mistakes (which are analogous to [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) for regex syntax). These syntaxes are all [deprecated and only kept for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on them.

The set accessor of `unicode` is `undefined`. You cannot change this property directly.

### Unicode-aware mode

When we refer to _Unicode-aware mode_, we mean the regex has either the `u` or the [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) flag, in which case the regex enables Unicode-related features (such as [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) and has much stricter syntax rules. Because `u` and `v` interpret the same regex in incompatible ways, using both flags results in a {{jsxref("SyntaxError")}}.

Similarly, a regex is _Unicode-unaware_ if it has neither the `u` nor the `v` flag. In this case, the regex is interpreted as a sequence of UTF-16 code units, and there are many legacy syntaxes that do not become syntax errors.

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

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
