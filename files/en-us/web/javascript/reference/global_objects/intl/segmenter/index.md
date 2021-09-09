---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
---
{{JSRef}}

The **`Intl.Segmenter`** object is a constructor for segmenters, objects that enable language sensitive string splitting.

## Constructor

- [`Intl.Segmenter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter)
  - : Creates a new `Segmenter` object.

## Static methods

- {{jsxref("Intl.Segmenter.supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl.Segmenter.segment", "Intl.Segmenter.prototype.segment()")}}
  - : Getter function that segments a string according to the locale and granularity of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} object.
- {{jsxref("Intl.Segmenter.resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and granularity options computed during initialization of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} object.
