---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
tags:
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.toLocaleUpperCase
---
{{JSRef}}

The **`toLocaleUpperCase()`** method returns the calling string
value converted to upper case, according to any locale-specific case mappings.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Syntax

```js
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. Indicates the locale to be used to convert to
    upper case according to any locale-specific case mappings. If multiple locales are
    given in an {{jsxref("Array")}}, the [best available locale](https://tc39.es/ecma402/#sec-bestavailablelocale) is used. The default locale is the host environment's current locale.

### Return value

A new string representing the calling string converted to upper case, according to any
locale-specific case mappings.

### Exceptions

- A {{jsxref("RangeError")}} ("invalid language tag: xx_yy") is thrown if a
  `locale` argument isn't a valid language tag.
- A {{jsxref("TypeError")}} ("invalid element in locales argument") is thrown if an
  array element isn't of type string.

## Description

The `toLocaleUpperCase()` method returns the value of the string converted
to upper case according to any locale-specific case mappings.
`toLocaleUpperCase()` does not affect the value of the string itself. In most
cases, this will produce the same result as {{jsxref("String.prototype.toUpperCase()",
  "toUpperCase()")}}, but for some locales, such as Turkish, whose case mappings do not
follow the default case mappings in Unicode, there may be a different result.

Also notice that conversion is not necessarily a 1:1 character mapping, as some
characters might result in two (or even more) characters when transformed to upper-case.
Therefore the length of the result string can differ from the input length. This also
implies that the conversion is not stable, so i.E. the following can return
`false`:
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Examples

### Using toLocaleUpperCase()

```js
'alphabet'.toLocaleUpperCase(); // 'ALPHABET'

'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

const locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // 'I'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
