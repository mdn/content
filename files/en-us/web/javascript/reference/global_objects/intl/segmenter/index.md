---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

The **`Intl.Segmenter`** object enables language-sensitive text segmentation.

## Constructor

- {{jsxref("Intl.Segmenter/constructor", "Intl.Segmenter()")}}
  - : Creates a new `Intl.Segmenter` object.

## Static methods

- {{jsxref("Intl.Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : Returns a new {{jsxref('Intl/Segmenter/Segments','iterable Segments instance','','nomono')}}
    representing the segments of a string according to the locale and granularity of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} instance.
- {{jsxref("Intl.Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and granularity options computed during initialization of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
