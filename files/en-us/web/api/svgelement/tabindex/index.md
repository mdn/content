---
title: "SVGElement: tabIndex property"
short-title: tabIndex
slug: Web/API/SVGElement/tabIndex
page-type: web-api-instance-property
browser-compat: api.SVGElement.tabIndex
---

{{APIRef("SVG")}}

The **`tabIndex`** property of the {{DOMxRef("SVGElement")}} interface represents the tab order of the current SVG element.

Tab order is as follows:

1. Elements with a positive `tabIndex`. Elements that have identical
   `tabIndex` values should be navigated in the order they appear. Navigation
   proceeds from the lowest `tabIndex` to the highest `tabIndex`.
2. Elements that do not support the `tabIndex` attribute or support it and
   assign `tabIndex` to `0`, in the order they appear.

Elements that are disabled do not participate in the tabbing order.

Values don't need to be sequential, nor must they begin with any particular value. They
may even be negative, though each browser trims very large values.

## Value

An integer.

## Examples

### Setting the `tabIndex` property

```html
<svg id="svg1" tabindex="2" xmlns="http://www.w3.org/2000/svg" role="img">
  <circle cx="50" cy="50" r="40" fill="blue"></circle>
</svg>
<svg id="svg2" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect width="100" height="100" fill="green"></rect>
</svg>
```

```js
const svg1 = document.getElementById("svg1");
const svg2 = document.getElementById("svg2");

// Access and modify the tabIndex
console.log(svg1.tabIndex); // 2
svg2.tabIndex = 1; // Add svg2 to the tab order before svg1

// Programmatically focus on an element with negative tabIndex
svg1.tabIndex = -1;
svg1.focus(); // Works, even though it is not in the tabbing order
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.tabIndex")}} a similar method for HTML elements.
- [Accessibility of keyboard-navigable JavaScript widgets](/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- The HTML
  [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)
  global attribute.
