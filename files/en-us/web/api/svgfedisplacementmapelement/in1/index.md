---
title: "SVGFEDisplacementMapElement: in1 property"
short-title: in1
slug: Web/API/SVGFEDisplacementMapElement/in1
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.in1
---

{{APIRef("SVG")}}

The **`in1`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface reflects the {{SVGAttr("in")}} attribute of the given {{SVGElement("feDisplacementMap")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

In this example, two {{SVGElement("feDisplacementMap")}} elements are defined in a filter, each with a different `in` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- First Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>

      <!-- Second Displacement Map -->
      <feDisplacementMap in="BackgroundImage" scale="30">
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

We can access the `in` attribute:

```js
const displacementMaps = document.querySelectorAll("feDisplacementMap");

console.log(displacementMaps[0].getAttribute("in")); // Output: "SourceGraphic"
console.log(displacementMaps[1].getAttribute("in")); // Output: "BackgroundImage"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedString")}}
