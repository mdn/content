---
title: "SVGMPathElement: href property"
short-title: href
slug: Web/API/SVGMPathElement/href
page-type: web-api-instance-property
browser-compat: api.SVGMPathElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGMPathElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("mpath")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <path
    id="motionPath"
    d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    fill="transparent"
    stroke="black" />

  <circle id="circle" cx="0" cy="0" r="5" fill="blue">
    <animateMotion dur="4s" repeatCount="indefinite">
      <mpath href="#motionPath"></mpath>
    </animateMotion>
  </circle>
</svg>
```

```js
const mpathElement = document.querySelector("mpath");

// Access the href property
console.log(mpathElement.href.baseVal); // Output: "#motionPath"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
