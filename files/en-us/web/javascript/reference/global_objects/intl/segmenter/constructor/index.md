---
title: Intl.Segmenter() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/constructor
tags:
  - Constructor
  - Segmenter
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Segmenter.constructor
---

The Intl.Segmenter() constructor creates {{jsxref('Intl/Segmenter','Intl.Segmenter')}} objects that enable locale-sensitive text segmentation.

## Syntax

```js
new Intl.segmenter();
new Intl.segmenter(locale);
new Intl.segmenter(locale, options);
```

### Parameters

- `locale` {{ optional_inline }}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general
    form and interpretation of the `locales` argument, see the
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation",
      1)}} page.
- `options` {{ optional_inline }}
  - : An object with some or all of the following properties:
    - `granularity` {{ optional_inline }}
      - : A string.  Possible values are:
        - `grapheme` (default)
          - : Split the input into segments at grapheme cluster (user-perceived character) boundaries, as determined by the locale.
        - `word`
          - : Split the input into segments at word boundaries, as determined by the locale.
        - `sentence`
          - : Split the input into segments at sentence boundaries, as determined by the locale.
    - `localeMatcher` {{ optional_inline }}
      - : The locale matching algorithm to use. Possible values are "`lookup`"
        and "`best fit`"; the default is "`best fit`". For
        information about this option, see the {{jsxref("Global_Objects/Intl", "Intl",
        "#Locale_negotiation", 1)}} page.


### Return value

A new `Intl.Segmenter` {{jsxref('Intl/Segmenter/segments','Segments instance','','nomono')}}.

## Examples

### Basic usage

The following example shows how to count words in a string using the Spanish language.

```js
const spanishSegmenter = new Intl.Segmenter("es", {granularity: "word"});
console.log([...spanishSegmenter.segment(text)].filter(segment => segment.isWordLike).length);

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
