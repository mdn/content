---
title: "Highlight: add() method"
short-title: add()
slug: Web/API/Highlight/add
page-type: web-api-instance-method
browser-compat: api.Highlight.add
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.add
---

{{APIRef("CSS Custom Highlight API")}}

The **`add()`** method of the {{domxref("Highlight")}} interface adds a new {{domxref("Range")}} object to a highlight, to be styled using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.add()")}}.

## Syntax

```js-nolint
add(range)
```

### Parameters

- `range`
  - : A {{domxref("Range")}} object to add to the `Highlight`.

### Return value

The `Highlight` object, with the added range.

## Examples

The code snippet below shows how to add two ranges to a new highlight object:

```js
const highlight = new Highlight();

const range1 = new Range();
const range2 = new Range();

highlight.add(range1).add(range2);

console.log(highlight.size); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
