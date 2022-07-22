---
title: Intl.NumberFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - NumberFormat
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat.NumberFormat
---
{{JSRef}}

The **`Intl.NumberFormat()`** constructor creates
{{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}} objects that enable language-sensitive
number formatting.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)
```

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag, or an array of such strings.
    For the general form and interpretation of the `locales` argument, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} page.
    The following Unicode extension key is allowed:

    - `nu`
      - : The numbering system to be used. Possible values include:
        `"adlm"`, `"ahom"`, `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"bhks"`, `"brah"`, `"cakm"`,
        `"cham"`, `"deva"`, `"diak"`, `"fullwide"`, `"gong"`, `"gonm"`,
        `"gujr"`, `"guru"`, `"hanidec"`, `"hmng"`, `"hmnp"`, `"java"`,
        `"kali"`, `"khmr"`, `"knda"`, `"lana"`, `"lanatham"`, `"laoo"`,
        `"latn"`, `"lepc"`, `"limb"`, `"mathbold"`, `"mathdbl"`, `"mathmono"`,
        `"mathsanb"`, `mathsans"`, `"mlym"`, `"modi"`, `"mong"`, `"mroo"`,
        `"mtei"`, `"mymr"`, `"mymrshan"`, `"mymrtlng"`, `"newa"`, `"nkoo"`,
        `"olck"`, `"orya"`, `"osma"`, `"rohg"`, `"saur"`, `"segment"`,
        `"shrd"`, `"sind"`, `"sinh"`, `"sora"`, `"sund"`, `"takr"`, `"talu"`, `"tamldec"`, `"telu"`,
        `"thai"`, `"tibt"`, `"tirh"`, `"vaii"`, `"wara"`, `"wcho"`.
        — see the [standard Unicode numeral systems list](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem).

- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `compactDisplay`
      - : Only used when `notation` is `"compact"`. Takes either `"short"` (default) or `"long"`.
    - `currency`
      - : The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `"USD"` for the US dollar, `"EUR"` for the euro, or `"CNY"` for the Chinese RMB
        — see the [Current currency & funds code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes).
        There is no default value; if the `style` is `"currency"`, the `currency` property must be provided.
    - `currencyDisplay`

      - : How to display the currency in currency formatting.
         Possible values are:

        - `"symbol"` to use a localized currency symbol such as €, this is the default value.
        - `"narrowSymbol"` to use a narrow format symbol ("$100" rather than "US$100").
        - `"code"` to use the ISO currency code.
        - `"name"` to use a localized currency name such as `"dollar"`.

    - `currencySign`
      - : In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.
        You can enable this formatting by setting the `currencySign` option to `"accounting"`.
        The default value is `"standard"`.
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`.
        For information about this option, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `notation`

      - : The formatting that should be displayed for the number, the default is `"standard"`

        - `"standard"` plain number formatting.
        - `"scientific"` return the order-of-magnitude for formatted number.
        - `"engineering"` return the exponent of ten when divisible by three.
        - `"compact"` string representing exponent; defaults to using the "short" form.

    - `numberingSystem`
      - : Numbering System.
        Possible values include: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

    - `signDisplay`

      - : When to display the sign for the number; defaults to "`auto`":

        - `"always"` always display sign
        - `"auto"` sign display for negative numbers only, including negative zero.
        - `"exceptZero"` sign display for positive and negative numbers, but not zero
        - `"negative"` sign display for negative numbers only, excluding negative zero. {{experimental_inline}}
        - `"never"` never display sign

    - `style`

      - : The formatting style to use, the default is "`decimal`".

        - `"decimal"` for plain number formatting.
        - `"currency"` for currency formatting.
        - `"percent"` for percent formatting.
        - `"unit"` for unit formatting.

    - `unit`
      - : The unit to use in `unit` formatting, Possible values are core unit identifiers, defined in [UTS #35, Part 2, Section 6](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements).
        A [subset](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier)
        of units from the [full list](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml) was selected for use in ECMAScript.
        Pairs of simple units can be concatenated with "`-per-`" to make a compound unit.
        There is no default value; if the `style` is `"unit"`, the `unit` property must be provided.

    - `unitDisplay`

      - : The unit formatting style to use in `unit` formatting, the
        defaults is `"short"`.

        - `"long"` (e.g., `16 litres`).
        - `"short"` (e.g., `16 l`).
        - `"narrow"` (e.g., `16l`).

    - `useGrouping` {{experimental_inline}}
      - : Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. The default is `auto`.

        - `"always"`: display grouping separators even if the locale prefers otherwise.
        - `"auto"`: display grouping separators based on the locale preference, which may also be dependent on the currency.
        - `false`: do not display grouping separators.
        - `"min2"`: display grouping separators when there are at least 2 digits in a group.
        - `true`: alias for `always`.

    - `roundingMode` {{experimental_inline}}
      - : Options for rounding modes. The default is `halfExpand`.

        - `"ceil"`: round to a "more positive" value (toward +∞).
        - `"floor"`round to a "less positive" value (toward -∞).
        - `"expand"`: round away from 0. Positive numbers round up, negative numbers round down (more negative).
        - `"trunc"`:  round toward 0. Positive numbers round down, negative numbers round up (less negative).
        - `"halfCeil"`: ties toward +∞.
        - `"halfFloor"`: ties toward -∞..
        - `"halfExpand"`: ties away from 0.
        - `"halfTrunc"`: ties toward 0.
        - `"halfEven"`: ties toward the value with even cardinality.

        These options reflect the [ICU user guide](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), where "expand" and "trunc" map to ICU "UP" and"DOWN", respectively.

    - `roundingPriority` {{experimental_inline}}
      - :  Specify how rounding conflicts will be resolved if both "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) and "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#minimumsignificantdigits)) are specified:

        - `"auto"`: the result from the significant digits property is used (default).
        - `"morePrecision"`: the result from the property that results in more precision is used.
        - `"lessPrecision"`: the result from the property that results in less precision is used.

        Note that if `auto` is not specified then the result is first calculated for both fractional and significant digits, taking account of both minimum and maximum values — including default values if these not explicitly specified.
        The value with more precision is the one that has more digits in the fractional part.

    - `roundingIncrement` {{experimental_inline}}
      - : Specifies the rounding-increment precision.
        Must be one of the following integers:
        "`1`", " `2`", "`5`", "`10`", "`20`", " `25`", "`50`", "`100`", "`200`", "`250`", "`500`", "`1000`", "`2000`", "`2500`", " `5000`".

        > **Note:** The `roundingIncrement` option controls the rounding increment to be used when formatting numbers:
        >
        > - It indicates the increment at which rounding should take place relative to the calculated rounding magnitude.
        > - It cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than `auto`.
        >
        > For example, if `maximumFractionDigits` is 2 and `roundingIncrement` is 5, then the number is rounded to the nearest 0.05 ("nickel rounding").
        >
        > ```js
        >
        > const nf = new Intl.NumberFormat("en-US", {
        >   style: "currency",
        >   currency: "USD",
        >   maximumFractionDigits: 2,
        >   roundingIncrement: 5
        > });
        >
        > console.log(nf.format(11.29));  // > output: "$11.30"
        > console.log(nf.format(11.25));  // > output: "$11.25"
        > console.log(nf.format(11.22));  // > output: "$11.20"
        > ```
        >
        > If you set `minimumFractionDigits` and `maximumFractionDigits`, they must set them to the same value; otherwise a `RangeError` is thrown.

    - `trailingZeroDisplay` {{experimental_inline}}
      - : A string expressing the strategy for displaying trailing zeros on whole numbers.
        The default is "`auto`".

        - `"auto"`: keep trailing zeros according to `minimumFractionDigits` and `minimumSignificantDigits`
        - `"stripIfInteger"`: Remove the fraction digits _if_ they are all zero.
          This is the same as `auto` if any of the fraction digits are non-zero.

    The following properties fall into two groups:
    `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` in one group,
    `minimumSignificantDigits` and `maximumSignificantDigits` in the other.
    If properties from both groups are specified, conflicts in the resulting display format are resolved based on the value of the [`roundingPriority`](#roundingpriority) property.

    - `minimumIntegerDigits`
      - : The minimum number of integer digits to use.
        A number with a smaller integer part than this value will be zero-prefixed to this number of digits when formatted.
        Possible values are from 1 to 21; the default is 1.
    - `minimumFractionDigits`
      - : The minimum number of fraction digits to use.
        Possible values are from 0 to 20;
        the default for plain number and percent formatting is 0;
        the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml)
        (2 if the list doesn't provide that information).
    - `maximumFractionDigits`
      - : The maximum number of fraction digits to use.
         Possible values are from 0 to 20;
         the default for plain number formatting is the larger of `minimumFractionDigits` and 3;
         the default for currency formatting is the larger of `minimumFractionDigits` and the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml) (2 if the list doesn't provide that information);
         the default for percent formatting is the larger of `minimumFractionDigits` and 0.
    - `minimumSignificantDigits`
      - : The minimum number of significant digits to use.
        Possible values are from 1 to 21; the default is 1.
    - `maximumSignificantDigits`
      - : The maximum number of significant digits to use.
        Possible values are from 1 to 21; the default is 21.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```js
let amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// → '3,500' if in US English locale
```

### Decimal and percent formatting

```js
let amount = 3500;

new Intl.NumberFormat('en-US', {style: 'decimal'}).format(amount);
// → '3,500'
new Intl.NumberFormat('en-US', {style: 'percent'}).format(amount);
// → '350,000%'
```

### Unit formatting

If the `style` is `'unit'`, a `unit` property must be provided.
Optionally, `unitDisplay` controls the unit formatting.

```js
let amount = 3500;

new Intl.NumberFormat('en-US', {style: 'unit', unit: 'liter'}).format(amount);
// → '3,500 L'

new Intl.NumberFormat('en-US', {style: 'unit', unit: 'liter', unitDisplay: 'long'}).format(amount);
// → '3,500 liters'
```

### Currency formatting

If the `style` is `'currency'`, a `currency` property
must be provided. Optionally, `currencyDisplay` and
`currencySign` control the unit formatting.

```js
let amount = -3500;
new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
// → '-$3,500.00'

new Intl.NumberFormat('bn', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'name'
}).format(amount);
// →  '-3,500.00 US dollars'

new Intl.NumberFormat('bn', {
  style: 'currency',
  currency: 'USD',
  currencySign: 'accounting'
}).format(amount);
// →  '($3,500.00)'
```

### Scientific, engineering or compact notations

Scientific and compact notation are represented by the `notation` option and can be formatted like this:

```js
new Intl.NumberFormat('en-US', { notation: "scientific" }).format(987654321);
// → 9.877E8

new Intl.NumberFormat('pt-PT', { notation: "scientific" }).format(987654321);
// → 9,877E8

new Intl.NumberFormat('en-GB', { notation: "engineering" }).format(987654321);
// → 987.654E6

new Intl.NumberFormat('de', { notation: "engineering" }).format(987654321);
// → 987,654E6

new Intl.NumberFormat('zh-CN', { notation: "compact" }).format(987654321);
// → 9.9亿

new Intl.NumberFormat('fr', {
  notation: "compact",
  compactDisplay: "long"
}).format(987654321);
// → 988 millions

new Intl.NumberFormat('en-GB', {
  notation: "compact",
  compactDisplay: "short"
}).format(987654321);
// → 988M
```

### Displaying signs

Display a sign for positive and negative numbers, but not zero:

```js
new Intl.NumberFormat("en-US", {
    style: "percent",
    signDisplay: "exceptZero"
}).format(0.55);
// → '+55%'
```

Note that when the currency sign is "accounting", parentheses might be used instead of a minus sign:

```js
new Intl.NumberFormat('bn', {
  style: 'currency',
  currency: 'USD',
  currencySign: 'accounting',
  signDisplay: 'always'
}).format(-3500);

// → '($3,500.00)'
```

### FractionDigits, SignificantDigits and IntegerDigits

The `NumberFormat() constructor` can be used to specify the minimum or maximum number of fractional, integer or significant digits to display when formatting a number.

> **Note:** If both significant and fractional digit limits are specified then formatting depends on the [`roundingPriority`](#roundingpriority).

#### Using FractionDigits and IntegerDigits

The integer and fraction digit properties indicate the number of digits to display before and after the decimal point, respectively.
If the value to display has fewer integer digits than specified it will be zero prefixed to the expected number.
If it has fewer fractional digits it will be zero suffixed.
Both cases are shown below:

```js
// Formatting adds zeros to display minimum integers and fractions
console.log(new Intl.NumberFormat("en", 
  {minimumIntegerDigits: 3, minimumFractionDigits: 4}
  ).format(4.33));
// > "004.3300"
```

If a value has more fractional digits than set for the maximum number of fraction digits it will be rounded.
The _way_ that it is rounded depends on the [`roundingMode`](#roundingmode) property (more details are provided in the next section).
Below the value is rounded from five fractional digits (`4.33145`) to two (`4.33`):

```js
// Display value shortened to maximum number of digits
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 2}).format(4.33145));
// > "4.33"
```

The minimum factional digits have no effect if the value already has more than 2 fractional digits, as shown below.

```js
// Minimum fractions have no effect if value is higher precision.
console.log(new Intl.NumberFormat("en", {minimumFractionDigits: 2}).format(4.33145));
// > "4.331"
```

> **Warning:** Watch out for default values as they may affect formatting even if not specified in your code.
> The default default maximum digit value is three for plain values, two for currency, and may have different values for other predefined types.

The formatted value above is rounded to 3 digits, even though we didn't specify the maximum digits!
This is because a default value of `maximumFractionDigits` is set when we specify `minimumFractionDigits`, and visa versa.

This is demonstrated below, using [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) to inspect the formatter.
Note that when either `maximumFractionDigits` or `minimumFractionDigits` is defined, so is its counterpart.
Also note the default values of `maximumFractionDigits: 3` and `minimumFractionDigits: 0`.

```js
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 2}).resolvedOptions());
// > Object { locale: "en", numberingSystem: "latn", style: "decimal", minimumIntegerDigits: 1, minimumFractionDigits: 0, maximumFractionDigits: 2, useGrouping: "auto", notation: "standard", signDisplay: "auto", roundingMode: "halfExpand", roundingIncrement: 1, trailingZeroDisplay: "auto", roundingPriority: "auto" }

console.log(new Intl.NumberFormat("en", {minimumFractionDigits: 2}).resolvedOptions());
// > Object { locale: "en", numberingSystem: "latn", style: "decimal", minimumIntegerDigits: 1, minimumFractionDigits: 2, maximumFractionDigits: 3, useGrouping: "auto", notation: "standard", signDisplay: "auto", roundingMode: "halfExpand", roundingIncrement: 1, trailingZeroDisplay: "auto", roundingPriority: "auto" }
```

#### Using SignificantDigits

The number of _significant digits_ is the total number of digits including both integer and factional parts.
The `maximumSignificantDigits` is used to indicate the total number of digits from the original value to display.

The examples below show how this works.
Note in particular the last case: only the first digit is retained and the others are discarded/set to zero.

```js
// Display 5 significant digits
console.log(new Intl.NumberFormat("en", {maximumSignificantDigits: 5}).format(54.33145));
// > "54.331"

// Max 2 significant digits
console.log(new Intl.NumberFormat("en", {maximumSignificantDigits: 2}).format(54.33145));
// > "54"

// Max 1 significant digits
console.log(new Intl.NumberFormat("en", {maximumSignificantDigits: 1}).format(54.33145));
// > "50"
```

The `minimumSignificantDigits` ensures that at least the minimum number of digits are displayed, adding zeros to the end of the value if needed.

```js
// Minimum 10 significant digits
console.log(new Intl.NumberFormat("en", {minimumSignificantDigits: 10}).format(54.33145));
// > "54.33145000"
```

> **Warning:** Watch out for default values as they may affect formatting even if not specified in your code.
> The default default maximum and minimum significant digit values are 20 and 1, respectively.

#### Specifying significant and fractional digits at the same time

The fraction digits ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) and significant digits ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#minimumsignificantdigits)) are both ways of controlling how many fractional and leading digits should be formatted.
If both are used at the same time, it is possible for them to conflict.

These conflicts are resolved using the [`roundingPriority`](#roundingpriority) property.
By default this has a value of `auto`, which means that if either [`minimumSignificantDigits`](#minimumsignificantdigits) or [`maximumSignificantDigits`](#minimumsignificantdigits) is specified the fractional and integer digit properties will be ignored.

For example, the code below formats the value of `4.33145` with `maximumFractionDigits: 3`, and then `maximumSignificantDigits: 2`, and then both.
The value with both is the one set with `maximumSignificantDigits`.

```js
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 3}).format(4.33145));
// > "4.331"
console.log(new Intl.NumberFormat("en", {maximumSignificantDigits: 2}).format(4.33145));
// > "4.3"
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 3, maximumSignificantDigits: 2}).format(4.33145));
// > "4.3"
```

Using [`resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) to inspect the formatter we can see that the returned object does not include `maximumFractionDigits` when `maximumSignificantDigits` or `minimumSignificantDigits` are specified.

```js
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 3, maximumSignificantDigits: 2}).resolvedOptions());
// > Object { locale: "en", numberingSystem: "latn", style: "decimal", minimumIntegerDigits: 1, minimumSignificantDigits: 1, maximumSignificantDigits: 2, useGrouping: "auto", notation: "standard", signDisplay: "auto", roundingMode: "halfExpand", roundingIncrement: 1, trailingZeroDisplay: "auto", roundingPriority: "auto" }
console.log(new Intl.NumberFormat("en", {maximumFractionDigits: 3, minimumSignificantDigits: 2}).resolvedOptions());
// > Object { locale: "en", numberingSystem: "latn", style: "decimal", minimumIntegerDigits: 1, minimumSignificantDigits: 2, maximumSignificantDigits: 21, useGrouping: "auto", notation: "standard", signDisplay: "auto", roundingMode: "halfExpand", roundingIncrement: 1, trailingZeroDisplay: "auto", roundingPriority: "auto" }
```

In addition to `auto` you can resolve conflicts by specifying [`roundingPriority`](#roundingpriority) as `morePrecision` or `lessPrecision`.
In this case the formatter should evaluate the result of using the specified fractional and significant digits independently (taking account of both minimum and maximum values).
It will then select the option that displays more fractional digits if  `morePrecision` is set, and fewer if `lessPrecision` is set.

The example below shows the formatting of 1 using 

```js
const minFracNF = new Intl.NumberFormat("en", {minimumFractionDigits: 2} )
console.log(`minimumFractionDigits:2 - ${minFracNF.format(1)}`);
// > "minimumFractionDigits:2 - 1.00"

const minSigNS = new Intl.NumberFormat("en", {minimumSignificantDigits: 2} )
console.log(`minimumSignificantDigits:2 - ${minSigNS.format(1)}`);
// > "minimumSignificantDigits:2 - 1.0"

const minFracSigNS = new Intl.NumberFormat("en", {minimumFractionDigits: 2, minimumSignificantDigits: 2} )
console.log(`auto - ${minFracSigNS.format(1)}`);
// > "auto - 1.0"

const minFracSigNSless = new Intl.NumberFormat("en", {roundingPriority: 'lessPrecision', minimumFractionDigits: 2, minimumSignificantDigits: 2} )
console.log(`lessPrecision - ${minFracSigNSless.format(1)}`);
// > "lessPrecision - 1.00"

const minFracSigNSmore = new Intl.NumberFormat("en", {roundingPriority: 'morePrecision', minimumFractionDigits: 2, minimumSignificantDigits: 2} )
console.log(`morePrecision - ${minFracSigNSmore.format(1)}`);
// > "morePrecision - 1.0"
```



## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
