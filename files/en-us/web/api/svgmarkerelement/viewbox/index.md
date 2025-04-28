---
title: "SVGMarkerElement: viewBox property"
short-title: viewBox
slug: Web/API/SVGMarkerElement/viewBox
page-type: web-api-instance-property
browser-compat: api.SVGMarkerElement.viewBox
---

{{APIRef("SVG")}}

The **`viewBox`** read-only property of the {{domxref("SVGMarkerElement")}} interface returns an {{domxref("SVGAnimatedRect")}} object which contains the values set by the {{SVGattr("viewBox")}} attribute on the {{SVGElement("marker")}}.

## Value

An {{domxref("SVGAnimatedRect")}} object. The `baseVal` property of this object returns an {{domxref("SVGRect")}} object, from which can be returned the `x` and `y` co-ordinates, plus the `width` and `height` of the {{SVGElement("marker")}} {{SVGattr("viewBox")}} attribute.

## Examples

This example demonstrates how to return the value of the `width` set for the {{SVGattr("viewBox")}} attribute of {{SVGElement("marker")}}.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      viewBox="xMidYMid meet"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
const marker = document.getElementById("arrow");
console.log(marker.viewBox.baseVal.width); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
