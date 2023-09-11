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
  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options`
  - : An object containing the following properties, in the order they are retrieved:
    - `localeMatcher` {{optional_inline}}
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `style` {{optional_inline}}
      - : The formatting style to use. Possible values are `"narrow"`, `"short"`, and `"long"`; the default is `"long"`.
    - `type`
      - : The type of display names to return from [`of()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of). Possible values are `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"`, and `"dateTimeField"`.
    - `fallback` {{optional_inline}}
      - : What to return from `of()` if the input is structurally valid but there's no matching display name. Possible values are:
        - `"code"` (default)
          - : Return the input code itself.
        - `"none"`
          - : Return `undefined`.
    - `languageDisplay` {{optional_inline}}
      - : How language names should be displayed. Only usable along with `type: "language"`. Possible values are:
        - `"dialect"` (default)
          - : Display special regional dialects using their own name. E.g. `"nl-BE"` will be displayed as `"Flemish"`.
        - `"standard"`
          - : Display all languages using standard format. E.g. `"nl-BE"` will be displayed as `"Dutch (Belgium)"`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `options.type` is not provided.
- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.

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
