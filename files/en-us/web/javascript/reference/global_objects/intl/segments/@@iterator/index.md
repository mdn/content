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

The **`Intl.Segments.@@iterator`** method is part of [the iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), which returns a new iterator object that can iterate over the entries in an `Intl.Segmenter` object.  Each entry is returned as an object.

## Syntax

```js
segments[Symbol.iterator]
```

The one iterator function available is `.next()`, as [described on the iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) page.

### Return value

A new Iterator object.


## Examples

```js
let segmenter = new Intl.Segmenter("fr", {granularity: "word"});
let input = "Moi ? N'est-ce pas ?";
let segments = segmenter.segment(input);
let iterator = segments[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
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

* [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
* [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
