---
title: "Document: links property"
short-title: links
slug: Web/API/Document/links
page-type: web-api-instance-property
browser-compat: api.Document.links
---

{{ APIRef("DOM") }}

The **`links`** read-only property of the {{domxref("Document")}} interface returns a collection of all {{HTMLElement("area")}} elements and {{HTMLElement("a")}} elements in a document with a value for the [href](/en-US/docs/Web/HTML/Element/a#href) attribute.

## Value

An {{domxref("HTMLCollection")}}.

## Examples

```js
for (const link of document.links) {
  const linkHref = document.createTextNode(link.href);
  const lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
