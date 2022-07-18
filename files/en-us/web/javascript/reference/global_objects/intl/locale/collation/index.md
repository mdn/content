---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.collation
---
{{JSRef}}

The **`Intl.Locale.prototype.collation`** property is an accessor property that returns the [collation type](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) for the `Locale`, which is used to order strings according to the locale's rules.

## Description

Collation is the process of ordering strings of characters. It is used whenever strings must be sorted and placed into a certain order, from search query results to ordering records in a database. While the idea of placing strings in order might seem trivial, the idea of order can vary from region to region and language to language. The `collation` property helps to make it easier for JavaScript programmers to access the collation type used by a particular locale.

Below is a table with the available collation types, adapted from the [Unicode collation specification](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

### Valid collation types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Collation Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>big5han</td>
      <td>
        Pinyin ordering for Latin, big5 charset ordering for CJK characters
        (for Chinese)
        <div class="notecard">
          <p>
            <strong>Note:</strong> The `big5han` collation type is
            not available in Chrome or Edge.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>compat</td>
      <td>A previous version of the ordering, for compatibility (for Arabic)</td>
    </tr>
    <tr>
      <td>dict</td>
      <td>Dictionary style ordering (for Sinhala)</td>
    </tr>
    <tr>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> The <code>direct</code> collation type has
            been deprecated. Do not use.
          </p>
        </div>
        <p>direct</p>
      </td>
      <td>Binary code point order</td>
    </tr>
    <tr>
      <td>ducet</td>
      <td>The default Unicode collation element table order
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> The `ducet` collation type is
            not available to the Web. Use the `und` locale without a collation
            type specifier instead. `und` is the collation that is the closest
            to DUCET.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>emoji</td>
      <td>Recommended ordering for emoji characters (for the `und` locale)</td>
    </tr>
    <tr>
      <td>eor</td>
      <td>European ordering rules (for the `und` locale)</td>
    </tr>
    <tr>
      <td>gb2312</td>
      <td>
        Pinyin ordering for Latin, gb2312han charset ordering for CJK characters
        (for Chinese)
        <div class="notecard">
          <p>
            <strong>Note:</strong> The <code>gb2313</code> collation type is
            not available in Chrome or Edge.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>phonebk</td>
      <td>Phonebook style ordering (for German)</td>
    </tr>
    <tr>
      <td>phonetic</td>
      <td>Phonetic ordering (sorting based on pronunciation; for Lingala)</td>
    </tr>
    <tr>
      <td>pinyin</td>
      <td>
        Pinyin ordering for Latin and for CJK characters (for Chinese)
      </td>
    </tr>
    <tr>
      <td>reformed</td>
      <td>Reformed ordering (for Swedish)
        <div class="notecard">
          <p>
            <strong>Note:</strong> This is the default ordering for Swedish
            whose collation naming is unusual as of May 2022. Since this is
            the default, request `sv` instead of requesting `sv-u-co-reformed`.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>search</td>
      <td>Special collation type for string search
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> Do not use. In <code>Intl.Collator</code> this
            collation is activated via the `search` value for the `usage` option.
            Furthermore, there is currently no API for actually using the collator
            for search.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>searchjl</td>
      <td>Special collation type for Korean initial consonant search</td>
    </tr>
    <tr>
      <td>standard</td>
      <td>Default ordering for each language, except Chinese and, as of May 2022, Swedish
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> Do not use explicitly. In general, it's unnecessary
            to specify this explicitly and specifying this for Swedish is problematic in
            case the naming of the Swedish collations is changed to be consistent with
            other languages in the future.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>stroke</td>
      <td>
        Pinyin ordering for Latin, stroke order for CJK characters (for
        Chinese)
      </td>
    </tr>
    <tr>
      <td>trad</td>
      <td>Traditional style ordering (such as in Spanish)</td>
    </tr>
    <tr>
      <td>unihan</td>
      <td>
        Radical-stroke ordering for Han characters (for Chinese, Japanese, and Korean).
        Pinyin ordering for Latin in the case of Chinese.
        <div class="notecard">
          <p>
            <strong>Note:</strong> The <code>unihan</code> collation type is
            not available in Chrome or Edge.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>zhuyin</td>
      <td>
        <p>
          Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK
          characters (for Chinese)
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

Like other locale subtags, the collation type can be added to the {{jsxref("Intl/Locale", "Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a collation type via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), collation types are locale key "extension subtags". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the collation type can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the collation type, first add the `-u` extension to the string. Next, add the `-co` extension to indicate that you are adding a collation type. Finally, add the collation to the string.

```js
let locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // Prints "zhuyin"
```

### Adding a collation type via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including collation types. Set the `collation` property of the configuration object to your desired collation type, and then pass it into the constructor.

```js
let locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // Prints "zhuyin"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
