---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter.supportedLocalesOf
---
{{JSRef}}

Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Syntax

```js
Intl.Segmenter.supportedLocalesOf();
Intl.Segmenter.supportedLocalesOf(localeArray);
Intl.Segmenter.supportedLocalesOf(options);
Intl.Segmenter.supportedLocalesOf(localeArray, options);
```

### Parameters

- `localeArray` {{ optional_inline }}
  - : An array of string values, each representing a locale described using [BCP 47](https://datatracker.ietf.org/doc/html/bcp47) language tags (see the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) for a full list).  If no <var>localeArray</var> is supplied, a zero-length array is returned.
- `options` {{ optional_inline }}
  - : An object containing the value of `localeMatcher`.  Possible values are:
    - `best fit` (default)
      - : Locales are matched using an implementation-dependent algorithm.
    - `lookup`
      - : Locales are matched using the algorithm described in [section 3.4 of RFC 4647](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4).

### Return value

An array containing all locales from <var>localeArray</var> that are supported by the runtime’s {{ jsxref('Intl') }} implementation, in the same order as they appeared in <var>localeArray</code>

## Examples

### Using supportedLocalesOf()

Assuming a runtime that supports Indonesian and German but not Balinese in list
formatting, `supportedLocalesOf` returns the Indonesian and German language
tags unchanged, even though `pinyin` collation is neither relevant to segmentation
nor used with Indonesian, and a specialized German for Indonesia is
unlikely to be supported. Note the specification of the "`lookup`"
algorithm here — a "`best fit`" matcher might decide that Indonesian is an
adequate match for Balinese since most Balinese speakers also understand Indonesian,
and therefore return the Balinese language tag as well.

```js
const locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
const options = { localeMatcher: 'lookup' };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options).join(', '));
// → "id-u-co-pinyin, de-ID"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
