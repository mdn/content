---
title: Intl.NumberFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.NumberFormat.NumberFormat
---

{{JSRef}}

The **`Intl.NumberFormat()`** constructor creates {{jsxref("Intl.NumberFormat")}} objects.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat", "taller")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"
```

## Syntax

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> **Note:** `Intl.NumberFormat()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Intl.NumberFormat` instance. However, there's a special behavior when it's called without `new` and the `this` value is another `Intl.NumberFormat` instance; see [Return value](#return_value).

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    The following Unicode extension key is allowed:

    - `nu`
      - : See [`numberingSystem`](#numberingsystem).

    This key can also be set with `options` (as listed below). When both are set, the `options` property takes precedence.

- `options` {{optional_inline}}

  - : An object. For ease of reading, the property list is broken into sections based on their purposes, including [locale options](#locale_options), [style options](#style_options), [digit options](#digit_options), and [other options](#other_options).

#### Locale options

- `localeMatcher`
  - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`.
    For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : The numbering system to use for number formatting, such as `"arab"`, `"hans"`, `"mathsans"`, and so on. For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). This option can also be set through the `nu` Unicode extension key; if both are provided, this `options` property takes precedence.

#### Style options

Depending on the `style` used, some of them may be ignored, and others may be required:

- `style`
  - : The formatting style to use.
    - `"decimal"` (default)
      - : For plain number formatting.
    - `"currency"`
      - : For currency formatting.
    - `"percent"`
      - : For percent formatting.
    - `"unit"`
      - : For unit formatting.
- `currency`
  - : The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `"USD"` for the US dollar, `"EUR"` for the euro, or `"CNY"` for the Chinese RMB — see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). There is no default value; if the `style` is `"currency"`, the `currency` property must be provided. It is normalized to uppercase.
- `currencyDisplay`
  - : How to display the currency in currency formatting.
    - `"code"`
      - : Use the ISO currency code.
    - `"symbol"` (default)
      - : Use a localized currency symbol such as €.
    - `"narrowSymbol"`
      - : Use a narrow format symbol ("$100" rather than "US$100").
    - `"name"`
      - : Use a localized currency name such as `"dollar"`.
- `currencySign`
  - : In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. Possible values are `"standard"` and `"accounting"`; the default is `"standard"`.
- `unit`
  - : The unit to use in `unit` formatting, Possible values are listed in [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers). Pairs of simple units can be concatenated with "-per-" to make a compound unit. There is no default value; if the `style` is `"unit"`, the `unit` property must be provided.
- `unitDisplay`
  - : The unit formatting style to use in `unit` formatting. Possible values are:
    - `"short"` (default)
      - : E.g., `16 l`.
    - `"narrow"`
      - : E.g., `16l`.
    - `"long"`
      - : E.g., `16 litres`.

#### Digit options

The following properties are also supported by {{jsxref("Intl.PluralRules")}}.

- `minimumIntegerDigits`
  - : The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`; the default is `1`.
- `minimumFractionDigits`
  - : The minimum number of fraction digits to use. Possible values are from `0` to `100`; the default for plain number and percent formatting is `0`; the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2 if the list doesn't provide that information). See [SignificantDigits/FractionDigits default values](#significantdigitsfractiondigits_default_values) for when this default gets applied.
- `maximumFractionDigits`
  - : The maximum number of fraction digits to use. Possible values are from `0` to `100`; the default for plain number formatting is the larger of `minimumFractionDigits` and `3`; the default for currency formatting is the larger of `minimumFractionDigits` and the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2 if the list doesn't provide that information); the default for percent formatting is the larger of `minimumFractionDigits` and 0. See [SignificantDigits/FractionDigits default values](#significantdigitsfractiondigits_default_values) for when this default gets applied.
- `minimumSignificantDigits`
  - : The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. See [SignificantDigits/FractionDigits default values](#significantdigitsfractiondigits_default_values) for when this default gets applied.
- `maximumSignificantDigits`
  - : The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. See [SignificantDigits/FractionDigits default values](#significantdigitsfractiondigits_default_values) for when this default gets applied.
- `roundingPriority`

  - : Specify how rounding conflicts will be resolved if both "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) and "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) are specified.
    Possible values are:

    - `"auto"` (default)
      - : The result from the significant digits property is used.
    - `"morePrecision"`
      - : The result from the property that results in more precision is used.
    - `"lessPrecision"`
      - : The result from the property that results in less precision is used.

    The value `"auto"` is normalized to `"morePrecision"` if `notation` is `"compact"` and none of the four "FractionDigits"/"SignificantDigits" options are set.

    Note that for values other than `auto` the result with more precision is calculated from the [`maximumSignificantDigits`](#minimumsignificantdigits) and [`maximumFractionDigits`](#maximumfractiondigits) (minimum fractional and significant digit settings are ignored).

- `roundingIncrement`

  - : Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`; the default is `1`. It cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than `auto`.

- `roundingMode`

  - : How decimals should be rounded. Possible values are:

    - `"ceil"`
      - : Round toward +∞. Positive values round up. Negative values round "more positive".
    - `"floor"`
      - : Round toward -∞. Positive values round down. Negative values round "more negative".
    - `"expand"`
      - : round away from 0. The _magnitude_ of the value is always increased by rounding. Positive values round up. Negative values round "more negative".
    - `"trunc"`
      - : Round toward 0. This _magnitude_ of the value is always reduced by rounding. Positive values round down. Negative values round "less negative".
    - `"halfCeil"`
      - : ties toward +∞. Values above the half-increment round like `"ceil"` (towards +∞), and below like `"floor"` (towards -∞). On the half-increment, values round like `"ceil"`.
    - `"halfFloor"`
      - : Ties toward -∞. Values above the half-increment round like `"ceil"` (towards +∞), and below like `"floor"` (towards -∞). On the half-increment, values round like `"floor"`.
    - `"halfExpand"` (default)
      - : Ties away from 0. Values above the half-increment round like `"expand"` (away from zero), and below like `"trunc"` (towards 0). On the half-increment, values round like `"expand"`.
    - `"halfTrunc"`
      - : Ties toward 0. Values above the half-increment round like `"expand"` (away from zero), and below like `"trunc"` (towards 0). On the half-increment, values round like `"trunc"`.
    - `"halfEven"`
      - : Ties towards the nearest even integer. Values above the half-increment round like `"expand"` (away from zero), and below like `"trunc"` (towards 0). On the half-increment values round towards the nearest even digit.

    These options reflect the [ICU user guide](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), where "expand" and "trunc" map to ICU "UP" and "DOWN", respectively.
    The [rounding modes](#rounding_modes) example below demonstrates how each mode works.

- `trailingZeroDisplay`
  - : The strategy for displaying trailing zeros on whole numbers. Possible values are:
    - `"auto"` (default)
      - : Keep trailing zeros according to `minimumFractionDigits` and `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Remove the fraction digits _if_ they are all zero. This is the same as `"auto"` if any of the fraction digits is non-zero.

##### SignificantDigits/FractionDigits default values

For the four options above (the `FractionDigits` and `SignificantDigits` options), we mentioned their defaults; however, these defaults are _not unconditionally applied_. They are only applied when the property is actually going to be used, which depends on the [`roundingPriority`](#roundingpriority) and [`notation`](#notation) settings. Specifically:

- If `roundingPriority` is not `"auto"`, then all four options apply.
- If `roundingPriority` is `"auto"` and at least one `SignificantDigits` option is set, then the `SignificantDigits` options apply and the `FractionDigits` options are ignored.
- If `roundingPriority` is `"auto"`, and either at least one `FractionDigits` option is set or `notation` is not `"compact"`, then the `FractionDigits` options apply and the `SignificantDigits` options are ignored.
- If `roundingPriority` is `"auto"`, `notation` is `"compact"`, and none of the four options are set, then they are set to `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }`, regardless of the defaults mentioned above, and `roundingPriority` is set to `"morePrecision"`.

#### Other options

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
- `useGrouping`

  - : Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.

    - `"always"`
      - : Display grouping separators even if the locale prefers otherwise.
    - `"auto"`
      - : Display grouping separators based on the locale preference, which may also be dependent on the currency.
    - `"min2"`
      - : Display grouping separators when there are at least 2 digits in a group.
    - `true`
      - : Same as `"always"`.
    - `false`
      - : Display no grouping separators.

    The default is `"min2"` if `notation` is `"compact"`, and `"auto"` otherwise. The string values `"true"` and `"false"` are accepted, but are always converted to the default value.

- `signDisplay`
  - : When to display the sign for the number. Possible values are:
    - `"auto"` (default)
      - : Sign display for negative numbers only, including negative zero.
    - `"always"`
      - : Always display sign.
    - `"exceptZero"`
      - : Sign display for positive and negative numbers, but not zero.
    - `"negative"`
      - : Sign display for negative numbers only, excluding negative zero.
    - `"never"`
      - : Never display sign.

### Return value

A new `Intl.NumberFormat` object.

> [!NOTE]
> The text below describes behavior that is marked by the specification as "optional". It may not work in all environments. Check the [browser compatibility table](#browser_compatibility).

Normally, `Intl.NumberFormat()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), and a new `Intl.NumberFormat` instance is returned in both cases. However, if the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) value is an object that is [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` (doesn't necessarily mean it's created via `new Intl.NumberFormat`; just that it has `Intl.NumberFormat.prototype` in its prototype chain), then the value of `this` is returned instead, with the newly created `Intl.NumberFormat` object hidden in a `[Symbol(IntlLegacyConstructedSymbol)]` property (a unique symbol that's reused between instances).

```js
const formatter = Intl.NumberFormat.call(
  { __proto__: Intl.NumberFormat.prototype },
  "en-US",
  { notation: "scientific" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: NumberFormat [Intl.NumberFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Note that there's only one actual `Intl.NumberFormat` instance here: the one hidden in `[Symbol(IntlLegacyConstructedSymbol)]`. Calling the [`format()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) and [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) methods on `formatter` would correctly use the options stored in that instance, but calling all other methods (e.g. [`formatRange()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) would fail with "TypeError: formatRange method called on incompatible Object", because those methods don't consult the hidden instance's options.

This behavior, called `ChainNumberFormat`, does not happen when `Intl.NumberFormat()` is called without `new` but with `this` set to anything else that's not an `instanceof Intl.NumberFormat`. If you call it directly as `Intl.NumberFormat()`, the `this` value is [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), and a new `Intl.NumberFormat` instance is created normally.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - A property that takes enumerated values (such as `style`, `units`, `currency`, and so on) is set to an invalid value.
    - Both `maximumFractionDigits` and `minimumFractionDigits` are set, and they are set to different values.
      Note that depending on various formatting options, these properties can have default values.
      It is therefore possible to get this error even if you only set one of the properties.
- {{jsxref("TypeError")}}
  - : Thrown if the `options.style` property is set to "unit" or "currency", and no value has been set for the corresponding property `options.unit` or `options.currency`.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' if in US English locale
```

### Decimal and percent formatting

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "decimal",
}).format(amount); // '3,500'
new Intl.NumberFormat("en-US", {
  style: "percent",
}).format(amount); // '350,000%'
```

### Unit formatting

If the `style` is `'unit'`, a `unit` property must be provided.
Optionally, `unitDisplay` controls the unit formatting.

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
}).format(amount); // '3,500 L'

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(amount); // '3,500 liters'
```

### Currency formatting

If the `style` is `'currency'`, a `currency` property
must be provided. Optionally, `currencyDisplay` and
`currencySign` control the unit formatting.

```js
const amount = -3500;
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount); // '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(amount); // '-3,500.00 US dollars'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
}).format(amount); // '($3,500.00)'
```

### Scientific, engineering or compact notations

Scientific and compact notation are represented by the `notation` option and can be formatted like this:

```js
new Intl.NumberFormat("en-US", {
  notation: "scientific",
}).format(987654321);
// 9.877E8

new Intl.NumberFormat("pt-PT", {
  notation: "scientific",
}).format(987654321);
// 9,877E8

new Intl.NumberFormat("en-GB", {
  notation: "engineering",
}).format(987654321);
// 987.654E6

new Intl.NumberFormat("de", {
  notation: "engineering",
}).format(987654321);
// 987,654E6

new Intl.NumberFormat("zh-CN", {
  notation: "compact",
}).format(987654321);
// 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// 988M
```

### Displaying signs

Display a sign for positive and negative numbers, but not zero:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Note that when the currency sign is "accounting", parentheses might be used instead of a minus sign:

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);
// '($3,500.00)'
```

### FractionDigits, SignificantDigits and IntegerDigits

You can specify the minimum or maximum number of fractional, integer or significant digits to display when formatting a number.

> [!NOTE]
> If both significant and fractional digit limits are specified, then the actual formatting depends on the [`roundingPriority`](#roundingpriority).

#### Using FractionDigits and IntegerDigits

The integer and fraction digit properties indicate the number of digits to display before and after the decimal point, respectively.
If the value to display has fewer integer digits than specified, it will be left-padded with zeros to the expected number.
If it has fewer fractional digits, it will be right-padded with zeros.
Both cases are shown below:

```js
// Formatting adds zeros to display minimum integers and fractions
console.log(
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(4.33),
);
// "004.3300"
```

If a value has more fractional digits than the specified maximum number, it will be rounded.
The _way_ that it is rounded depends on the [`roundingMode`](#roundingmode) property (more details are provided in the [rounding modes](#rounding_modes) section).
Below the value is rounded from five fractional digits (`4.33145`) to two (`4.33`):

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

The minimum fractional digits have no effect if the value already has more than 2 fractional digits:

```js
// Minimum fractions have no effect if value is higher precision.
console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).format(4.33145),
);
// "4.331"
```

> [!WARNING]
> Watch out for default values as they may affect formatting even if not specified in your code.
> The default maximum digit value is `3` for plain values, `2` for currency, and may have different values for other predefined types.

The formatted value above is rounded to 3 digits, even though we didn't specify the maximum digits!
This is because a default value of `maximumFractionDigits` is set when we specify `minimumFractionDigits`, and visa versa. The default values of `maximumFractionDigits` and `minimumFractionDigits` are `3` and `0`, respectively.

You can use [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) to inspect the formatter.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,
//   …
// }

console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 3,
//   …
// }
```

#### Using SignificantDigits

The number of _significant digits_ is the total number of digits including both integer and fractional parts.
The `maximumSignificantDigits` is used to indicate the total number of digits from the original value to display.

The examples below show how this works.
Note in particular the last case: only the first digit is retained and the others are discarded/set to zero.

```js
// Display 5 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 5,
  }).format(54.33145),
);
// "54.331"

// Max 2 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(54.33145),
);
// "54"

// Max 1 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 1,
  }).format(54.33145),
);
// "50"
```

The `minimumSignificantDigits` ensures that at least the specified number of digits are displayed, adding zeros to the end of the value if needed.

```js
// Minimum 10 significant digits
console.log(
  new Intl.NumberFormat("en", {
    minimumSignificantDigits: 10,
  }).format(54.33145),
);
// "54.33145000"
```

> [!WARNING]
> Watch out for default values as they may affect formatting.
> If only one `SignificantDigits` property is used, then its counterpart will automatically be applied with the default value.
> The default maximum and minimum significant digit values are 21 and 1, respectively.

#### Specifying significant and fractional digits at the same time

The fraction digits ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) and significant digits ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) are both ways of controlling how many fractional and leading digits should be formatted.
If both are used at the same time, it is possible for them to conflict.

These conflicts are resolved using the [`roundingPriority`](#roundingpriority) property.
By default, this has a value of `"auto"`, which means that if either [`minimumSignificantDigits`](#minimumsignificantdigits) or [`maximumSignificantDigits`](#minimumsignificantdigits) is specified, the fractional and integer digit properties will be ignored.

For example, the code below formats the value of `4.33145` with `maximumFractionDigits: 3`, and then `maximumSignificantDigits: 2`, and then both.
The value with both is the one set with `maximumSignificantDigits`.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
  }).format(4.33145),
);
// "4.331"
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
```

Using [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) to inspect the formatter, we can see that the returned object does not include `maximumFractionDigits` when `maximumSignificantDigits` or `minimumSignificantDigits` are specified.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 1,
//   maximumSignificantDigits: 2,
//   …
// }
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    minimumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 2,
//   maximumSignificantDigits: 21,
//   …
// }
```

In addition to `"auto"`, you can resolve conflicts by specifying [`roundingPriority`](#roundingpriority) as `"morePrecision"` or `"lessPrecision"`.
The formatter calculates the precision using the values of `maximumSignificantDigits` and `maximumFractionDigits`.

The code below shows the format being selected for the three different rounding priorities:

```js
const maxFracNF = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3,
});
console.log(`maximumFractionDigits:3 - ${maxFracNF.format(1.23456)}`);
// "maximumFractionDigits:2 - 1.235"

const maxSigNS = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});
console.log(`maximumSignificantDigits:3 - ${maxSigNS.format(1.23456)}`);
// "maximumSignificantDigits:3 - 1.23"

const bothAuto = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`auto - ${bothAuto.format(1.23456)}`);
// "auto - 1.23"

const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`lessPrecision - ${bothLess.format(1.23456)}`);
// "lessPrecision - 1.23"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`morePrecision - ${bothMore.format(1.23456)}`);
// "morePrecision - 1.235"
```

Note that the algorithm can behave in an unintuitive way if a minimum value is specified without a maximum value.
The example below formats the value `1` specifying `minimumFractionDigits: 2` (formatting to `1.00`) and `minimumSignificantDigits: 2` (formatting to `1.0`).
Since `1.00` has more digits than `1.0`, this should be the result when prioritizing `morePrecision`, but in fact the opposite is true:

```js
const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`lessPrecision - ${bothLess.format(1)}`);
// "lessPrecision - 1.00"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`morePrecision - ${bothMore.format(1)}`);
// "morePrecision - 1.0"
```

The reason for this is that only the "maximum precision" values are used for the calculation, and the default value of `maximumSignificantDigits` is much higher than `maximumFractionDigits`.

> [!NOTE]
> The working group have proposed a modification of the algorithm where the formatter should evaluate the result of using the specified fractional and significant digits independently (taking account of both minimum and maximum values).
> It will then select the option that displays more fractional digits if `morePrecision` is set, and fewer if `lessPrecision` is set.
> This will result in more intuitive behavior for this case.

### Rounding modes

If a value has more fractional digits than allowed by the constructor options, the formatted value will be _rounded_ to the specified number of fractional digits.
The _way_ in which the value is rounded depends on the [`roundingMode`](#roundingmode) property.

Number formatters use `halfExpand` rounding by default, which rounds values "away from zero" at the half-increment (in other words, the _magnitude_ of the value is rounded up).

For a positive number, if the fractional digits to be removed are closer to the next increment (or on the half way point) then the remaining fractional digits will be rounded up, otherwise they are rounded down.
This is shown below: 2.23 rounded to two significant digits is truncated to 2.2 because 2.23 is less than the half increment 2.25, while values of 2.25 and greater are rounded up to 2.3:

```js
// Value below half-increment: round down.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.23),
);
// "2.2"

// Value on or above half-increment: round up.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.28),
);
// "2.3"
// "2.3"
```

A negative number on or below the half-increment point is also rounded away from zero (becomes more negative):

```js
// Value below half-increment: round down.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.23),
);
// "-2.2"

// Value on or above half-increment: round up.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.28),
);
// "-2.3"
// "-2.3"
```

The table below show the effect of different rounding modes for positive and negative values that are on and around the half-increment.

| rounding mode | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| ------------- | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`        | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`       | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`      | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`       | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`    | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand`  | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

When using `halfEven`, its behavior also depends on the parity (odd or even) of the last digit of the rounded number. For example, the behavior of `halfEven` in the table above is the same as `halfTrunc`, because the magnitudes of all numbers are between a smaller "even" number (2.2) and a larger "odd" number (2.3). If the numbers are between ±2.3 and ±2.4, `halfEven` will behave like `halfExpand` instead. This behavior avoids consistently under- or over-estimating half-increments in a large data sample.

### Using roundingIncrement

Sometimes we want to round the remaining fractional digits to some other increment than the next integer.
For example, currencies for which the smallest coin is 5 cents might want to round the value to increments of 5, reflecting amounts that can actually be paid in cash.

This kind of rounding can be achieved with the [`roundingIncrement`](#roundingincrement) property.

For example, if `maximumFractionDigits` is 2 and `roundingIncrement` is 5, then the number is rounded to the nearest 0.05:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.25"
console.log(nf.format(11.22)); // "$11.20"
```

This particular pattern is referred to as "nickel rounding", where nickel is the colloquial name for a USA 5 cent coin.
To round to the nearest 10 cents ("dime rounding"), you could change `roundingIncrement` to `10`.

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.25"
console.log(nf.format(11.22)); // "$11.20"
```

You can also use [`roundingMode`](#roundingmode) to change the rounding algorithm.
The example below shows how `halfCeil` rounding can be used to round the value "less positive" below the half-rounding increment and "more positive" if above or on the half-increment.
The incremented digit is "0.05" so the half-increment is at .025 (below, this is shown at 11.225).

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

console.log(nf.format(11.21)); // "$11.20"
console.log(nf.format(11.22)); // "$11.20"
console.log(nf.format(11.224)); // "$11.20"
console.log(nf.format(11.225)); // "$11.25"
console.log(nf.format(11.23)); // "$11.25"
```

If you need to change the number of digits, remember that `minimumFractionDigits` and `maximumFractionDigits` must both be set to the same value, or a `RangeError` is thrown.

`roundingIncrement` cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than `auto`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
