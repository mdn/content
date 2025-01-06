---
title: "SVGFilterElement: href property"
short-title: href
slug: Web/API/SVGFilterElement/href
page-type: web-api-instance-property
browser-compat: api.SVGFilterElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGFilterElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("filter")}} element.

## Value

An {{domxref("SVGAnimatedString")}}.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="myFilter" x="0" y="0" width="200%" height="200%">
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

// Access the href property
console.log(filterElement.href.baseVal); // Output: "#myFilter"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("href")}} attribute
