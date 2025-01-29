---
title: "SVGFEDisplacementMapElement: yChannelSelector property"
short-title: yChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/yChannelSelector
page-type: web-api-instance-property
browser-compat: api.SVGFEDisplacementMapElement.yChannelSelector
---

{{APIRef("SVG")}}

The **`yChannelSelector`** read-only property of the {{domxref("SVGFEDisplacementMapElement")}} interface reflects the {{SVGAttr("yChannelSelector")}} attribute of the given {{SVGElement("feDisplacementMap")}} element. It takes one of the `SVG_CHANNEL_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `yChannelSelector` attribute

In this example, the {{SVGElement("feDisplacementMap")}} element defined in the {{SVGElement("filter")}} includes a `yChannelSelector` attribute.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with yChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" yChannelSelector="G">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:green;"
    filter="url(#displacementFilter)" />
</svg>
```

We can access the `yChannelSelector` attribute and get its value:

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.yChannelSelector.baseVal); // Output: 2 (SVG_CHANNEL_G)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}
