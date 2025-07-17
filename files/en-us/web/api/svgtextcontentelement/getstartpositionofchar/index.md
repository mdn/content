---
title: "SVGTextContentElement: getStartPositionOfChar() method"
short-title: getStartPositionOfChar()
slug: Web/API/SVGTextContentElement/getStartPositionOfChar
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getStartPositionOfChar
---

{{APIRef("SVG")}}

The `getStartPositionOfChar()` method of the {{domxref("SVGTextContentElement")}} interface returns the position of a typographic character after text layout has been performed.

## Syntax

```js-nolint
getStartPositionOfChar(index)
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

### Getting the Position of a Character

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the position of the character at index 0 (the first character)
const position = textElement.getStartPositionOfChar(0);

// Get the x and y coordinates of the first character
console.log(position.x, position.y); // Output: 10 50
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
