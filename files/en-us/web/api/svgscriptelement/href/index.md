---
title: "SVGScriptElement: href property"
short-title: href
slug: Web/API/SVGScriptElement/href
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGScriptElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("script")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the href property
console.log(scriptElement.href.baseVal); // Output: "script.js"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
