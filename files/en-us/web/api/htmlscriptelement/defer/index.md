---
title: "HTMLScriptElement: defer property"
short-title: defer
slug: Web/API/HTMLScriptElement/defer
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.defer
---

{{APIRef("HTML DOM")}}

The **`defer`** property of the {{domxref("HTMLScriptElement")}} interface is a boolean value that controls how the script should be executed. For classic scripts, if the `defer` property is set to `true`, the external script will be executed after the document has been parsed, but before firing {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event. For [module scripts](/en-US/docs/Web/JavaScript/Guide/Modules), the `defer` property has no effect.

It reflects the `defer` attribute of the {{HTMLElement("script")}} element.

## Value

A boolean.

## Examples

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.async")}}
