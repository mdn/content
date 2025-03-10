---
title: "SVGTextContentElement: getComputedTextLength() method"
short-title: getComputedTextLength()
slug: Web/API/SVGTextContentElement/getComputedTextLength
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getComputedTextLength
---

{{APIRef("SVG")}}

The `getComputedTextLength()` method of the {{domxref("SVGTextContentElement")}} interface represents the computed length for the text within the element.

## Syntax

```js-nolint
getComputedTextLength()
```

### Parameters

None.

### Return value

A float.

## Examples

### Computing the text length

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the computed text length
const textLength = textElement.getComputedTextLength();

console.log(textLength); // Output: 124.5 (e.g. depends on font size and text content)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
