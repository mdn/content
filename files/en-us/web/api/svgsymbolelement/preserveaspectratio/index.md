---
title: "SVGSymbolElement: preserveAspectRatio property"
short-title: preserveAspectRatio
slug: Web/API/SVGSymbolElement/preserveAspectRatio
page-type: web-api-instance-property
browser-compat: api.SVGSymbolElement.preserveAspectRatio
---

{{APIRef("SVG")}}

The **`preserveAspectRatio`** read-only property of the {{domxref("SVGSymbolElement")}} interface reflects the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("symbol")}} element. It defines how the `symbol`'s content should be scaled to fit the given space, preserving its aspect ratio.

## Value

An {{domxref("SVGAnimatedPreserveAspectRatio")}} object.

## Examples

Given the following SVG, we can use the `preserveAspectRatio` property to retrieve the scaling behavior for the `symbol` element:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol
      id="exampleSymbol"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin meet">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

We can access the `preserveAspectRatio` attribute:

```js
const symbolElement = document.getElementById("exampleSymbol");

// Access the preserveAspectRatio property
const aspectRatio = symbolElement.preserveAspectRatio.baseVal;

console.log(aspectRatio.align); // Output: 2 (xMinYMin)
console.log(aspectRatio.meetOrSlice); // Output: 1 (meet)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("preserveAspectRatio")}}
