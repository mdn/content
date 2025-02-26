---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Segmenter.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.Segmenter")}} instances returns a new object with properties reflecting the options computed during initialization of this `Segmenter` object.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions")}}

```js interactive-example
const segmenter1 = new Intl.Segmenter("fr-FR");
const options1 = segmenter1.resolvedOptions();

console.log(options1.locale);
// Expected output: "fr-FR"

console.log(options1.granularity);
// Expected output: "grapheme"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `Segmenter` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. No Unicode extension key will be included in the output.
- `granularity`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"grapheme"`, `"word"`, or `"sentence"`. The default is `"grapheme"`.

## Examples

### Basic usage

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### Default granularity

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### Fallback locale

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// "fr" on a runtime where the Balinese locale
// is not supported and French is the default locale
console.log(options.granularity); // "grapheme"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
