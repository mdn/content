---
title: "SVGFEDisplacementMapElement: scale property"
short-title: scale
slug: Web/API/SVGFEDisplacementMapElement/scale
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.scale
---

{{APIRef("SVG")}}

The **`scale`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface reflects the {{SVGAttr("scale")}} attribute of the given {{SVGElement("feDisplacementMap")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `scale` Property

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
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
</svg>
```

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.scale.baseVal); // Output: 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
