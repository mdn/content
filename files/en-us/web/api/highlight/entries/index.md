---
title: "Highlight: entries() method"
short-title: entries()
slug: Web/API/Highlight/entries
page-type: web-api-instance-method
browser-compat: api.Highlight.entries
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.entries
---

{{APIRef("CSS Custom Highlight API")}}

The **`entries()`** method of the {{domxref("Highlight")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains an array of `[range, range]` for each {{domxref("Range")}} object in the `Highlight` object, in insertion order.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Return value

A new iterator object that contains an array of `[range, range]` for each `Range` object in the given `Highlight`, in insertion order.

## Examples

The code snippet below shows how create a new highlight with two ranges, and then log the ranges by using the iterator returned by the `entries()` method:

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const myHighlight = new Highlight();
myHighlight.add(range1);
myHighlight.add(range2);

const iter = myHighlight.entries();

console.log(iter.next().value); // [Range, Range]
console.log(iter.next().value); // [Range, Range]
```

The following code example shows how to iterate over the ranges in a highlight by using a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop:

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);

for (const [range] of highlight.entries()) {
  console.log(range.toString());
  // Time
  // Lunchtime
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
