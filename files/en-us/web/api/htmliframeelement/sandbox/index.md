---
title: "HTMLIFrameElement: sandbox property"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.sandbox
---

{{APIRef("HTML DOM")}}

The **`sandbox`** read-only property of the {{domxref("HTMLIFrameElement")}} interface returns a {{domxref("DOMTokenList")}} indicating extra restrictions on the behavior of the nested content.

It reflects the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

## Value

A {{domxref("DOMTokenList")}}. Each item must be one of the tokens listed in the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

## Examples

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Output: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Output: []
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
