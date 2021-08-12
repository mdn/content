---
title: Intl.SegmentData
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/SegmentData
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---
{{JSRef}}

An object that represents a particular segment from a string.

## Description

`SegmentData` objects are plain objects that describe Segments with the following data properties:

- `segment`
  - : The String segment.
- `index`
  - : The code unit index in the string at which the segment begins.
- `input`
  - : The String being segmented.
- `isWordLike`
  - : `true` when granularity is `"word"` and the segment is word-like (consisting of letters/numbers/ideographs/etc.), `false` when granularity is `"word"` and the segment is not word-like (consisting of spaces/punctuation/etc.), and `undefined` when granularity is not `"word"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
