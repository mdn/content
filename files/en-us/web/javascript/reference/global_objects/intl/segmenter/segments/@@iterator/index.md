---
title: Intl.Segmenter Segments.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segments/@@iterator
tags:
  - JavaScript
  - Intl
browser-compat: javascript.builtins.Intl.Segmenter
---

>base on [Set.prototype\[@@iterator\]\(\)](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)

>include table with next() and toString() ??

## Syntax

```js
segments[Symbol.iterator]
```


## Examples

```js
for (let {segment, index, isWordLike} of segments) {
  console.log("segment at code units [%d, %d): «%s»%s",
    index, index + segment.length,
    segment,
    isWordLike ? " (word-like)" : ""
  );
}
```


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
