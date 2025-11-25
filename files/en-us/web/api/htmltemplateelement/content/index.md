---
title: "HTMLTemplateElement: content property"
short-title: content
slug: Web/API/HTMLTemplateElement/content
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.content
---

{{APIRef("Web Components")}}

The **`content`** property of the {{domxref("HTMLTemplateElement")}} interface returns the `<template>` element's template contents as a {{domxref("DocumentFragment")}}. This content's {{domxref("Node/ownerDocument", "ownerDocument")}} is a separate {{domxref("Document")}} from the one that contains the `<template>` element itself — unless the containing document is itself constructed from a template content.

The {{domxref("Node.cloneNode()")}} and {{domxref("Document.importNode()")}} methods both create a copy of a node. The difference is that `importNode()` clones the node in the context of the calling document, whereas `cloneNode()` uses the document of the node being cloned. The document context determines the {{domxref("CustomElementRegistry")}} for constructing any custom elements. For this reason, use `document.importNode()` to clone the `content` fragment so that custom element descendants are constructed using the definitions in the current document, rather than the separate document that owns the template content. See the {{domxref("Node.cloneNode()")}} page's examples for more details.

## Value

A {{domxref("DocumentFragment")}}.

## Examples

```js
const templateElement = document.querySelector("#foo");
const documentFragment = document.importNode(templateElement.content, true);
// Now you can insert the documentFragment into the DOM
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
