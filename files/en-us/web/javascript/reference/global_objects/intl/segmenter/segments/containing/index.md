---
title: Intl.Segmenter Segments.prototype.containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segments/containing
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---

The `.containing()` method returns a {{jsxref('Intl.Segmenter/SegmentData','SegmentData object','','nomono')}} describing the segment in the string that includes the code unit at the specified index.

## Syntax

```js
segments.containing(codeUnitIndex)
```

### Parameters

- `codeUnitIndex` {{ optional_inline }}
  - : A Number specifying the index of the code unit in the original input string.  If the value is omitted, it defaults to `0`.

### Return Value

A {{jsxref('Intl.Segmenter/SegmentData','SegmentData object','','nomono')}} describing the segment of the original string, or `undefined` if the supplied index value is out of bounds.


## Examples

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← code unit index
// ┃A l l o n s┃-┃y┃!┃   ← code unit
let input = "Allons-y!";

let segmenter = new Intl.Segmenter("fr", {granularity: "word"});
let segments = segmenter.segment(input);
let current = undefined;

current = segments.containing()
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4)
// → { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6)
// → { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length)
// → { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length)
// → { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length)
// → undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
