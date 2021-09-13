---
title: Document.scripts
slug: Web/API/Document/scripts
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
browser-compat: api.Document.scripts
---
{{APIRef("DOM")}}

The **`scripts`** property of the {{domxref("Document")}}
interface returns a list of the {{HTMLElement("script")}}
elements in the document. The returned object is an
{{domxref("HTMLCollection")}}.

## Syntax

```js
var scriptList = document.scripts;
```

### Value

An {{domxref("HTMLCollection")}}. You can use this just like an array to get all the
elements in the list.

## Example

This example looks to see if the page has any {{HTMLElement("script")}} elements.

```js
let scripts = document.scripts;

if (scripts.length) {
  alert('This page has scripts!');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
