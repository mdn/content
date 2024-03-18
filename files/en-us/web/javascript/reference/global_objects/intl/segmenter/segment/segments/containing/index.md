---
title: Segments.prototype.containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Segments.containing
---

{{JSRef}}

The **`containing()`** method of [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) instances returns an object describing the segment in the string that includes the code unit at the specified index.

{{EmbedInteractiveExample("pages/js/segments-prototype-containing.html")}}

## Syntax

```js-nolint
containing(codeUnitIndex)
```

### Parameters

- `codeUnitIndex` {{optional_inline}}
  - : A number specifying the index of the code unit in the original input string. If the value is omitted, it defaults to `0`.

### Return value

An object describing the segment of the original string with the following properties, or `undefined` if the supplied index value is out of bounds.

- `segment`
  - : A string containing the segment extracted from the original input string.
- `index`
  - : The code unit index in the original input string at which the segment begins.
- `input`
  - : The complete input string that was segmented.
- `isWordLike`
  - : A boolean value only if `granularity` is `"word"`; otherwise, `undefined`. If `granularity` is `"word"`, then `isWordLike` is `true` when the segment is word-like (i.e., consists of letters/numbers/ideographs/etc.); otherwise, `false`.

## Examples

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← code unit index
// ┃A l l o n s┃-┃y┃!┃   ← code unit
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
