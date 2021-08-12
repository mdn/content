---
title: Intl.Segmenter constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/constructor
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---

The constructor for a new locale-dependent {{jsxref('Intl/Segmenter','Intl.Segmenter')}} object.

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
  - : An object containing the option values.  Possible options are:
    - `granularity` {{ optional_inline }}
      - : A string.  Possible values are:
        - `grapheme` (default)
          - : Split the input into segments by grapheme, as determined by the locale.
        - `word`
          - : Split the input into segments at word boundaries, as determined by the locale.
        - `sentence`
          - : Split the input into segments at sentence boundaries, as determined by the locale.
    - `localeMatcher` {{ optional_inline }}
      - : A string.  Possible values are:
        - `best fit` (default)
          - : Locales are matched using an implementation-dependent algorithm.
        - `lookup`
          - : Locales are matched using the algorithm described in [section 3.4 of RFC 4647](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4).


### Return value

A new {{jsxref('Intl/Segmenter','Intl.Segmenter')}} object.

## Examples

```js
// Create a Spanish-language sentence segmenter
const spanishSegmenter = new Intl.Segmenter("es", {granularity: "sentence"});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
