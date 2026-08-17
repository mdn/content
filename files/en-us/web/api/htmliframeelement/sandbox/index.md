---
title: "HTMLIFrameElement: sandbox property"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.sandbox
---

{{APIRef("HTML DOM")}}

The read-only **`sandbox`** property of the {{domxref("HTMLIFrameElement")}} returns a live {{domxref("DOMTokenList")}} object indicating extra restrictions on the behavior of the nested content. It reflects the {{HTMLElement("iframe")}} element's [`sandbox`](/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `sandbox` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `sandbox` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

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
