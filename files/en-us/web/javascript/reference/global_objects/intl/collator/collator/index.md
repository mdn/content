---
title: Intl.Collator() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.Collator.Collator
---

{{JSRef}}

The **`Intl.Collator()`** constructor creates {{jsxref("Intl.Collator")}} objects.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Syntax

```js-nolint
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

  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    The following Unicode extension keys are allowed:

    > **Note:** These keys can usually also be set with `options` (as listed
    > below). When both are set, the `options` property takes
    > precedence.

    - `co`

      - : Variant collations for certain locales. Possible values include:

        - `big5han` (Chinese; do not use; not available in Firefox, Chrome or Edge)
        - `compat` (Arabic)
        - `dict` (Sinhala)
        - `direct` (deprecated, do not use)
        - `ducet` (not available, do not use)
        - `emoji` (root)
        - `eor` (root)
        - `gb2312` (Chinese; do not use; not available in Chrome or Edge)
        - `phonebk` (German)
        - `phonetic` (Lingala)
        - `pinyin` (Chinese)
        - `reformed` (formerly Swedish; do not specify explicitly as this was the old name for the default for Swedish)
        - `searchjl` (Korean; this is not for sorting, but for search matching such that syllable-initial consonants are matched and vowels and possible syllable-final consonants are ignored)
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
        {{jsxref("Global_Objects/Intl", "Intl", "#locale_identification_and_negotiation", 1)}} page.
    - `usage`
      - : Whether the comparison is for sorting a list of strings or fuzzy (for the Latin script diacritic-insensitive and case-insensitive) filtering a list of strings by key. Possible values are `"sort"` and `"search"`; the default is `"sort"` for sorting a list of strings. `"search"` is for filtering a list of strings by testing each list item for a full-string match against a key. With `"search"`, the caller should only pay attention to whether `compare()` returns zero or non-zero and should not distinguish the non-zero return values from each other. That is, it is inappropriate to use `"search"` for sorting/ordering.
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

        The default is `"variant"` for usage `"sort"`; it's locale dependent for usage `"search"` per spec, but the core functionality of `"search"` is accent-insensitive and case-insensitive filtering, so `"base"` makes the most sense (and perhaps `"case"`).

    - `ignorePunctuation`
      - : Whether punctuation should be ignored. Possible values are
        `true` and `false`; the default is
        `false`.
    - `numeric`

      - : Whether numeric collation should be used, such that "1" < "2" <
        "10". Possible values are `true` and `false`; the
        default is `false`.
        This option can also be set through the `kn` Unicode
        extension key; if both are provided, this `options`
        property takes precedence.

    - `caseFirst`

      - : Whether upper case or lower case should sort first. Possible values are
        `"upper"`, `"lower"`, or `"false"` (use the locale's default).
        This option can also be set through the `kf` Unicode
        extension key; if both are provided, this `options`
        property takes precedence.

    - `collation`

      - : Variant collations for certain locales. Possible values include:

        - `big5han` (Chinese; do not use; not available in Firefox, Chrome or Edge)
        - `compat` (Arabic)
        - `dict` (Sinhala)
        - `direct` (deprecated, do not use)
        - `ducet` (not available, do not use)
        - `emoji` (root)
        - `eor` (root)
        - `gb2312` (Chinese; do not use; not available in Firefox, Chrome or Edge)
        - `phonebk` (German)
        - `phonetic` (Lingala)
        - `pinyin` (Chinese)
        - `reformed` (formerly Swedish; do not specify explicitly as this was the old name for the default for Swedish)
        - `searchjl` (Korean; this is not for sorting, but for search matching such that syllable-initial consonants are matched and vowels and possible syllable-final consonants are ignored)
        - `stroke` (Chinese)
        - `trad`
        - `unihan` (Chinese, Japanese, and Korean; not available in Chrome or Edge)
        - `zhuyin` (Chinese)

        This option can also be set through the `co` Unicode
        extension key; if both are provided, this `options`
        property takes precedence.

## Examples

### Using Collator

The following example demonstrates the different potential results for a string
occurring before, after, or at the same level as another:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Note that the results shown in the code above can vary between browsers and browser
versions. This is because the values are implementation-specific. That is, the
specification requires only that the before and after values are negative and
positive.

When usage is `"search"`, the caller should only pay attention to whether the return value of `compare()` is zero or non-zero. It is inappropriate to use a `Collator` with usage `"search"` for sorting.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
