---
title: "HTMLTemplateElement: content property"
short-title: content
slug: Web/API/HTMLTemplateElement/content
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.content
---

{{APIRef("Web Components")}}

The **`HTMLTemplateElement.content`** property returns a
`<template>` element's template contents (a
{{domxref("DocumentFragment")}}).

## Value

A {{domxref("DocumentFragment")}}.

## Examples

```js
const templateElement = document.querySelector("#foo");
const documentFragment = templateElement.content.cloneNode(true);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
