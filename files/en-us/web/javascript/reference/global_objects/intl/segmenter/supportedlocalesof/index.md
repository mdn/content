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
Intl.Segmenter.supportedLocalesOf(locales);
Intl.Segmenter.supportedLocalesOf(locales, options);
```

### Parameters

- `locales`
  - : A string with a BCP 47 language tag, or an array of such strings. For the general
    form of the `locales` argument, see the {{jsxref("Intl",
		"Intl", "#Locale_identification_and_negotiation", 1)}} page.
- `options` {{optional_inline}}
  - : An object that may have the following property:
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        "`lookup`" and "`best fit`"; the default is
        "`best fit`". For information about this option, see the
        {{jsxref("Intl", "Intl", "#Locale_negotiation", 1)}} page.

### Return value

An array of strings representing a subset of the given locale tags that are supported
in segmentation without having to fall back to the runtime's default locale.

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
