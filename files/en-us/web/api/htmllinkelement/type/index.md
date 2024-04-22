---
title: "HTMLLinkElement: type property"
short-title: type
slug: Web/API/HTMLLinkElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.type
---

{{APIRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLLinkElement")}} interface is a string that reflects the {{glossary("MIME type")}} of the linked resource.

It reflects the `type` attribute of the {{HTMLElement("link")}} element.

## Value

A string, which must be a valid MIME type string.

## Examples

```html
<link
  id="el"
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "image/png"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
