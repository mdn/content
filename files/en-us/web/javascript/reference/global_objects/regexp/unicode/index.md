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

The **`unicode`** property indicates whether or not the "`u`" flag is used with a regular expression. `unicode` is a read-only property of an individual regular expression instance.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## Description

The value of `unicode` is a {{jsxref("Boolean")}} and `true` if the "`u`" flag was used; otherwise `false`. The "`u`" flag enables various Unicode-related features. With the "u" flag, any Unicode code point escapes will be interpreted as such, for example.

You cannot change this property directly. It is read-only.

## Examples

### Using the unicode property

```js
var regex = new RegExp('\u{61}', 'u');

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
