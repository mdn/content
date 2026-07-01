---
title: "HTMLScriptElement: blocking property"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.blocking
---

{{APIRef("HTML DOM")}}

The read-only **`blocking`** property of the {{domxref("HTMLScriptElement")}} returns a live {{domxref("DOMTokenList")}} object containing the operations that should be blocked on the fetching of an external resource. It reflects the {{HTMLElement("script")}} element's [`blocking`](/en-US/docs/Web/HTML/Reference/Elements/script#blocking) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `blocking` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `blocking` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

```html
<script id="el" async blocking="render"></script>
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
