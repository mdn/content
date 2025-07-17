---
title: "SVGElement: ownerSVGElement property"
short-title: ownerSVGElement
slug: Web/API/SVGElement/ownerSVGElement
page-type: web-api-instance-property
browser-compat: api.SVGElement.ownerSVGElement
---

{{APIRef("SVG")}}

The **`ownerSVGElement`** property of the {{DOMxRef("SVGElement")}} interface reflects the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.

## Value

An {{DOMxRef("SVGSVGElement")}}.

## Examples

### Checking the owner `<svg>` element

```html
<svg id="outerSvg" xmlns="http://www.w3.org/2000/svg">
  <g id="group1">
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
  </g>
</svg>
```

```js
const circle = document.getElementById("circle1");
const ownerSVG = circle.ownerSVGElement;

if (ownerSVG) {
  console.log(`The circle's owner <svg> has the ID: ${ownerSVG.id}`);
} else {
  console.log("This element is the outermost <svg>.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
