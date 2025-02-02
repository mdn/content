---
title: "SVGTextContentElement: getEndPositionOfChar() method"
short-title: getEndPositionOfChar()
slug: Web/API/SVGTextContentElement/getEndPositionOfChar
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getEndPositionOfChar
---

{{APIRef("SVG")}}

The `getEndPositionOfChar()` method of the {{domxref("SVGTextContentElement")}} interface returns the trailing position of a typographic character after text layout has been performed.

## Syntax

```js-nolint
getEndPositionOfChar(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the character.

### Return value

A {{domxref("DOMPoint")}} object; the position of the character in user coordinates.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if no character is found at `index`.

## Examples

### Getting the End Position of a Character

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the end position of the character at index 0 (the first character)
const position = textElement.getEndPositionOfChar(0);

// Get the x and y coordinates of the first character
console.log(position.x, position.y); // Output: 21.5 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
