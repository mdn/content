---
title: "Highlight: has() method"
short-title: has()
slug: Web/API/Highlight/has
page-type: web-api-instance-method
browser-compat: api.Highlight.has
spec-urls: https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.has
---

{{APIRef("CSS Custom Highlight API")}}

The **`has()`** method of the {{domxref("Highlight")}} interface returns a boolean indicating whether a {{domxref("Range")}} object exists in a `Highlight` object or not.

`Highlight` is a {{jsxref("Set")}}-like object, so this is similar to using {{jsxref("Set.has()")}}.

## Syntax

```js-nolint
has(range)
```

### Parameters

- `range`
  - : The `Range` object to test for presence in the `Highlight` object.

### Return value

Returns `true` if the specified range exists in the `Highlight` object; otherwise `false`.

## Examples

The code snippet below creates two ranges, and a highlight object that contains one of them. The code then uses the `has()` method to check whether each range exists in the highlight:

```js
const range1 = new Range();
const range2 = new Range();
const myHighlight = new Highlight(range1);

myHighlight.has(range1); // true
myHighlight.has(range2); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
