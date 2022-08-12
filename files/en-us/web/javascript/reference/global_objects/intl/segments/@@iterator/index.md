---
title: Intl.Segments.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segments/@@iterator
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.Segments.@@iterator
---
{{JSRef}}

The **`[@@iterator]()`** method is part of [the iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), which returns a new iterator object that can iterate over the entries in an `Intl.Segmenter` object.  Each entry is returned as an object.

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-@@iterator.html")}}

## Syntax

```js
segments[Symbol.iterator]
```

The one iterator function available is `.next()`, as described in the [iterator protocol page](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

### Return value

A new Iterator object.

## Examples

```js
const segmenter = new Intl.Segmenter("fr", {granularity: "word"});
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/* Logs
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
