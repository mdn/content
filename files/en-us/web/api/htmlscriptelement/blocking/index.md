---
title: "HTMLScriptElement: blocking property"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.blocking
---

{{APIRef("HTML DOM")}}

The read-only **`blocking`** property of the {{domxref("HTMLScriptElement")}} interface returns a live {{domxref("DOMTokenList")}} object containing the operations that should be blocked, such as rendering.

It reflects the {{HTMLElement("script")}} element's [`blocking`](/en-US/docs/Web/HTML/Reference/Elements/script#blocking) content attribute.

## Value

A live {{domxref("DOMTokenList")}} object.

## Description

When the list contains `render` and the script is in the document's `<head>`, rendering is blocked until the script has been fetched and executed.

Although the `blocking` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `blocking` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property.
You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

### Reading the `blocking` property

```html
<script id="el" src="app.js" async blocking="render"></script>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: DOMTokenList ["render"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.blocking")}}
- {{domxref("HTMLStyleElement.blocking")}}
