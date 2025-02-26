---
title: "SVGSymbolElement: viewBox property"
short-title: viewBox
slug: Web/API/SVGSymbolElement/viewBox
page-type: web-api-instance-property
browser-compat: api.SVGSymbolElement.viewBox
---

{{APIRef("SVG")}}

The **`viewBox`** read-only property of the {{domxref("SVGSymbolElement")}} interface reflects the {{SVGAttr("viewBox")}} attribute of the given {{SVGElement("symbol")}} element.

## Value

An {{domxref("SVGAnimatedRect")}} object.

## Examples

### Accessing the `viewBox` Property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol id="exampleSymbol" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

```js
const symbolElement = document.getElementById("exampleSymbol");

// Access the viewBox property
const viewBox = symbolElement.viewBox.baseVal;

console.log(viewBox.x); // Output: 0
console.log(viewBox.y); // Output: 0
console.log(viewBox.width); // Output: 100
console.log(viewBox.height); // Output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
