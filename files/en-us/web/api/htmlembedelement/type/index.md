---
title: "HTMLEmbedElement: type property"
short-title: type
slug: Web/API/HTMLEmbedElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLEmbedElement.type
---

{{APIRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLEmbedElement")}} interface returns a string that reflects the `type` attribute of the {{HTMLElement("embed")}} element, indicating the {{glossary("MIME type")}} of the resource. It reflects the {{htmlelement("embed")}} element's [`type`](/en-US/docs/Web/HTML/Element/embed#type) attribute

## Value

A string; the MIME type of the resource.

## Examples

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "video/webp"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLObjectElement.type")}}
- {{domxref("HTMLSourceElement.type")}}
- [Media types found on the web](/en-US/docs/Web/Media/Guides/Formats)
- [Important MIME types for web developers](/en-US/docs/Web/HTTP/MIME_types#important_mime_types_for_web_developers)
