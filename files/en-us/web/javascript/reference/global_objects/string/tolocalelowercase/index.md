---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.toLocaleLowerCase
---

{{JSRef}}

The **`toLocaleLowerCase()`** method of {{jsxref("String")}} values returns this string converted to lower case, according to any locale-specific case mappings.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Syntax

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag, or an array of such strings. Indicates the locale to be used to convert to lower case according to any locale-specific case mappings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Unlike other methods that use the `locales` argument, `toLocaleLowerCase()` does not allow locale matching. Therefore, after checking the validity of the `locales` argument, `toLocaleLowerCase()` always uses the first locale in the list (or the default locale if the list is empty), even if this locale is not supported by the implementation.

### Return value

A new string representing the calling string converted to lower case, according to any
locale-specific case mappings.

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
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
