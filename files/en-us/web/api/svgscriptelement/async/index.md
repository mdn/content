---
title: "SVGScriptElement: async property"
short-title: async
slug: Web/API/SVGScriptElement/async
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.async
---

{{APIRef("SVG")}}

The **`async`** property of the {{domxref("SVGScriptElement")}} interface is a boolean value that controls how the script should be executed. It reflects the {{SVGAttr("async")}} attribute of the given {{SVGElement("script")}} element. When set to `true`, the external script is fetched in parallel to parsing the SVG document, and the script is evaluated as soon as it becomes available.

## Value

A boolean.

## Examples

### Accessing the `async` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" async></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the async property
console.log(scriptElement.async); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.async")}}
