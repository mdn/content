---
title: Document.createEntityReference()
slug: Web/API/Document/createEntityReference
tags:
  - API
  - DOM
  - Method
  - Reference
  - Deprecated
browser-compat: api.Document.createEntityReference
---
{{ApiRef("DOM")}}{{deprecated_header}}

Prior to {{ gecko("7.0") }} this method showed up as present, due to bug {{ bug("9850") }}, it always only returned null. The only workaround is to create a text node, CDATA section, attribute node value, etc. which has the value referred to by the entity, using [Unicode escape sequences](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode_escape_sequences) or [fromCharCode()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) as necessary.

## Specifications

[createEntityReference](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE)

## Browser compatibility

{{Compat}}
