---
title: "SVGFEDropShadowElement: stdDeviationX property"
short-title: stdDeviationX
slug: Web/API/SVGFEDropShadowElement/stdDeviationX
page-type: web-api-instance-property
browser-compat: api.SVGFEDropShadowElement.stdDeviationX
---

{{APIRef("SVG")}}

The **`stdDeviationX`** read-only property of the {{domxref("SVGFEDropShadowElement")}} interface reflects the (possibly automatically computed) X component of the {{SVGAttr("stdDeviation")}} attribute of the given {{SVGElement("feDropShadow")}} element.

## Value

An {{domxref("SVGAnimatedNumber")}} object.

## Examples

### Accessing the `stdDeviationX` value

In this example, we retrieve the horizontal standard deviation for the blur operation of the `<feDropShadow>` by using the `stdDeviationX` read-only property of the `SVGFEDropShadowElement` interface.

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

console.log(dropShadow.stdDeviationX.baseVal); // Output: 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedNumber")}}
