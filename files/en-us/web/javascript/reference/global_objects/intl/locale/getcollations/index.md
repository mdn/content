---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getCollations
---

{{JSRef}}

The **`getCollations()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more [collation types](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `collations`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.collations === locale.collations` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getCollations()
```

### Parameters

None.

### Return value

An array of strings representing all collation types commonly used for the `Locale`, sorted in alphabetical order, with the `standard` and `search` values always excluded. If the `Locale` already has a [`collation`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation), then the returned array contains that single value.

Below is a list of the supported collation types, adapted from the [Unicode collation specification](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

### Supported collation types

- `big5han`
  - : Pinyin ordering for Latin, big5 charset ordering for CJK characters (for Chinese)
    > **Warning:** The `big5han` collation type is deprecated, not available in Firefox, Chrome or Edge.
- `compat`
  - : A previous version of the ordering, for compatibility (for Arabic)
- `dict`
  - : Dictionary style ordering (for Sinhala)
- `direct`
  - : Binary code point order
    > **Warning:** The `direct` collation type has been deprecated. Do not use.
- `ducet`
  - : The default Unicode collation element table order
    > **Warning:** The `ducet` collation type is not available to the Web. Use the `und` locale without a collation type specifier instead. `und` is the collation that is the closest to `ducet`.
- `emoji`
  - : Recommended ordering for emoji characters (for the `und` locale)
- `eor`
  - : European ordering rules (for the `und` locale)
- `gb2312`
  - : Pinyin ordering for Latin, gb2312han charset ordering for CJK characters (for Chinese)
    > **Warning:** The `gb2312` collation type is deprecated, not available in Firefox, Chrome or Edge.
- `phonebk`
  - : Phonebook style ordering (for German)
- `phonetic`
  - : Phonetic ordering (sorting based on pronunciation; for Lingala)
- `pinyin`
  - : Pinyin ordering for Latin and for CJK characters (for Chinese)
- `reformed`
  - : Reformed ordering (formerly for Swedish)
    > **Warning:** Do not use explicitly. This is the old name for the default ordering for Swedish [whose collation naming used to differ from other languages](https://unicode-org.atlassian.net/browse/CLDR-15603). Since this was the default, request `sv` instead of requesting `sv-u-co-reformed`.
- `search`
  - : Special collation type for string search
    > **Warning:** Do not use as a collation type, since in [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), this collation is activated via the `"search"` value for the `usage` option. There is currently no API for substring search, so this is currently only good for filtering a list of strings by trying a full-string match of the key against each list item.
- `searchjl`
  - : Special collation type for Korean initial consonant search
    > **Warning:** This collation is not for sorting, even though it is made available through [`Intl.Collator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) instantiated with usage `"sort"` as opposed to usage `"search"`.
- `standard`
  - : Default ordering for each language, except Chinese (and, previously, Swedish)
    > **Warning:** Do not use explicitly. In general, it's unnecessary to specify this explicitly and specifying this for Swedish is problematic due to the different meaning for Swedish in the past.
- `stroke`
  - : Pinyin ordering for Latin, stroke order for CJK characters (for Chinese)
- `trad`
  - : Traditional style ordering (such as in Spanish)
- `unihan`
  - : Radical-stroke ordering for Han characters (for Chinese, Japanese, and Korean). Pinyin ordering for Latin in the case of Chinese.
    > **Note:** The `unihan` collation type is not available in Chrome or Edge.
- `zhuyin`
  - : Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (for Chinese)

## Examples

### Obtaining supported collation types

If the `Locale` object doesn't have a `collation` already, `getCollations()` lists all commonly-used collation types for the given `Locale`. For examples of explicitly setting a `collation`, see [`collation` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
