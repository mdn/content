---
title: "SVGFEDisplacementMapElement: xChannelSelector property"
short-title: xChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/xChannelSelector
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.xChannelSelector
---

{{APIRef("SVG")}}

The **`xChannelSelector`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface reflects the {{SVGAttr("xChannelSelector")}} attribute of the given {{SVGElement("feDisplacementMap")}} element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `xChannelSelector` attribute

In this example, the {{SVGElement("feDisplacementMap")}} element defined in the {{SVGElement("filter")}} includes a `xChannelSelector` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with xChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" xChannelSelector="R">
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
    filter="url(#displacementFilter)" />
</svg>
```

We can access the `xChannelSelector` attribute and get its value:

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.xChannelSelector.baseVal); // Output: 1 (SVG_CHANNEL_R)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
