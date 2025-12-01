---
title: "HTMLTemplateElement: content property"
short-title: content
slug: Web/API/HTMLTemplateElement/content
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.content
---

{{APIRef("Web Components")}}

The **`content`** property of the {{domxref("HTMLTemplateElement")}} interface returns the `<template>` element's template contents as a {{domxref("DocumentFragment")}}. This content's {{domxref("Node/ownerDocument", "ownerDocument")}} is a separate {{domxref("Document")}} from the one that contains the `<template>` element itself — unless the containing document is itself constructed for the purpose of holding template content.

The {{domxref("Node.cloneNode()")}} and {{domxref("Document.importNode()")}} methods both create a copy of a node. The difference is that `importNode()` clones the node in the context of the calling document, whereas `cloneNode()` uses the document of the node being cloned. The document context determines the {{domxref("CustomElementRegistry")}} for constructing any custom elements. For this reason, use `document.importNode()` to clone the `content` fragment so that custom element descendants are constructed using the definitions in the current document, rather than the separate document that owns the template content. See the {{domxref("Node.cloneNode()")}} page's examples for more details.

## Value

A {{domxref("DocumentFragment")}}.

## Examples

### Using importNode() with template content

```js
const templateElement = document.querySelector("#foo");
const documentFragment = document.importNode(templateElement.content, true);
// Now you can insert the documentFragment into the DOM
```

### The ownerDocument of template content

For `<template>` elements created in the context of a normal HTML document, the `ownerDocument` of the `content` is a separate, freshly created document:

```js
const template = document.createElement("template");
console.log(template.content.ownerDocument === document); // false
console.log(template.content.ownerDocument.URL); // "about:blank"
```

If the `<template>` element is created in the context of a document that itself was created for the purpose of holding template content, then the `ownerDocument` of the `content` is the same as that of the containing document:

```js
const template1 = document.createElement("template");
const docForTemplate = template1.content.ownerDocument;
const template2 = docForTemplate.createElement("template");
console.log(template2.content.ownerDocument === docForTemplate); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
