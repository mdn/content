---
title: "SVGPointList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGPointList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGPointList.appendItem
---

{{APIRef("SVG")}}

The **`appendItem()`** method of the {{domxref("SVGPointList")}} interface adds a {{domxref("DOMPoint")}} to the end of the list.

## Syntax

```js-nolint
appendItem(obj)
```

### Parameters

- `obj`
  - : A {{domxref("DOMPoint")}} object containing the coordinates of the point to be appended.

### Return value

The {{domxref("DOMPoint")}} object that was appended.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. A new {{domxref("DOMPoint")}} is created, and appended to the list.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
const example = document.getElementById("example");
const point = document.getElementById("svg").createSVGPoint();
point.y = 10;
point.x = 10;
console.log(example.points.appendItem(point));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
