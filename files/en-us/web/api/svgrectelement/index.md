---
title: SVGRectElement
slug: Web/API/SVGRectElement
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

- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.y")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.width")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.height")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.rx")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("rx")}} attribute of the given {{SVGElement("rect")}} element.
- {{domxref("SVGRectElement.ry")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("ry")}} attribute of the given {{SVGElement("rect")}} element.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent, {{domxref("SVGGeometryElement")}}._

## Example

Here is a simple usage of rect interface. (Changing the color of the rect interface on every click)

### SVG content

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100" id="myrect" onclick="doRectClick()"
      style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
  <text x="60" y="40" fill="white" font-size="40"
      onclick="doRectClick();">Click Me</text>
</svg>
```

### JavaScript content

```js
function doRectClick(){
  var myrect = document.getElementById('myrect');
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')';
}
```

_Click the rect._

{{EmbedLiveSample('Example', '', '', '', 'Web/API/SVGRectElement')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("rect")}}
