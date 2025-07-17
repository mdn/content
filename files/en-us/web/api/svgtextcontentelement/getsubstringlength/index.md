---
title: "SVGTextContentElement: getSubStringLength() method"
short-title: getSubStringLength()
slug: Web/API/SVGTextContentElement/getSubStringLength
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getSubStringLength
---

{{APIRef("SVG")}}

The `getSubStringLength()` method of the {{domxref("SVGTextContentElement")}} interface represents the computed length of the formatted text advance distance for a substring of text within the element.

Note that this method only accounts for the widths of the glyphs in the substring and any extra spacing inserted by the CSS [`letter-spacing`](/en-US/docs/Web/CSS/letter-spacing) and [`word-spacing`](/en-US/docs/Web/CSS/word-spacing) properties. Visual spacing adjustments made by the [`x`](/en-US/docs/Web/CSS/x) attribute are ignored.

## Syntax

```js-nolint
getSubStringLength(index, length)
```

### Parameters

- `index`
  - : An `integer`; the start index of the substring.
- `length`
  - : An `integer`; the number of characters to include in the substring.

### Return value

A float.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the `index` is greater than the highest index or `length` is negative.

## Examples

### Getting the Length of a Substring

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the length of a substring starting at character 0 with 5 characters
const substringLength = textElement.getSubStringLength(0, 5);

console.log(substringLength); // Output: 35.55
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
