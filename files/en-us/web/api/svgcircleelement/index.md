---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
tags:
  - API
  - DOM
  - Interface
  - JavaScript
  - SVG
  - SVGCircleElement
browser-compat: api.SVGCircleElement
---
{{APIRef("SVG")}}

The **`SVGCircleElement`** interface is an interface for the {{SVGElement("circle")}} element.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGCircleElement.cx")}} {{ReadOnlyInline}}
  - : This property defines the x-coordinate of the center of the {{SVGElement("circle")}} element. It is denoted by the {{SVGAttr("cx")}} attribute of the element.
- {{domxref("SVGCircleElement.cy")}} {{ReadOnlyInline}}
  - : This property defines the y-coordinate of the center of the `<circle>` element. It is denoted by the {{SVGAttr("cy")}} attribute of the element.
- {{domxref("SVGCircleElement.r")}} {{ReadOnlyInline}}
  - : This property defines the radius of the `<circle>` element. It is denoted by the {{SVGAttr("r")}} of the element.

## Methods

_This interface has no methods but inherits methods from its parent, {{domxref("SVGGeometryElement")}}._

## Example

### SVG content

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="250" height="250">
  <circle cx="100" cy="100" r="50" fill="gold" id="circle"
      onclick="clickCircle();"/>
</svg>
```

### JavaScript content

This function `clickCircle()` is called when the circle is clicked. It randomly increases or decreases the radius of the circle element.

```js
function clickCircle() {
  var circle = document.getElementById("circle");
  // Randomly determine if the circle radius will increase or decrease
  var change = Math.random() > 0.5 ? 10 : -10;
  // Clamp the circle radius to a minimum of 10 and a maximum of 250,
  // so it won't disappear or get bigger than the viewport
  var newValue = Math.min(Math.max(circle.r.baseVal.value + change, 10), 250);
  circle.setAttribute("r", newValue);
}
```

_Click on the circle._
{{EmbedLiveSample('Example', '250', '250', '', 'Web/API/SVGCircleElement')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("circle")}} SVG element
