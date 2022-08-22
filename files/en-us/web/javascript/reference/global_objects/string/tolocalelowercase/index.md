---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
tags:
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toLocaleLowerCase
---
{{JSRef}}

The **`toLocaleLowerCase()`** method returns the calling string
value converted to lower case, according to any locale-specific case mappings.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntax

```js
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. Indicates the locale to be used to convert to
    lower case according to any locale-specific case mappings. If multiple locales are
    given in an {{jsxref("Array")}}, the [best available locale](https://tc39.es/ecma402/#sec-bestavailablelocale) is used. The default locale is the host environment's current locale.

### Return value

A new string representing the calling string converted to lower case, according to any
locale-specific case mappings.

### Exceptions

- A {{jsxref("RangeError")}} ("invalid language tag: xx_yy") is thrown if a
  `locale` argument isn't a valid language tag.
- A {{jsxref("TypeError")}} ("invalid element in locales argument") is thrown if an
  array element isn't of type string.

## Description

The `toLocaleLowerCase()` method returns the value of the string converted
to lower case according to any locale-specific case mappings.
`toLocaleLowerCase()` does not affect the value of the string itself. In most
cases, this will produce the same result as {{jsxref("String.prototype.toLowerCase()",
  "toLowerCase()")}}, but for some locales, such as Turkish, whose case mappings do not
follow the default case mappings in Unicode, there may be a different result.

## Examples

### Using toLocaleLowerCase()

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

const locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
