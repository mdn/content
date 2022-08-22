---
title: Intl.PluralRules() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - PluralRules
  - Reference
browser-compat: javascript.builtins.Intl.PluralRules.PluralRules
---
{{JSRef}}

The **`Intl.PluralRules()`** constructor creates
{{jsxref("Intl/PluralRules", "Intl.PluralRules")}} objects.

## Syntax

```js
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> **Note:** `Intl.PluralRules()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the
    general form and interpretation of the `locales`
    argument, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} page.
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        `"lookup"` and `"best fit"`; the default is
        `"best fit"`. For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `type`

      - : The type to use. Possible values are:

        - `"cardinal"` for cardinal numbers (referring to the
          quantity of things). This is the default value.
        - `"ordinal"` for ordinal number (referring to the
          ordering or ranking of things, e.g. "1st", "2nd", "3rd" in
          English).

    The following properties fall into two groups:
    `minimumIntegerDigits`, `minimumFractionDigits`, and
    `maximumFractionDigits` in one group,
    `minimumSignificantDigits` and
    `maximumSignificantDigits` in the other. If at least one property
    from the second group is defined, then the first group is ignored.

    - `minimumIntegerDigits`
      - : The minimum number of integer digits to use. Possible values are from 1 to
        21; the default is 1.
    - `minimumFractionDigits`
      - : The minimum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number and percent formatting is 0; the
        default for currency formatting is the number of minor unit digits
        provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml)
        (2 if the list doesn't provide that information).
    - `maximumFractionDigits`
      - : The maximum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number formatting is the larger of
        `minimumFractionDigits` and 3; the default for currency
        formatting is the larger of `minimumFractionDigits` and the
        number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml)
        (2 if the list doesn't provide that information); the default for percent formatting is the larger of
        `minimumFractionDigits` and 0.
    - `minimumSignificantDigits`
      - : The minimum number of significant digits to use. Possible values are from
        1 to 21; the default is 1.
    - `maximumSignificantDigits`
      - : The maximum number of significant digits to use. Possible values are from
        1 to 21; the default is 21.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and
with default options is returned. This is useful to distinguish between singular and
plural forms, e.g. "dog" and "dogs".

```js
const pr = new Intl.PluralRules();

pr.select(0);
// → 'other' if in US English locale

pr.select(1);
// → 'one' if in US English locale

pr.select(2);
// → 'other' if in US English locale
```

### Using options

The results can be customized using the `options` argument, which has one
property called `type` which you can set to `ordinal`. This is
useful to figure out the ordinal indicator, e.g. "1st", "2nd", "3rd", "4th", "42nd"
and so forth.

```js
const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

const suffixes = new Map([
  ['one',   'st'],
  ['two',   'nd'],
  ['few',   'rd'],
  ['other', 'th'],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0);   // '0th'
formatOrdinals(1);   // '1st'
formatOrdinals(2);   // '2nd'
formatOrdinals(3);   // '3rd'
formatOrdinals(4);   // '4th'
formatOrdinals(11);  // '11th'
formatOrdinals(21);  // '21st'
formatOrdinals(42);  // '42nd'
formatOrdinals(103); // '103rd'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
