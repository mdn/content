---
title: "SVGTextContentElement: getExtentOfChar() method"
short-title: getExtentOfChar()
slug: Web/API/SVGTextContentElement/getExtentOfChar
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getExtentOfChar
---

{{APIRef("SVG")}}

The `getExtentOfChar()` method of the {{domxref("SVGTextContentElement")}} interface the represents computed tight bounding box of the glyph cell that corresponds to a given typographic character.

## Syntax

```js-nolint
getExtentOfChar(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the character.

### Return value

A {{domxref("DOMRect")}} object; the tight bounding box of the specified character.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if no character is found at `index`.

## Examples

### Getting the Extent of a Character

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the extent (bounding box) of the character at index 0 (the first character)
const extent = textElement.getExtentOfChar(0);

// The bounding box of the first character
console.dir(extent); // Output: DOMRect { x: 10, y: 38, width: 11.55, height: 16 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMRect")}}
