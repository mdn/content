---
title: "HighlightRegistry: entries() method"
short-title: entries()
slug: Web/API/HighlightRegistry/entries
page-type: web-api-instance-method
browser-compat: api.HighlightRegistry.entries
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.entries
---

{{APIRef("CSS Custom Highlight API")}}

The **`entries()`** method of the {{domxref("HighlightRegistry")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains the `[name, highlight]` pairs for each element in the `HighlightRegistry` object, in insertion order.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Return value

A new iterator object that contains an array of `[name, highlight]` for each `Highlight` object in the `HighlightRegistry`, in insertion order.

## Examples

The code snippet below creates and registers two new highlights, and then logs the highlights and their names by using the iterator returned by the `entries()` method:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

const iter = CSS.highlights.entries();

console.log(iter.next().value); // ['first-highlight', Highlight]
console.log(iter.next().value); // ['second-highlight', Highlight]
```

The following code example shows how to iterate over the highlights in the registry by using a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

for (const [name, highlight] of CSS.highlights.entries()) {
  console.log(`Highlight ${name}`, highlight);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
