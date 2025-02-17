---
title: "SVGTextPathElement: method property"
short-title: method
slug: Web/API/SVGTextPathElement/method
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.method
---

{{APIRef("SVG")}}

The **`method`** read-only property of the {{domxref("SVGTextPathElement")}} interface reflects the {{SVGAttr("method")}} attribute of the given {{SVGElement("textPath")}} element. It takes one of the [`TEXTPATH_METHODTYPE_*` constants](/en-US/docs/Web/API/SVGTextPathElement#method_types) defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `method` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" method="align">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the method property
console.log(textPath.method.baseVal); // Output: 1 (TEXTPATH_METHODTYPE_ALIGN)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPathElement.spacing")}}
- [`SVGTextPathElement` method types](/en-US/docs/Web/API/SVGTextPathElement#method_types)
