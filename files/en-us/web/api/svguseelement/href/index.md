---
title: "SVGUseElement: href property"
short-title: href
slug: Web/API/SVGUseElement/href
page-type: web-api-instance-property
browser-compat: api.SVGUseElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGUseElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use href="#circle1" x="50" y="50" />
  <use href="#circle2" x="100" y="50" />
</svg>
```

We can access the `href` attribute of the {{SVGElement("use")}} elements:

```js
const uses = document.querySelectorAll("use");
console.log(uses[0].href.baseVal); // output: "#circle1"
console.log(uses[1].href.baseVal); // output: "#circle2"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
