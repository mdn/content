---
title: "HTMLScriptElement: async property"
short-title: async
slug: Web/API/HTMLScriptElement/async
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.async
---

{{APIRef("HTML DOM")}}

The **`async`** property of the {{domxref("HTMLScriptElement")}} interface is a boolean value that controls how the script should be executed. For classic scripts, if the `async` property is set to `true`, the external script will be fetched in parallel to parsing and evaluated as soon as it is available. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), if the `async` property is set to `true`, the script and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.

It reflects the `async` attribute of the {{HTMLElement("script")}} element.

## Value

A boolean.

## Examples

```html
<script id="el" src="/example.js" async></script>
```

```js
const el = document.getElementById("el");
console.log(el.async); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.defer")}}
