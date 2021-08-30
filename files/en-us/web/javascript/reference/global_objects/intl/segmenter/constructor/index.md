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
new Intl.segmenter(options);
new Intl.segmenter(locale, options);
```

### Parameters

- `locale` {{ optional_inline }}
  - : A string value indicating the locale by which graphemes, words, and sentences should be determined.  Locales are described using [BCP 47](https://datatracker.ietf.org/doc/html/bcp47) language tags (see the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) for a full list).  If no <var>locale</var> value is supplied, the runtime's default locale is used instead.
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
      - : A string which sets the method used to determine the value of the `locale` property.  Possible values are:
        - `best fit` (default)
          - : Locales are matched using an implementation-dependent algorithm.
        - `lookup`
          - : Locales are matched using the algorithm described in [section 3.4 of RFC 4647](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4).


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
