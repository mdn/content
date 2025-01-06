---
title: "SVGElement: viewportElement property"
short-title: viewportElement
slug: Web/API/SVGElement/viewportElement
page-type: web-api-instance-property
browser-compat: api.SVGElement.viewportElement
---

{{APIRef("SVG")}}

The **`viewportElement`** property of the {{DOMxRef("SVGElement")}} interface represents the `SVGElement` which established the current viewport. Often the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.

## Value

An {{DOMxRef("SVGElement")}}.

## Examples

### Retrieving the `viewportElement`

```html
<svg id="outerSvg" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <svg id="innerSvg" x="10" y="10" width="100" height="100">
    <circle id="circle" cx="50" cy="50" r="40" fill="blue"></circle>
  </svg>
</svg>
```

```js
const circle = document.getElementById("circle");
const innerSvg = document.getElementById("innerSvg");
const outerSvg = document.getElementById("outerSvg");

console.log(circle.viewportElement); // Output: <svg id="innerSvg">...</svg>
console.log(innerSvg.viewportElement); // Output: <svg id="outerSvg">...</svg>
console.log(outerSvg.viewportElement); // Output: null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement.ownerSVGElement")}}: Retrieves the nearest ancestor `<svg>` element for the current SVG element.
