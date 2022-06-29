---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Segmenter.segment
---
{{JSRef}}

The **`Intl.Segmenter.prototype.segment()`** method segments a string according to the locale and granularity of this [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-segment.html")}}

## Syntax

```js
segment(input)
```

### Parameters

- `input`
  - : The text to be segmented as a [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

### Return value

A new iterable [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) object containing the segments of the input string, using the segmenter's locale and granularity.

## Examples

```js
// Create a locale-specific word segmenter
const segmenter = new Intl.Segmenter("fr", {granularity: "word"});

// Use it to get an iterator over the segments of a string
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// Use that for segmentation
for (const {segment, index, isWordLike} of segments) {
  console.log("segment at code units [%d, %d]: «%s»%s",
    index, index + segment.length,
    segment,
    isWordLike ? " (word-like)" : ""
  );
}
// logs
// segment at code units [0, 3]: «Moi» (word-like)
// segment at code units [3, 4]: « »
// segment at code units [4, 5]: «?»
// segment at code units [5, 6]: « »
// segment at code units [6, 11]: «N'est» (word-like)
// segment at code units [11, 12]: «-»
// segment at code units [12, 14]: «ce» (word-like)
// segment at code units [14, 15]: « »
// segment at code units [15, 18]: «pas» (word-like)
// segment at code units [18, 19]: « »
// segment at code units [19, 20]: «?»
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
