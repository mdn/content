---
title: SVGPointList.replaceItem()
slug: Web/API/SVGPointList/replaceItem
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - replaceItem
  - SVGPointList
browser-compat: api.SVGPointList.replaceItem
---
{{APIRef("SVG")}}

The **`replaceItem()`** method of the {{domxref("SVGPointList")}} interface replaces a {{domxref("SVGPoint","point")}} in the list.

## Syntax

```js
replaceItem(obj, index)
```

### Parameters

- `obj`
  - : An {{domxref("SVGPoint","point")}} object containing the coordinates of the point to be inserted.
- `index`
  - : The index of the item to replace.

### Return value

The new {{domxref("SVGPoint")}} object.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index passed in is greater than the number of items in the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. A new {{domxref("SVGPoint")}} is created, then replaces the point at index `1` (the second item in the list).

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
console.log(example.points.replaceItem(svgpoint,1));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
