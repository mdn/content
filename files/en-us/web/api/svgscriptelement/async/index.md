---
title: "SVGScriptElement: async property"
short-title: async
slug: Web/API/SVGScriptElement/async
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.async
---

{{APIRef("SVG")}}

The **`async`** property of the {{domxref("SVGScriptElement")}} interface is a boolean value that controls how the script should be executed. For classic scripts, if the `async` property is set to `true`, the external script will be fetched in parallel to parsing and evaluated as soon as it is available. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), if the `async` property is set to `true`, the script and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.

It reflects the `async` attribute of the {{SVGElement("script")}} element.

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
console.log(scriptElement.async); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGScriptElement.defer")}}
- {{domxref("HTMLScriptElement.async")}}
