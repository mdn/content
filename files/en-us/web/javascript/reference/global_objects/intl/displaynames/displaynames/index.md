---
title: Intl.DisplayNames() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.DisplayNames.DisplayNames
---

{{JSRef}}

The **`Intl.DisplayNames()`** constructor creates {{jsxref("Intl.DisplayNames")}} objects.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntax

```js-nolint
new Intl.DisplayNames(locales, options)
```

> **Note:** `Intl.DisplayNames()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales`

  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). The following Unicode extension key is allowed:

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
        {{jsxref("Global_Objects/Intl", "Intl", "#locale_identification_and_negotiation", 1)}} page.
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
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Using type `dateTimeField`

Example using `dateTimeField` as a type option, will return the localized date time names strings.

```js
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### Using type `calendar`

Example using `calendar` as a type option, will return the localized calendar names strings.

```js
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Using type `language` with `languageDisplay`

Example using `language` as a type with `languageDisplay` options.

```js
// Using `dialect` option
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// Using `standard` option
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
