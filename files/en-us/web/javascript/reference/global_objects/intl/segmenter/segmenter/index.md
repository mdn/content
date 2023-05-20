---
title: Intl.Segmenter() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.Segmenter.Segmenter
---

{{JSRef}}

The **`Intl.Segmenter()`** constructor creates {{jsxref("Intl.Segmenter")}} objects.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Syntax

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> **Note:** `Intl.Segmenter()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object with some or all of the following properties:
    - `granularity` {{optional_inline}}
      - : A string. Possible values are:
        - `"grapheme"` (default)
          - : Split the input into segments at grapheme cluster (user-perceived character) boundaries, as determined by the locale.
        - `"word"`
          - : Split the input into segments at word boundaries, as determined by the locale.
        - `"sentence"`
          - : Split the input into segments at sentence boundaries, as determined by the locale.
    - `localeMatcher` {{optional_inline}}
      - : The locale matching algorithm to use. Possible values are:
        - `"best fit"` (default)
          - : The runtime may choose a possibly more suited locale than the result of the lookup algorithm.
        - `"lookup"`
          - : Use the [BCP 47 Lookup algorithm](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) to choose the locale from `locales`. For each locale in `locales`, the runtime returns the first supported locale (possibly removing restricting subtags of the provided locale tag to find such a supported locale. In other words providing `"de-CH"` as `locales` may result in using `"de"` if `"de"` is supported but `"de-CH"` is not).

### Return value

A new [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) instance.

## Examples

### Basic usage

The following example shows how to count words in a string using the Japanese language (where splitting the string using `String` methods would have given an incorrect result).

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// 8, as the text is segmented as '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
