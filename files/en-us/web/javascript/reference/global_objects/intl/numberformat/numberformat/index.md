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

  - : A string with a BCP 47 language tag, or an array of such strings. For the
    general form and interpretation of the `locales`
    argument, see the {{jsxref("Global_Objects/Intl", "Intl",
			"#Locale_identification_and_negotiation", 1)}} page. The following Unicode
    extension key is allowed:

    - `nu`
      - : The numbering system to be used. Possible values include:
        "`adlm`", "`ahom`", "`arab`",
        "`arabext`", "`bali`", "`beng`",
        "`bhks`", "`brah`", "`cakm`",
        "`cham`", "`deva`", "`diak`",
        "`fullwide`", "`gong`", "`gonm`",
        "`gujr`", "`guru`", "`hanidec`",
        "`hmng`", "`hmnp`", "`java`",
        "`kali`", "`khmr`", "`knda`",
        "`lana`", "`lanatham`", "`laoo`",
        "`latn`", "`lepc`", "`limb`",
        "`mathbold`", "`mathdbl`", "`mathmono`",
        "`mathsanb`", "`mathsans`", "`mlym`",
        "`modi`", "`mong`", "`mroo`",
        "`mtei`", "`mymr`", "`mymrshan`",
        "`mymrtlng`", "`newa`", "`nkoo`",
        "`olck`", "`orya`", "`osma`",
        "`rohg`", "`saur`", "`segment`",
        "`shrd`", "`sind`", "`sinh`",
        "`sora`", "`sund`", "`takr`",
        "`talu`", "`tamldec`", "`telu`",
        "`thai`", "`tibt`", "`tirh`",
        "`vaii`", "`wara`", "`wcho`".  — see
        the [standard
        Unicode numeral systems list](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem).

- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `compactDisplay`
      - : Only used when `notation` is "`compact`". Takes
        either "`short`" (default) or "`long`".
    - `currency`
      - : The currency to use in currency formatting. Possible values are the ISO
        4217 currency codes, such as "`USD`" for the US dollar,
        "`EUR`" for the euro, or "`CNY`" for the Chinese RMB
        — see the [Current
        currency & funds code list](http://www.currency-iso.org/en/home/tables/table-a1.html). There is no default value; if the
        `style` is "`currency`", the `currency`
        property must be provided.
    - `currencyDisplay`

      - : How to display the currency in currency formatting. Possible values are:

        - "`symbol`" to use a localized currency symbol such as
          €, this is the default value,
        - "`narrowSymbol`" to use a narrow format symbol ("$100"
          rather than "US$100"),
        - "`code`" to use the ISO currency code,
        - "`name`" to use a localized currency name such as
          "`dollar`",

    - `currencySign`
      - : In many locales, accounting format means to wrap the number with
        parentheses instead of appending a minus sign. You can enable this
        formatting by setting the `currencySign` option to
        "`accounting`". The default value is "`standard`".
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        "`lookup`" and "`best fit`"; the default is
        "`best fit`". For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `notation`

      - : The formatting that should be displayed for the number, the defaults is
        "`standard`"

        - "`standard`" plain number formatting
        - "`scientific`" return the order-of-magnitude for
          formatted number.
        - "`engineering`" return the exponent of ten when
          divisible by three
        - "`compact`" string representing exponent, defaults is
          using the "short" form.

    - `numberingSystem`
      - : Numbering System. Possible values include: "`arab`",
        "`arabext`", " `bali`", "`beng`",
        "`deva`", "`fullwide`", " `gujr`",
        "`guru`", "`hanidec`", "`khmr`", "
        `knda`", "`laoo`", "`latn`",
        "`limb`", "`mlym`", " `mong`",
        "`mymr`", "`orya`", "`tamldec`", "
        `telu`", "`thai`", "`tibt`".
    - `signDisplay`

      - : When to display the sign for the number; defaults to "`auto`"

        - "`auto`" sign display for negative numbers only
        - "`never`" never display sign
        - "`always`" always display sign
        - "`exceptZero`" sign display for positive and negative
          numbers, but not zero

    - `style`

      - : The formatting style to use , the default is "`decimal`".

        - "`decimal`" for plain number formatting.
        - "`currency`" for currency formatting.
        - "`percent`" for percent formatting
        - "`unit`" for unit formatting

    - `unit`
      - : The unit to use in `unit` formatting, Possible values are core
        unit identifiers, defined in [UTS #35, Part 2, Section 6](http://unicode.org/reports/tr35/tr35-general.html#Unit_Elements). A [subset](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier) of units from the [full
        list](https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml) was selected for use in ECMAScript. Pairs of simple units can
        be concatenated with "`-per-`" to make a compound unit. There
        is no default value; if the `style` is "`unit`", the
        `unit` property must be provided.
    - `unitDisplay`

      - : The unit formatting style to use in `unit` formatting, the
        defaults is "`short`".

        - "`long`" (e.g., `16 litres`)
        - "`short`" (e.g., `16 l`)
        - "`narrow`" (e.g., `16l`)

    - `useGrouping`
      - : Whether to use grouping separators, such as thousands separators or
        thousand/lakh/crore separators. Possible values are true and false; the
        default is true.

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
        provided by the [ISO
        4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that
        information).
    - `maximumFractionDigits`
      - : The maximum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number formatting is the larger of
        `minimumFractionDigits` and 3; the default for currency
        formatting is the larger of `minimumFractionDigits` and the
        number of minor unit digits provided by the [ISO
        4217 currency code list](http://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that
        information); the default for percent formatting is the larger of
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
with default options is returned.

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

If the `style` is `'unit'`, a `unit` property must be
provided. Optionally, `unitDisplay` controls the unit formatting.

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

Scientific and compact notation are represented by the `notation` option and
can be formatted like this:

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

Note that when the currency sign is "accounting", parentheses might be used instead of
a minus sign:

```js
new Intl.NumberFormat('bn', {
  style: 'currency',
  currency: 'USD',
  currencySign: 'accounting',
  signDisplay: 'always'
}).format(-3500);

// → '($3,500.00)'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
