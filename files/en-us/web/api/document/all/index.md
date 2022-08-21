---
title: Document.all
slug: Web/API/Document/all
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - HTMLAllCollection
  - Property
  - Reference
  - all
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
slot](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot). This was done because of compatibility with older versions of Internet
Explorer. More information about this can be found in [this answer from StackOverflow](https://stackoverflow.com/questions/10350142/why-is-document-all-falsy/62005426).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
