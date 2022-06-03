---
title: SVGRectElement
slug: Web/API/SVGRectElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGRectElement
---
{{APIRef("SVG")}}

The `SVGRectElement` interface provides access to the properties of {{SVGElement("rect")}} elements, as well as methods to manipulate them.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parent, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.y")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.width")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.height")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.rx")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("rx")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.ry")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("ry")}} attribute of the given {{SVGElement("rect")}} element.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent, {{domxref("SVGGeometryElement")}}._

## Examples

### Changing the color of an SVG rectangle

This example sets the fill color of an `SVGRectElement` to a random value whenever the user clicks it.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" id="myrect"
      style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
  <text x="60" y="40" fill="white" font-size="40">Click Me</text>
</svg>
```

#### JavaScript

```js
const myRect = document.querySelector("#myrect");

myRect.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  myRect.style.fill = `rgb(${r}, ${g}, ${b})`;
})
```

#### Result

{{EmbedLiveSample('Changing the color of an SVG rectangle')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("rect")}}
