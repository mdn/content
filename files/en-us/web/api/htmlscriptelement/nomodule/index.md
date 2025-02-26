---
title: "HTMLScriptElement: noModule property"
short-title: noModule
slug: Web/API/HTMLScriptElement/noModule
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.noModule
---

{{APIRef("HTML DOM")}}

The **`noModule`** property of the {{domxref("HTMLScriptElement")}} interface is a boolean value that indicates whether the script should be executed in browsers that support [ES modules](/en-US/docs/Web/JavaScript/Guide/Modules). Practically, this can be used to serve fallback scripts to older browsers that do not support JavaScript modules.

It reflects the `nomodule` attribute of the {{HTMLElement("script")}} element.

## Value

A boolean, `true` means that the script should not be executed in browsers that support ES modules, `false` otherwise.

## Examples

```html
<script id="el" nomodule>
  // If the browser supports JavaScript modules, the following script will not be executed.
  console.log("The browser does not support JavaScript modules");
</script>
```

```js
const el = document.getElementById("el");
console.log(el.noModule); // Output: true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
