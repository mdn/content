---
title: "SVGFEDropShadowElement: dx property"
short-title: dx
slug: Web/API/SVGFEDropShadowElement/dx
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.dx
---

{{APIRef("SVG")}}

The **`dx`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface reflects the {{SVGAttr("dx")}} attribute of the given {{SVGElement("feDropShadow")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `dx` value

In this example, we retrieve the horizontal shift of the `<feDropShadow>` by using the `dx` read-only property of the `SVGFEDropShadowElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with dx property set to 10 -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
    </filter>
  </defs>

  <!-- Rectangle with a red shadow -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#drop-shadow-filter)" />

  <!-- Circle with a red shadow -->
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.dx.baseVal); // Output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
