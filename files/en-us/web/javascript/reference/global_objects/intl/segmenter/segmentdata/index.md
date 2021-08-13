---
title: Intl.Segmenter SegmentData object
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/SegmentData
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

An object that represents a particular segment of a string and a few properties related to that segment, such as its index in the original string and whether or not it is “word-like”.

## Description

`SegmentData` objects are plain objects, each of which contains a segment created by an {{jsxref('Intl.Segmenter/segment','Intl.Segmenter.segment')}} operation.

## Instance Properties

- `segment`
  - : A String of the segment extacted from the original input string.
- `index`
  - : The code unit index in the original input string at which the segment begins.
- `input`
  - : The complete input string that was segmented.
- `isWordLike`
  - : A Boolean value only if `granularity` is `"word"`; otherwise, `undefined`.  If `granularity` is `"word"`, then `isWordLike` is `true` when the segment is word-like (i.e., consisting of letters/numbers/ideographs/etc.); otherwise, `false`.

## Examples

```js
// Create a locale-specific word segmenter
let segmenter = new Intl.Segmenter("fr", {granularity: "word"});

// Use it to get an iterator for a string
let input = "Moi?  N'est-ce pas.";
let segments = segmenter.segment(input);

// Use that for segmentation!
for (let {segment, index, input, isWordLike} of segments) {
  console.log("segment at code units [%d, %d] of «%s»: «%s»%s",
    index, index + segment.length,
    input,
    segment,
    isWordLike ? " (word-like)" : ""
  );
}

// expected output:
// segment at code units [0, 3] of «Moi?  N'est-ce pas.»: «Moi» (word-like)
// segment at code units [3, 4] of «Moi?  N'est-ce pas.»: «?»
// segment at code units [4, 6] of «Moi?  N'est-ce pas.»: «  »
// segment at code units [6, 11] of «Moi?  N'est-ce pas.»: «N'est» (word-like)
// segment at code units [11, 12] of «Moi?  N'est-ce pas.»: «-»
// segment at code units [12, 14] of «Moi?  N'est-ce pas.»: «ce» (word-like)
// segment at code units [14, 15] of «Moi?  N'est-ce pas.»: « »
// segment at code units [15, 18] of «Moi?  N'est-ce pas.»: «pas» (word-like)
// segment at code units [18, 19] of «Moi?  N'est-ce pas.»: «.»
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
