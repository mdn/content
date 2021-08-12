---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

Getter function that segments a string according to the locale and granularity of this [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object.


## Syntax

```js
segmenter.segment(input)
```

### Parameters

- `input`
  - : The text to be segmented as a {{jsxref("String")}}.

### Return value

A new Iterable `%Segments%` instance for the input string using the Segmenter's locale and granularity.

## Examples

```js
// Create a locale-specific word segmenter
let segmenter = new Intl.Segmenter("fr", {granularity: "word"});

// Use it to get an iterator for a string
let input = "Moi?  N'est-ce pas.";
let segments = segmenter.segment(input);

// Use that for segmentation!
for (let {segment, index, isWordLike} of segments) {
  console.log("segment at code units [%d, %d): «%s»%s",
    index, index + segment.length,
    segment,
    isWordLike ? " (word-like)" : ""
  );
}
// console.log output:
// segment at code units [0, 3): «Moi» (word-like)
// segment at code units [3, 4): «?»
// segment at code units [4, 6): «  »
// segment at code units [6, 11): «N'est» (word-like)
// segment at code units [11, 12): «-»
// segment at code units [12, 14): «ce» (word-like)
// segment at code units [14, 15): « »
// segment at code units [15, 18): «pas» (word-like)
// segment at code units [18, 19): «.»
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
