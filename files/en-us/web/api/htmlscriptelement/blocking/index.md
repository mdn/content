---
title: "HTMLScriptElement: blocking property"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.blocking
---

{{APIRef("HTML DOM")}}

The **`blocking`** property of the {{domxref("HTMLScriptElement")}} interface is a string indicating that certain operations should be blocked on the fetching of the script.

It reflects the `blocking` attribute of the {{HTMLElement("script")}} element.

## Value

A string. Must be a space-separated list of blocking tokens listed below indicating the operations that are to be blocked:

- `render`
  - : The rendering of content on the screen is blocked.

## Examples

```html
<script id="el" type="text/javascript" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: "render"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
