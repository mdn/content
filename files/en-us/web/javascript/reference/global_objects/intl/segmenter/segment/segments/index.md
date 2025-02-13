---
title: Segments
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments
page-type: javascript-class
browser-compat: javascript.builtins.Intl.Segments
---

{{JSRef}}

A **`Segments`** object is an iterable collection of the segments of a text string. It is returned by a call to the [`segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) method of an [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object.

{{InteractiveExample("JavaScript Demo: Segments.prototype.containing")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const segments = segmenterFr.segment(string1);

console.log(segments.containing(5));
// Expected output:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## Instance methods

- [`Segments.prototype.containing()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing)
  - : Returns an object describing the segment in the original string that includes the code unit at a specified index.
- [`Segments.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
  - : Returns an iterator to iterate over the segments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Intl.Segmenter`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
