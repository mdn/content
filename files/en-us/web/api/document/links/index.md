---
title: Document.links
slug: Web/API/Document/links
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
browser-compat: api.Document.links
---
{{ APIRef("DOM") }}

The **`links`** read-only property of the {{domxref("Document")}} interface returns a collection of all {{HTMLElement("area")}} elements and {{HTMLElement("a")}} elements in a document with a value for the [href](/en-US/docs/Web/API/URLUtils.href) attribute.

## Value

An {{domxref("HTMLCollection")}}.

## Examples

```js
const links = document.links;
for (let i = 0; i < links.length; i++) {
  const linkHref = document.createTextNode(links[i].href);
  const lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
