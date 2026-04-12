---
title: "SVGPointList: insertItemBefore() method"
short-title: insertItemBefore()
slug: Web/API/SVGPointList/insertItemBefore
page-type: web-api-instance-method
browser-compat: api.SVGPointList.insertItemBefore
---

{{APIRef("SVG")}}

The **`insertItemBefore()`** method of the {{domxref("SVGPointList")}} interface inserts a {{domxref("DOMPoint")}} before another item in the list.

## Syntax

```js-nolint
insertItemBefore(obj, index)
```

### Parameters

- `obj`
  - : A {{domxref("DOMPoint")}} object containing the coordinates of the point to be inserted.
- `index`
  - : The index of the item the object should be inserted before. If the index passed in is greater than the length of the list, then index will be set to the list length and the item inserted before the last item in the list.

### Return value

The {{domxref("DOMPoint")}} object that was inserted.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. A new {{domxref("DOMPoint")}} is created, and inserted before the point at index `2`.

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
console.log(example.points.insertItemBefore(point, 2));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
