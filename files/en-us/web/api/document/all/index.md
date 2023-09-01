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

The {{DOMxRef("Document")}} interface's read-only **`all`** property returns an {{DOMxRef("HTMLAllCollection")}} rooted at the document node.

Rather than using `document.all` to return an {{DOMxRef("HTMLAllCollection")}} of all the document's elements in document order, you can use {{DOMxRef("Document.querySelectorAll")}} to return a {{DOMxRef("NodeList")}} of all the document's elements in document order:

```js
const allElements = document.querySelectorAll("*");
```

## Value

An {{DOMxRef("HTMLAllCollection")}} which contains every element in the document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
