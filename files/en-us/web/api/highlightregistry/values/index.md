---
title: "HighlightRegistry: values() method"
short-title: values()
slug: Web/API/HighlightRegistry/values
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HighlightRegistry.values
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-map.prototype.values
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The **`values()`** method of the {{domxref("HighlightRegistry")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains the values for each `Highlight` object in the `HighlightRegistry` object in insertion order.

`HighlightRegistry` is a {{jsxref("Map")}}-like object, so this is similar to using {{jsxref("Map.values()")}}.

## Syntax

```js-nolint
values()
```

### Return value

A new iterator object containing each `Highlight` object in the registry, in insertion order.

## Examples

The following code snippet shows how to create and register three `Highlight` objects, and use the iterator returned by the `values()` method to log the highlights:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

const iter = CSS.highlights.values();

console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
```

The following code example shows how to iterate over the highlights in the registry by using a [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

for (const highlight of CSS.highlights.values()) {
  console.log(highlight); // Highlight
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
