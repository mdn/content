---
title: "SVGPointList: replaceItem() method"
short-title: replaceItem()
slug: Web/API/SVGPointList/replaceItem
page-type: web-api-instance-method
browser-compat: api.SVGPointList.replaceItem
---

{{APIRef("SVG")}}

The **`replaceItem()`** method of the {{domxref("SVGPointList")}} interface replaces a {{domxref("DOMPoint")}} in the list.

## Syntax

```js-nolint
replaceItem(obj, index)
```

### Parameters

- `obj`
  - : A {{domxref("DOMPoint")}} object containing the coordinates of the point to be inserted.
- `index`
  - : The index of the item to replace.

### Return value

The new {{domxref("DOMPoint")}} object.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index passed in is greater than the number of items in the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. A new {{domxref("DOMPoint")}} is created, then replaces the point at index `1` (the second item in the list).

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
console.log(example.points.replaceItem(point, 1));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
