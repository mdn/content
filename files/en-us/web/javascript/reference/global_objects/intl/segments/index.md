---
title: Intl.Segments
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segments
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Segments
---
{{JSRef}}

An **`Intl.Segments`** instance is an iterable collection of the segments of a text string. It is returned by a call to the [`segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) method of an [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object.

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-containing.html")}}

## Instance methods

- [`Segments.prototype.containing()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments/containing)
  - : Returns an object describing the segment in the original string that includes the code unit at a specified index.
- [`Segments.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments/@@iterator)
  - : Returns an iterator to iterate over the segments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
