---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Segmenter.segment
---

{{JSRef}}

The **`segment()`** method of {{jsxref("Intl.Segmenter")}} instances segments a string according to the locale and granularity of this `Intl.Segmenter` object.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.segment")}}

```js interactive-example
const string1 = "Que ma joie demeure";

const segmenterFrGrapheme = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});
const graphemeSegments = segmenterFrGrapheme.segment(string1);

console.log(Array.from(graphemeSegments)[0]);
// Expected output:
// Object {segment: 'Q', index: 0, input: 'Que ma joie demeure'}
```

## Syntax

```js-nolint
segment(input)
```

### Parameters

- `input`
  - : The text to be segmented as a string.

### Return value

A new iterable [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) object containing the segments of the input string, using the segmenter's locale and granularity.

## Examples

```js
// Create a locale-specific word segmenter
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// Use it to get an iterator over the segments of a string
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// Use that for segmentation
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "segment at code units [%d, %d]: «%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (word-like)" : "",
  );
}
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
