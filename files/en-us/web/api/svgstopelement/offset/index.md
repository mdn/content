---
title: "SVGStopElement: offset property"
short-title: offset
slug: Web/API/SVGStopElement/offset
page-type: web-api-instance-property
browser-compat: api.SVGStopElement.offset
---

{{APIRef("SVG")}}

The **`offset`** read-only property of the {{domxref("SVGStopElement")}} interface reflects the {{SVGAttr("offset")}} attribute of the given {{SVGElement("stop")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `offset` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)" />
</svg>
```

```js
const stopElement = document.querySelector("stop");

// Access the offset property
console.log(stopElement.offset.baseVal); // Output: 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
