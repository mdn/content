---
title: "SVGTextContentElement: getCharNumAtPosition() method"
short-title: getCharNumAtPosition()
slug: Web/API/SVGTextContentElement/getCharNumAtPosition
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getCharNumAtPosition
---

{{APIRef("SVG")}}

The `getCharNumAtPosition()` method of the {{domxref("SVGTextContentElement")}} interface represents the character which caused a text glyph to be rendered at a given position in the coordinate system. Because the relationship between characters and glyphs is not one-to-one, only the first character of the relevant typographic character is returned.

If no character is found at the specified position, `-1` is returned.

## Syntax

```js-nolint
getCharNumAtPosition(point)
```

### Parameters

- `point`
  - : An {{domxref("DOMPoint")}} object; the coordinates (x, y) where the position of the character is to be checked in the user coordinate space.

### Return value

A long; the index of the character that corresponds to the position.

## Examples

### Finding the Character at a Specific Position

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Create a DOMPoint for the position (30, 40)
const point = new DOMPoint(30, 40);

// Get the character at the specified position
const charIndex = textElement.getCharNumAtPosition(point);

console.log(charIndex); // Output: 2 (for character "l")

// Check with a point where no character is present
const offPoint = new DOMPoint(300, 40);
const offCharIndex = textElement.getCharNumAtPosition(offPoint);

console.log(offCharIndex); // Output: -1 (no character found)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
