---
title: "SVGElement: blur() method"
short-title: blur()
slug: Web/API/SVGElement/blur
page-type: web-api-instance-method
browser-compat: api.SVGElement.blur
---

{{APIRef("SVG")}}

The **`SVGElement.blur()`** method removes keyboard focus from the current SVG element.

## Syntax

```js-nolint
blur()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Remove focus from an SVG circle element

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" tabindex="0" fill="blue" />
  <button id="focusButton">Focus the circle</button>
  <button id="blurButton">Blur the circle</button>
</svg>
```

#### JavaScript

```js
const circle = document.getElementById("myCircle");
const focusButton = document.getElementById("focusButton");
const blurButton = document.getElementById("blurButton");

// Focus the circle when the "Focus" button is clicked
focusButton.addEventListener("click", () => {
  circle.focus();
});

// Blur the circle when the "Blur" button is clicked
blurButton.addEventListener("click", () => {
  circle.blur();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement.focus")}} makes the element the current keyboard focus.
- {{domxref("HTMLElement.blur")}} a similar method for HTML elements.
