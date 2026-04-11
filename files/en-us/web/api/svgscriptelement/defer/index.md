---
title: "SVGScriptElement: defer property"
short-title: defer
slug: Web/API/SVGScriptElement/defer
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGScriptElement.defer
---

{{SeeCompatTable}}{{APIRef("SVG")}}

The **`defer`** property of the {{domxref("SVGScriptElement")}} interface is a boolean value that controls how the script should be executed. For classic scripts, if the `defer` property is set to `true`, the external script will be executed after the document has been parsed, but before firing the {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), the `defer` property has no effect.

It reflects the `defer` attribute of the {{SVGElement("script")}} element.

## Value

A boolean.

## Examples

### Accessing the `defer` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js" defer></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");
console.log(scriptElement.defer); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGScriptElement.async")}}
- {{domxref("HTMLScriptElement.defer")}}
