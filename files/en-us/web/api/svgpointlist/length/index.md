---
title: SVGPointList.length
slug: Web/API/SVGPointList/length
tags:
  - API
  - Property
  - Reference
  - length
  - SVGPointList
browser-compat: api.SVGPointList.length
---
{{APIRef("SVG")}}

The **`length`** read-only property of the {{domxref("SVGPointList")}} interface returns the number of items in the list.

## Syntax

```js
let length = SVGPointList.length;
```

### Value

The number of items in the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. The `length` property returns `5`.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline id="example" stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
```

```js
let example = document.getElementById("example");
console.log(example.points.length); // 5
```

## Specifications

{{Specifications}}

{{Compat}}
