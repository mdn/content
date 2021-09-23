---
title: SVGPointList.initialize()
slug: Web/API/SVGPointList/initialize
tags:
  - API
  - Method
  - Reference
  - initialize
  - SVGPointList
browser-compat: api.SVGPointList.initialize
---
{{APIRef("SVG")}}

The **`initialize()`** method of the {{domxref("SVGPointList")}} interface clears the list then adds a single new {{domxref("SVGPoint")}} object to the list.

## Syntax

```js
SVGPointList.initialize(obj);
```

### Parameters

- `obj`
  - : An {{domxref("SVGPoint")}} object containing the coordinates of the point to be added when the list is initialized.

### Return value

The added {{domxref("SVGPoint")}} object.

### Exceptions

- {{domxref("DOMException")}} `NoModicationAllowedError`
  - : Thrown if the list is read-only.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. Returning {{domxref("SVGPointList.length")}} gives the value `5`. After calling `initialize()`, returning {{domxref("SVGPointList.length")}} gives the value `1`.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
```

```js
let example = document.getElementById("example");
console.log(example.points.length) //5;
let svgpoint = document.getElementById("svg").createSVGPoint();
example.points.initialize(svgpoint);
console.log(example.points.length); //1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
