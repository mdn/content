---
title: "SVGTextPathElement: href property"
short-title: href
slug: Web/API/SVGTextPathElement/href
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGTextPathElement")}} interface reflects the {{SVGAttr("href")}} attribute (or the deprecated {{SVGAttr("xlink:href")}} attribute) of the given {{SVGElement("textPath")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the href property
console.log(textPath.href.baseVal); // Output: "#myPath"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("href")}} attribute
