---
title: "SVGTextPathElement: spacing property"
short-title: spacing
slug: Web/API/SVGTextPathElement/spacing
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.spacing
---

{{APIRef("SVG")}}

The **`spacing`** read-only property of the {{domxref("SVGTextPathElement")}} interface represents the spacing between typographic characters that are to be rendered along a path.

Note that the `spacing.baseVal` property reflects the {{SVGAttr("spacing")}} attribute of the given {{SVGElement("textPath")}} element, as an enumerated value.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

The object's `baseVal` and `animVal` properties can get or set the following static property values:

- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN`](/en-US/docs/Web/API/SVGTextPathElement#textpath_spacingtype_unknown) (0)
  - : The type is not one of the predefined types.
- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO`](/en-US/docs/Web/API/SVGTextPathElement#textpath_spacingtype_auto) (1)
  - : Corresponds to the value [`auto`](/en-US/docs/Web/SVG/Reference/Attribute/spacing#auto).
- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT`](/en-US/docs/Web/API/SVGTextPathElement#textpath_spacingtype_exact) (2)
  - : Corresponds to the value [`exact`](/en-US/docs/Web/SVG/Reference/Attribute/spacing#exact).

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
- {{domxref("SVGTextPathElement.side")}}
- [`SVGTextPathElement` spacing types](/en-US/docs/Web/API/SVGTextPathElement#static_properties)
