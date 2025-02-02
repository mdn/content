---
title: "SVGFilterElement: filterUnits property"
short-title: filterUnits
slug: Web/API/SVGFilterElement/filterUnits
page-type: web-api-instance-property
browser-compat: api.SVGFilterElement.filterUnits
---

{{APIRef("SVG")}}

The **`filterUnits`** read-only property of the {{domxref("SVGFilterElement")}} interface reflects the {{SVGAttr("filterUnits")}} attribute of the given {{SVGElement("filter")}} element. It takes one of the `SVG_UNIT_TYPE_*` constants defined in {{domxref("SVGUnitTypes")}}.

## Value

An {{domxref("SVGAnimatedEnumeration")}}.

## Examples

### Accessing the `filterUnits` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter
      id="myFilter"
      filterUnits="userSpaceOnUse"
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

// Access the filterUnits property
console.log(filterElement.filterUnits.baseVal); // Output: 1 (SVG_UNIT_TYPE_USERSPACEONUSE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFilterElement.primitiveUnits")}}
- {{domxref("SVGUnitTypes")}}
- [SVG filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes)
