---
title: "SVGFEDisplacementMapElement: in2 property"
short-title: in2
slug: Web/API/SVGFEDisplacementMapElement/in2
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.in2
---

{{APIRef("SVG")}}

The **`in2`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface reflects the {{SVGAttr("in2")}} attribute of the given {{SVGElement("feDisplacementMap")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feDisplacementMap")}} elements are defined in a filter, each with a different `in2` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- First Displacement Map -->
      <feDisplacementMap in="SourceGraphic" in2="BackgroundImage" scale="20">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>

      <!-- Second Displacement Map -->
      <feDisplacementMap in="SourceGraphic" in2="BackgroundImage" scale="30">
        <feFuncR type="table" tableValues="0.5 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" style="fill:blue;" filter="url(#filter1)" />
</svg>
```

We can access the `in2` attribute:

```js
const displacementMaps = document.querySelectorAll("feDisplacementMap");

console.log(displacementMaps[0].getAttribute("in2")); // Output: "BackgroundImage"
console.log(displacementMaps[1].getAttribute("in2")); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
