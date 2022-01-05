---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

The **`Intl.Segmenter`** object enables language-sensitive text segmentation.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html", "taller")}}

## Constructor

- [`Intl.Segmenter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter)
  - : Creates a new `Intl.Segmenter` object.

## Static methods

- [`Intl.Segmenter.supportedLocalesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf)
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
  - : Returns a new [iterable `Segments` instance](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments)
    representing the segments of a string according to the locale and granularity of this `Intl.Segmenter` instance.
- [`Intl.Segmenter.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions)
  - : Returns a new object with properties reflecting the locale and granularity options computed during initialization of this `Intl.Segmenter` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
