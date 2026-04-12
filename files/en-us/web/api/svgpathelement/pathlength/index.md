---
title: "SVGPathElement: pathLength property"
short-title: pathLength
slug: Web/API/SVGPathElement/pathLength
page-type: web-api-instance-property
browser-compat: api.SVGPathElement.pathLength
---

{{APIRef("SVG")}}

The **`pathLength`** read-only property of the {{domxref("SVGPathElement")}} interface reflects the {{SVGAttr("pathLength")}} attribute of the given {{SVGelement("path")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}}.

## Examples

### Accessing the `pathLength` Property

```html
<svg width="200" height="100">
  <path id="myPath" d="M 0,30 h100" pathLength="50" />
</svg>
```

```js
const pathElement = document.getElementById("myPath");

// Access the pathLength property
const animatedNumber = pathElement.pathLength;

// The base value of the pathLength attribute
console.log(animatedNumber.baseVal); // Output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGGeometryElement.pathLength")}}
- {{SVGAttr("pathLength")}}
- {{domxref("SVGAnimatedLength")}}
