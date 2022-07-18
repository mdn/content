---
title: SVGPointList.getItem()
slug: Web/API/SVGPointList/getItem
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getItem
  - SVGPointList
browser-compat: api.SVGPointList.getItem
---
{{APIRef("SVG")}}

The **`getItem()`** method of the {{domxref("SVGPointList")}} interface gets one item from the list at the specified index.

## Syntax

```js
getItem(index)
```

### Parameters

- `index`
  - : The index of the item to return.

### Return value

An {{domxref("SVGPoint")}} object.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index passed in is greater than the number of items in the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. The {{domxref("SVGPoint")}} at index `0`.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
```

```js
let example = document.getElementById("example");
console.log(example.points.getItem(0));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
