---
title: Intl.Segmenter.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Intl.Segmenter.supportedLocalesOf
---

{{JSRef}}

The **`Intl.Segmenter.supportedLocalesOf()`** static method returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

{{EmbedInteractiveExample("pages/js/intl-segmenter-supportedlocalesof.html", "shorter")}}

## Syntax

```js-nolint
Intl.Segmenter.supportedLocalesOf(locales)
Intl.Segmenter.supportedLocalesOf(locales, options)
```

### Parameters

- `locales`
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object that may have the following property:
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        `"lookup"` and `"best fit"`; the default is
        `"best fit"`. For information about this option, see the [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) page.

### Return value

An array of strings representing a subset of the given locale tags that are supported
in segmentation without having to fall back to the runtime's default locale.

## Examples

### Using supportedLocalesOf()

Assuming a runtime that supports Indonesian and German but not Balinese in list
formatting, `supportedLocalesOf` returns the Indonesian and German language
tags unchanged, even though `pinyin` collation is neither relevant to segmentation
nor used with Indonesian, and a specialized German for Indonesia is
unlikely to be supported. Note the specification of the `"lookup"`
algorithm here — a `"best fit"` matcher might decide that Indonesian is an
adequate match for Balinese since most Balinese speakers also understand Indonesian,
and therefore return the Balinese language tag as well.

```js
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.Segmenter.supportedLocalesOf(locales, options).join(", "));
// "id-u-co-pinyin, de-ID"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
