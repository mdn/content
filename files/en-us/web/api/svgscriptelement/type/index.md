---
title: "SVGScriptElement: type property"
short-title: type
slug: Web/API/SVGScriptElement/type
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.type
---

{{APIRef("SVG")}}

The **`type`** read-only property of the {{domxref("SVGScriptElement")}} interface reflects the {{SVGAttr("type")}} attribute of the given {{SVGElement("script")}} element.

## Value

An string.

## Examples

### Accessing the `type` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" type="application/javascript"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the type property
console.log(scriptElement.type); // Output: "application/javascript"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
