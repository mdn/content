---
title: "SVGTextContentElement: getNumberOfChars() method"
short-title: getNumberOfChars()
slug: Web/API/SVGTextContentElement/getNumberOfChars
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getNumberOfChars
---

{{APIRef("SVG")}}

The `getNumberOfChars()` method of the {{domxref("SVGTextContentElement")}} interface represents the total number of addressable characters available for rendering within the current element, regardless of whether they will be rendered.

## Syntax

```js-nolint
getNumberOfChars()
```

### Parameters

None.

### Return value

A long.

## Examples

### Counting Characters in a Text Element

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the number of characters in the text element
const charCount = textElement.getNumberOfChars();

console.log(charCount); // Output: 17
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
