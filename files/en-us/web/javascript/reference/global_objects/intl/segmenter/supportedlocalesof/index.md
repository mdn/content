---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
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

```js
let validLocales = Intl.Segmenter.supportedLocalesOf(["yue", "zh", "en", "xy", "fr"]);
console.log(validLocales);
// => ["zh", "en", "fr"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
