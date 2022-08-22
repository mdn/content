---
title: Intl.DateTimeFormat.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/supportedLocalesOf
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.supportedLocalesOf
---
{{JSRef}}

The **`Intl.DateTimeFormat.supportedLocalesOf()`** method
returns an array containing those of the provided locales that are supported in date
and time formatting without having to fall back to the runtime's default locale.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-supportedlocalesof.html","shorter")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
Intl.DateTimeFormat.supportedLocalesOf(locales)
Intl.DateTimeFormat.supportedLocalesOf(locales, options)
```

### Parameters

- `locales`
  - : A string with a BCP 47 language tag, or an array of such strings. For the general
    form of the `locales` argument, see the {{jsxref("Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} page.
- `options` {{optional_inline}}

  - : An object that may have the following property:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        `"lookup"` and `"best fit"`; the default is
        `"best fit"`. For information about this option, see the
        {{jsxref("Intl", "Intl", "#Locale_negotiation", 1)}} page.

### Return value

An array of strings representing a subset of the given locale tags that are supported
in date and time formatting without having to fall back to the runtime's default
locale.

## Description

Returns an array with a subset of the language tags provided in `locales`.
The language tags returned are those for which the runtime supports a locale in date
and time formatting that the locale matching algorithm used considers a match, so that
it wouldn't have to fall back to the default locale.

## Examples

### Using supportedLocalesOf()

Assuming a runtime that supports Indonesian and German but not Balinese in date and
time formatting, `supportedLocalesOf` returns the Indonesian and German
language tags unchanged, even though `pinyin` collation is neither relevant
to date and time formatting nor used with Indonesian, and a specialized German for
Indonesia is unlikely to be supported. Note the specification of the
`"lookup"` algorithm here — a `"best fit"` matcher might decide
that Indonesian is an adequate match for Balinese since most Balinese speakers also
understand Indonesian, and therefore return the Balinese language tag as well.

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.DateTimeFormat.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
