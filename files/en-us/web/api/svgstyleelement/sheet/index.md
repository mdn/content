---
title: SVGStyleElement.sheet
slug: Web/API/SVGStyleElement/sheet
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGStyleElement.sheet
---
{{APIRef("SVG")}}

The **`SVGStyleElement.sheet`** read-only property returns the {{domxref("CSSStyleSheet")}} corresponding to the given SVG style element, or `null` if there is none.

## Value

A {{domxref("CSSStyleSheet")}}, or `null` if the element has no associated style sheet.

## Examples

This example demonstrates how to get the CSS sheet associated with an element.

#### HTML

The HTML contains an SVG definition for a [`<circle>`](/en-US/docs/Web/SVG/Element/circle).

```html
<textarea id="log" rows="3" cols="50"></textarea>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

The code below creates a `style` element (an `SVGStyleElement`) and adds it to the SVG.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
const node = document.createTextNode('circle { fill: red; }');
svg.appendChild(style);
style.appendChild(node);
```

The code below then logs the sheet and CSS rule associated with this new element, using `style.sheet`.
To make

```js
// Log the sheet associated with this new element.
const log = document.getElementById("log")
log.value = `${style.sheet} with rules[0].cssText:\n ${style.sheet.rules[0].cssText}`;
```

#### Result

The result is shown below.
On success, the log shows the `CSSStyleSheet` object applied to the SVG circle.

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLStyleElement.sheet")}}
