---
title: SVGPointList.appendItem()
slug: Web/API/SVGPointList/appendItem
tags:
  - API
  - Method
  - Reference
  - appendItem
  - SVGPointList
browser-compat: api.SVGPointList.appendItem
---
{{APIRef("SVG")}}

The **`appendItem()`** method of the {{domxref("SVGPointList")}} interface adds a {{domxref("SVGPoint","point")}} to the end of the list.

## Syntax

```js
SVGPointList.appendItem(obj);
```

- `obj`
  - : An {{domxref("SVGPoint")}} object containing the coordinates of the point to be appended.

### Return value

The {{domxref("SVGPoint")}} object that was appended.

### Exceptions

- {{domxref("DOMException")}} `NoModicationAllowedError`
  - : Thrown if the list is read-only.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. A new {{domxref("SVGPoint")}} is created, and appended to the list.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
```

```js
let example = document.getElementById("example");
let svgpoint = document.getElementById("svg").createSVGPoint();
svgpoint.y = 10;
svgpoint.x = 10;
console.log(example.points.appendItem(svgpoint));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
