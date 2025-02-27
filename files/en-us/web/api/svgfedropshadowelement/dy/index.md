---
title: "SVGFEDropShadowElement: dy property"
short-title: dy
slug: Web/API/SVGFEDropShadowElement/dy
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.dy
---

{{APIRef("SVG")}}

The **`dy`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface reflects the {{SVGAttr("dy")}} attribute of the given {{SVGElement("feDropShadow")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `dy` value

In this example, we retrieve the vertical shift of the `<feDropShadow>` by using the `dx` read-only property of the `SVGFEDropShadowElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with dy property set to 10 -->
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

console.log(dropShadow.dy.baseVal); // Output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
