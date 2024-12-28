---
title: "SVGSVGElement: animationsPaused() method"
short-title: animationsPaused()
slug: Web/API/SVGSVGElement/animationsPaused
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.animationsPaused
---

{{APIRef("SVG")}}

The `animationsPaused()` method of the {{domxref("SVGSVGElement")}} interface returns `true` if this SVG document fragment is in a paused state.

## Syntax

```js-nolint
SVGSVGElement.animationsPaused()
```

### Parameters

None.

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
const charIndex = textElement.animationsPaused(point);

console.log(charIndex); // Output: 2 (for character "l")

// Check with a point where no character is present
const offPoint = new DOMPoint(300, 40);
const offCharIndex = textElement.animationsPaused(offPoint);

console.log(offCharIndex); // Output: -1 (no character found)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
