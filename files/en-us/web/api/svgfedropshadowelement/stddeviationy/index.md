---
title: "SVGFEDropShadowElement: stdDeviationY property"
short-title: stdDeviationY
slug: Web/API/SVGFEDropShadowElement/stdDeviationY
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.stdDeviationY
---

{{APIRef("SVG")}}

The **`stdDeviationY`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface reflects the (possibly automatically computed) Y component of the {{SVGAttr("stdDeviation")}} attribute of the given {{SVGElement("feDropShadow")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `stdDeviationY` value

In this example, we retrieve the vertical standard deviation for the blur operation of the `<feDropShadow>` by using the `stdDeviationY` read-only property of the `SVGFEDropShadowElement` interface.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with stdDeviationY property set to 10 for vertical blur -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5 10"
        flood-color="gray" />
    </filter>
  </defs>

  <!-- Rectangle with a gray shadow -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.stdDeviationY.baseVal); // Output: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
