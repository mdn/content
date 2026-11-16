---
title: "SVGTextPathElement: startOffset property"
short-title: startOffset
slug: Web/API/SVGTextPathElement/startOffset
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.startOffset
---

{{APIRef("SVG")}}

The **`startOffset`** read-only property of the {{domxref("SVGTextPathElement")}} interface reflects the X component of the {{SVGAttr("startOffset")}} attribute of the given {{SVGElement("textPath")}}, which defines an offset from the start of the path for the initial current text position along the path after converting the path to the `<textPath>` element's coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}} object.

## Examples

### Accessing the `startOffset` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" startOffset="25%">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the startOffset property
console.log(textPath.startOffset.baseVal.valueAsString); // Output: "25%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("startOffset")}} attribute
