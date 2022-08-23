---
title: Intl.DisplayNames() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
tags:
  - Constructor
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.DisplayNames
---
{{JSRef}}

The **`Intl.DisplayNames()`** constructor creates
{{jsxref("Intl/DisplayNames", "Intl.DisplayNames")}} objects that enable the consistent
translation of language, region and script display names.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.DisplayNames(locales, options)
```

> **Note:** `Intl.DisplayNames()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales`

  - : A string with a BCP 47 language tag, or an array of such strings. For the
    general form and interpretation of the `locales`
    argument, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} page. The following Unicode
    extension key is allowed:

    - `nu`
      - : The numbering system to be used. Possible values include:
        `"arab"`, `"arabext"`, `"bali"`,
        `"beng"`, `"deva"`, `"fullwide"`,
        `"gujr"`, `"guru"`, `"hanidec"`,
        `"khmr"`, `"knda"`, `"laoo"`,
        `"latn"`, `"limb"`, `"mlym"`,
        `"mong"`, `"mymr"`, `"orya"`,
        `"tamldec"`, `"telu"`, `"thai"`,
        `"tibt"`.

- `options`

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        `"lookup"` and `"best fit"`; the default is
        `"best fit"`. For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `style`

      - : The formatting style to use, the default is `"long"`.

        - `"narrow"`
        - `"short"`
        - `"long"`

    - `type`

      - : The type to use.

        - `"calendar"`
        - `"currency"`
        - `"dateTimeField"`
        - `"language"`
        - `"region"`
        - `"script"`

    - `languageDisplay`
      - : The `languageDisplay` it's only usable along with type `language`, defaults to `dialect`.
        - `"dialect"`
        - `"standard"`

    - `fallback`

      - : The fallback to use, the default is `"code"`.

        - `"code"`
        - `"none"`

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and
with default options is returned.

```js
console.log((new Intl.DisplayNames([], {type: 'language'})).of('US'));
// Expected output: 'us'
```

### Using type `dateTimeField`

Example using `dateTimeField` as a type option, will return the localized date time names strings.

```js
const dn = new Intl.DisplayNames('pt', {type: 'dateTimeField'});
console.log(dn.of('era')); // logs 'era'
console.log(dn.of('year')); // logs 'ano'
console.log(dn.of('month')); // logs 'mês'
console.log(dn.of('quarter')); // logs 'trimestre'
console.log(dn.of('weekOfYear')); // logs 'semana'
console.log(dn.of('weekday')); // logs 'dia da semana'
console.log(dn.of('dayPeriod')); // logs 'AM/PM'
console.log(dn.of('day')); // logs 'dia'
console.log(dn.of('hour')); // logs 'hora'
console.log(dn.of('minute')); // logs 'minuto'
console.log(dn.of('second')); // logs 'segundo'
```

### Using type `calendar`

Example using `calendar` as a type option, will return the localized calendar names strings.

```js
const dn = new Intl.DisplayNames('en', {type: 'calendar'});
console.log(dn.of('roc')); // logs 'Minguo Calendar'
console.log(dn.of('gregory')); // logs 'Gregorian Calendar'
console.log(dn.of('chinese')); // logs 'Chinese Calendar'
```

### Using type `language` with `languageDisplay`

Example using  `language` as a type with `languageDisplay` options.

```js
// Using `dialect` option
const dnDialect = new Intl.DisplayNames('en', {type: 'language', languageDisplay: 'dialect'});
console.log(dnDialect.of('en-GB')); // logs 'British English'

// Using `standard` option
const dnStd = new Intl.DisplayNames('en', {type: 'language', languageDisplay: 'standard'});
console.log(dnStd.of('en-GB')); // logs 'English (United Kingdom)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
