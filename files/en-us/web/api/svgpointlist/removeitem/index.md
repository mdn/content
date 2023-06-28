---
title: "SVGPointList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGPointList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGPointList.removeItem
---

{{APIRef("SVG")}}

The **`removeItem()`** method of the {{domxref("SVGPointList")}} interface removes a {{domxref("SVGPoint","point")}} from the list.

## Syntax

```js-nolint
removeItem(index)
```

### Parameters

- `index`
  - : The index of the item to remove.

### Return value

The removed {{domxref("SVGPoint")}} object.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the list is read-only.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index passed in is greater than the number of items in the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. The item at index `2` is removed.

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
let example = document.getElementById("example");
console.log(example.points.removeItem(2));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
