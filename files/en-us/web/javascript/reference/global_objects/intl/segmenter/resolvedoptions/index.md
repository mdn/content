---
title: Intl.Segmenter.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

Returns a new object with properties reflecting the locale and granularity options computed during initialization of this [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object.

## Syntax

```js
segmenter.toResolvedOptions();
```

### Return value

A new object with properties reflecting the locale and collation options computed
during the initialization of the given {{jsxref("Intl/Segmenter")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `granularity`
  - : The values provided for this property in the `options` argument or filled
    in as defaults.

## Examples

```js
const spanishSegmenter = new Intl.Segmenter("es", {granularity: "sentence"});
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale) // "es"
console.log(options.granularity) // "sentence"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
