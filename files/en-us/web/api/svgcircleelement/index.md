---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
page-type: web-api-interface
browser-compat: api.SVGCircleElement
---

{{APIRef("SVG")}}

The **`SVGCircleElement`** interface is an interface for the {{SVGElement("circle")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGCircleElement.cx")}} {{ReadOnlyInline}}
  - : This property defines the x-coordinate of the center of the {{SVGElement("circle")}} element. It is denoted by the {{SVGAttr("cx")}} attribute of the element.
- {{domxref("SVGCircleElement.cy")}} {{ReadOnlyInline}}
  - : This property defines the y-coordinate of the center of the `<circle>` element. It is denoted by the {{SVGAttr("cy")}} attribute of the element.
- {{domxref("SVGCircleElement.r")}} {{ReadOnlyInline}}
  - : This property defines the radius of the `<circle>` element. It is denoted by the {{SVGAttr("r")}} of the element.

## Instance methods

_Inherits methods from its parent interface, {{domxref("SVGGeometryElement")}}._

## Examples

### Resizing a circle

In this example we draw a circle and randomly increase or decrease its radius when you click it.

#### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="gold"
    id="circle"
    onclick="clickCircle();" />
</svg>
```

#### JavaScript

```js
function clickCircle() {
  const circle = document.getElementById("circle");
  // Randomly determine if the circle radius will increase or decrease
  const change = Math.random() > 0.5 ? 10 : -10;
  // Clamp the circle radius to a minimum of 10 and a maximum of 250,
  // so it won't disappear or get bigger than the viewport
  const newValue = Math.min(Math.max(circle.r.baseVal.value + change, 10), 250);
  circle.setAttribute("r", newValue);
}
```

{{EmbedLiveSample('Resizing a circle', '', '300')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("circle")}} SVG element
