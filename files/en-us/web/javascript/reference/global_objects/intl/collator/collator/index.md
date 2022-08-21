---
title: Intl.Collator() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
tags:
  - Collator
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Collator.Collator
---
{{JSRef}}

The **`Intl.Collator()`** constructor creates
{{jsxref("Intl/Collator", "Intl.Collator")}} objects that enable language-sensitive string
comparison.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> **Note:** `Intl.Collator()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Intl.Collator` instance.

### Parameters

- `locales` {{optional_inline}}

  - : Optional. A string with a BCP 47 language tag, or an array of such strings. For
    the general form and interpretation of the `locales` argument, see
    the {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}.

    The following Unicode extension keys are allowed:

    > **Note:** These keys can usually also be set with `options` (as listed
    > below). When both are set, the `options` property takes
    > precedence.

    - `co`
      - : Variant collations for certain locales. Possible values include:
        - `big5han` (Chinese; not available in Chrome or Edge)
        - `compat` (Arabic)
        - `dict` (Sinhala)
        - `direct` (deprecated, do not use)
        - `ducet` (not available, do not use)
        - `emoji` (root)
        - `eor` (root)
        - `gb2312` (Chinese; not available in Chrome or Edge)
        - `phonebk`(German)
        - `phonetic` (Lingala)
        - `pinyin` (Chinese)
        - `reformed` (Swedish; do not specify explicitly as this is the default for Swedish)
        - `searchjl` (Korean; do not use for sorting)
        - `stroke` (Chinese)
        - `trad`
        - `unihan` (Chinese, Japanese, and Korean; not available in Chrome or Edge)
        - `zhuyin` (Chinese)
        This option can be also be set through the `options` property `collation`.
    - `kn`
      - : Whether numeric collation should be used, such that "1" < "2" <
        "10". Possible values are `"true"` and `"false"`.
        This option can be also be set through the `options`
        property `numeric`.
    - `kf`
      - : Whether upper case or lower case should sort first. Possible values are
        `"upper"`, `"lower"`, or `"false"` (use
        the locale's default). This option can be also be set through the
        `options` property `caseFirst`.

- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        `"lookup"` and `"best fit"`; the default is
        `"best fit"`. For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `usage`
      - : Whether the comparison is for sorting or for searching for matching
        strings. Possible values are `"sort"` and
        `"search"`; the default is `"sort"`.
    - `sensitivity`

      - : Which differences in the strings should lead to non-zero result values.
        Possible values are:

        - `"base"`: Only strings that differ in base letters
          compare as unequal. Examples: a ≠ b, a = á, a = A.
        - `"accent"`: Only strings that differ in base letters or
          accents and other diacritic marks compare as unequal. Examples: a
          ≠ b, a ≠ á, a = A.
        - `"case"`: Only strings that differ in base letters or
          case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
        - `"variant"`: Strings that differ in base letters,
          accents and other diacritic marks, or case compare as unequal.
          Other differences may also be taken into consideration. Examples:
          a ≠ b, a ≠ á, a ≠ A.

        The default is `"variant"` for usage `"sort"`;
        it's locale dependent for usage `"search"`.

    - `ignorePunctuation`
      - : Whether punctuation should be ignored. Possible values are
        `true` and `false`; the default is
        `false`.
    - `numeric`

      - : Whether numeric collation should be used, such that "1" < "2" <
        "10". Possible values are `true` and `false`; the
        default is `false`.

        > **Note:** This option can also be set through the `kn` Unicode
        > extension key; if both are provided, this `options`
        > property takes precedence.

    - `caseFirst`

      - : Whether upper case or lower case should sort first. Possible values are
        `"upper"`, `"lower"`, or `"false"` (use
        the locale's default). This option can be set through an
        `options` property or through a Unicode extension
        key; if both are provided, the `options` property
        takes precedence.

        > **Note:** This option can also be set through the `kf` Unicode
        > extension key; if both are provided, this `options`
        > property takes precedence.

    - `collation`
      - : Variant collations for certain locales. Possible values include:
        - `big5han` (Chinese; not available in Chrome or Edge)
        - `compat` (Arabic)
        - `dict` (Sinhala)
        - `direct` (deprecated, do not use)
        - `ducet` (not available, do not use)
        - `emoji` (root)
        - `eor` (root)
        - `gb2312` (Chinese; not available in Chrome or Edge)
        - `phonebk`(German)
        - `phonetic` (Lingala)
        - `pinyin` (Chinese)
        - `reformed` (Swedish; do not specify explicitly as this is the default for Swedish)
        - `searchjl` (Korean; do not use for sorting)
        - `stroke` (Chinese)
        - `trad`
        - `unihan` (Chinese, Japanese, and Korean; not available in Chrome or Edge)
        - `zhuyin` (Chinese)
        > **Note:** This option can also be set through the `co` Unicode
        > extension key; if both are provided, this `options`
        > property takes precedence.

## Examples

### Using Collator

The following example demonstrates the different potential results for a string
occurring before, after, or at the same level as another:

```js
console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

Note that the results shown in the code above can vary between browsers and browser
versions. This is because the values are implementation-specific. That is, the
specification requires only that the before and after values are negative and
positive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
