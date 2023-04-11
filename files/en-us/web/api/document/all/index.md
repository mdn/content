---
title: "Document: all property"
short-title: all
slug: Web/API/Document/all
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.all
---

{{APIRef("DOM")}}{{Deprecated_Header}}

The {{DOMxRef("Document")}} interface's read-only **`all`**
property returns an {{DOMxRef("HTMLAllCollection")}} rooted at the document node. In
other words, it returns all of the document's elements, accessible by order (like an
array) and by ID (like a regular object).

## Value

An {{DOMxRef("HTMLAllCollection")}} which contains every element in the document.

## Conversion to boolean

`document.all` is the only {{Glossary("falsy")}} object accessible to
JavaScript, because it has the [\[\[IsHTMLDDA\]\] internal
slot](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
