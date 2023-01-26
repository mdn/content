---
title: Highlight.entries()
slug: Web/API/Highlight/entries
page-type: web-api-instance-method
tags:
  - API
  - Method
  - CSS Custom Highlight API
  - Reference
  - entries
browser-compat: api.Highlight.entries
---

{{APIRef("CSS Custom Highlight API")}}

The **`entries()`** method of the {{domxref("Highlight")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) object that contains **an array of `[range, range]`** for each {{domxref("Range")}} object in the `Highlight` object, in insertion order.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Return value

A new iterator object that contains an array of `[range, range]` for each `Range` object in the given `Highlight`, in insertion order.

## Example

The code snippet below shows how create a new highlight with two ranges, and then log the ranges by using the iterator returned by the `entries()` method:

```js
const myHighlight = new Highlight();
myHighlight.add(new Range());
myHighlight.add(new Range());

const iter = myHighlight.entries();

console.log(iter.next().value); // [Range, Range]
console.log(iter.next().value); // [Range, Range]
```

The following code example shows how to iterate over the ranges in a highlight by using a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop:

```js
const myHighlight = new Highlight();
myHighlight.add(new Range());
myHighlight.add(new Range());

for (const [range] of myHighlight.entries()) {
  console.log(range); // Range
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
