---
title: Intl.DisplayNames.prototype.of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
tags:
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.of
---
{{JSRef}}

The **`Intl.DisplayNames.prototype.of()`** method receives a
code and returns a string based on the locale and options provided when instantiating
`Intl.DisplayNames`.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
of(code)
```

### Parameters

- `code`

  - : The `code` to provide depends on the `type`:

    - If the type is "region", code should be either an [ISO-3166 two letters region code](https://www.iso.org/iso-3166-country-codes.html), or a [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/).
    - If the type is "script", code should be an [ISO-15924 four letters script code](https://unicode.org/iso15924/iso15924-codes.html).
    - If the type is "language", code should be a _languageCode_ \["-"
      _scriptCode_] \["-" _regionCode_ ] \*("-" _variant_ )
      subsequence of the unicode_language_id grammar in
      [UTS 35's Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier).
      _languageCode_ is either a two letters ISO 639-1 language code or a three letters ISO 639-2 language code.
    - If the type is "currency", code should be a [3-letter ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).

### Return value

A language-specific formatted string.

## Examples

### Using the of method

```js
let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
regionNames.of('419'); // "Latin America"

let languageNames = new Intl.DisplayNames(['en'], {type: 'language'});
languageNames.of('fr'); // "French"

let currencyNames = new Intl.DisplayNames(['en'], {type: 'currency'});
currencyNames.of('EUR'); // "Euro"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
