---
title: "SVGFilterElement: primitiveUnits property"
short-title: primitiveUnits
slug: Web/API/SVGFilterElement/primitiveUnits
page-type: web-api-instance-property
browser-compat: api.SVGFilterElement.primitiveUnits
---

{{APIRef("SVG")}}

The **`primitiveUnits`** read-only property of the {{domxref("SVGFilterElement")}} interface reflects the {{SVGAttr("primitiveUnits")}} attribute of the given {{SVGElement("filter")}} element. It takes one of the `SVG_UNIT_TYPE_*` constants defined in {{domxref("SVGUnitTypes")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

### Accessing the `primitiveUnits` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter
      id="myFilter"
      primitiveUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200%"
      height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blurred" />
    </filter>
  </defs>
  <rect
    width="200"
    height="200"
    stroke="green"
    stroke-width="10"
    fill="lime"
    filter="url(#myFilter)" />
</svg>
```

```js
const filterElement = document.querySelector("filter");

// Access the primitiveUnits property
console.log(filterElement.primitiveUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFilterElement.filterUnits")}}
