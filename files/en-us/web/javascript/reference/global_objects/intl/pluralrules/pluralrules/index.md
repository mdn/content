---
title: Intl.PluralRules() constructor
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.PluralRules.PluralRules
sidebar: jsref
---

The **`Intl.PluralRules()`** constructor creates {{jsxref("Intl.PluralRules")}} objects.

## Syntax

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}
  - : A string with a {{glossary("BCP 47 language tag")}} or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object containing the following properties, in the order they are retrieved (all of them are optional):
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : The type to use. Possible values are:
        - `"cardinal"` (default)
          - : For cardinal numbers (referring to the quantity of things).
        - `"ordinal"`
          - : For ordinal number (referring to the ordering or ranking of things, e.g., "1st", "2nd", "3rd" in English).

    `Intl.PluralRules()` supports a number of options from `Intl.NumberFormat()`. They ensure that a number formatted by `NumberFormat` and the pluralized word selected based on this number can be joined together to form a grammatical phrase.

    The following options have the same meaning as the [`Intl.NumberFormat()` notation options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#other_options):
    - `notation`
      - : The formatting that should be displayed for the number. Possible values are:
        - `"standard"` (default)
          - : Plain number formatting.
        - `"scientific"`
          - : Return the order-of-magnitude for formatted number.
        - `"engineering"`
          - : Return the exponent of ten when divisible by three.
        - `"compact"`
          - : String representing exponent; defaults to using the "short" form.
    - `compactDisplay`
      - : Only used when `notation` is `"compact"`. Possible values are `"short"` and `"long"`; the default is `"short"`.

    The following options have the same meaning as the [`Intl.NumberFormat()` digit options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options):
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`
    - `trailingZeroDisplay`

    The `style` option from `Intl.NumberFormat` is always assumed to be `"decimal"`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.
- {{jsxref("TypeError")}}
  - : Thrown if `roundingIncrement` is not `1` and is combined with either significant-digit rounding or a `roundingPriority` other than `"auto"`.

## Examples

### Basic usage

In basic use without specifying a locale, `select()` returns a plural category for the default locale and with default options.
This is useful to distinguish between singular and plural forms, e.g., "dog" and "dogs".

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'other' if in US English locale

pr.select(1); // 'one' if in US English locale

pr.select(2); // 'other' if in US English locale
```

### Ordinal formatting

The results can be customized using the `options` argument, which has one property called `type` which you can set to `ordinal`. This is useful to figure out the ordinal indicator, e.g., "1st", "2nd", "3rd", "4th", "42nd",
and so forth.

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

### Using notation

The `notation` option affects the plural form used because it may introduce wording differences in context. Consider displaying a quantity in French. It can be one of:

- `{value} croissant` - singular croissant (`one`)
- `{value} croissants` - plural croissants (`other`)
- `{value} de croissants` - plural croissants used with a measuring word, like English "a bag of croissants" (`many`)

Without passing `notation`, `PluralRules` will assume that you are always formatting the number with `notation: "standard"`, where numbers are output in full:

```js
const pr = new Intl.PluralRules("fr-FR");
const nf = new Intl.NumberFormat("fr-FR");
const formats = new Map([
  ["one", "croissant"],
  ["other", "croissants"],
  ["many", "de croissants"],
]);

function getLabel(value) {
  return `${nf.format(value)} ${formats.get(pr.select(value))}`;
}

console.log(getLabel(1)); // 1 croissant
console.log(getLabel(10)); // 10 croissants
console.log(getLabel(1000000)); // 1 000 000 de croissants (pronounced "un million de croissants")
console.log(getLabel(1100000)); // 1 100 000 croissants (pronounced "un million cent mille croissants")
```

If you want to format 1100000 as "1,1 million" instead (using `notation: "compact"`), then you've got a problem: "1,1 million croissants" is ungrammatical in French; you must say "1,1 million _de_ croissants" because "million" is also a measuring word. You must tell `PluralRules` that you are formatting the number this way:

```js
const sharedOptions = { notation: "compact", compactDisplay: "long" };
const pr = new Intl.PluralRules("fr-FR", sharedOptions);
const nf = new Intl.NumberFormat("fr-FR", sharedOptions);
const formats = new Map([
  ["one", "croissant"],
  ["other", "croissants"],
  ["many", "de croissants"],
]);

function getLabel(value) {
  return `${nf.format(value)} ${formats.get(pr.select(value))}`;
}

console.log(getLabel(1)); // 1 croissant
console.log(getLabel(10)); // 10 croissants
console.log(getLabel(1000000)); // 1 million de croissants
console.log(getLabel(1100000)); // 1,1 million de croissants
```

> [!NOTE]
> There's no known case where `compactDisplay` affects the plural selection, but you should keep the options passed to `NumberFormat` and `PluralRules` consistent, as demonstrated above.

The same happens with `notation` set to `"scientific"` or `"engineering"`. For example, with `notation: "scientific"`, you will get "1E0 croissant", "1E1 croissants", "1E6 de croissants", and "1,1E6 de croissants", respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl")}}
