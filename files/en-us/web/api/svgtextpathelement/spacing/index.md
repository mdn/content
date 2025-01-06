---
title: "SVGTextPathElement: spacing property"
short-title: spacing
slug: Web/API/SVGTextPathElement/spacing
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.spacing
---

{{APIRef("SVG")}}

The **`spacing`** read-only property of the {{domxref("SVGTextPathElement")}} interface reflects the {{SVGAttr("spacing")}} attribute of the given {{SVGElement("textPath")}} element. It takes one of the [`TEXTPATH_SPACINGTYPE_*` constants](/en-US/docs/Web/API/SVGTextPathElement#spacing_types) defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `spacing` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" spacing="auto">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the spacing property
console.log(textPath.spacing.baseVal); // Output: 1 (TEXTPATH_SPACINGTYPE_AUTO)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPathElement.method")}}
- [`SVGTextPathElement` spacing types](/en-US/docs/Web/API/SVGTextPathElement#spacing_types)
