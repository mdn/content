---
title: "Highlight: values() method"
short-title: values()
slug: Web/API/Highlight/values
page-type: web-api-instance-method
browser-compat: api.Highlight.values
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.values
---

{{APIRef("CSS Custom Highlight API")}}

The **`values()`** method of the {{domxref("Highlight")}} interface returns a new [Iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) object that contains the values for each `Range` object in the `Highlight` object in insertion order.

> [!NOTE]
> The **`keys()`** method is an alias for this method. It behaves exactly the same and returns **values** of `Highlight` elements.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.values()")}}.

## Syntax

```js-nolint
values()
```

### Return value

A new iterator object containing each `Range` object in the given `Highlight`, in insertion order.

## Examples

The following code snippet shows how to create a new `Highlight` object with three `Range` objects, and use the iterator returned by the `values()` method to log the three ranges:

```js
const myHighlight = new Highlight();
myHighlight.add(new Range());
myHighlight.add(new Range());
myHighlight.add(new Range());

const iter = myHighlight.values();

for (value of iter) {
  console.log(value); // Range
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
