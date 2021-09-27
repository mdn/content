---
title: HTMLTemplateElement.content
slug: Web/API/HTMLTemplateElement/content
tags:
  - API
  - HTML DOM
  - HTMLTemplateElement
  - Property
  - Reference
  - Web Components
browser-compat: api.HTMLTemplateElement.content
---
{{APIRef("Web Components")}}

The **`HTMLTemplateElement.content`** property returns a
`<template>` element's template contents (a
{{domxref("DocumentFragment")}}).

## Syntax

```js
var documentFragment = templateElement.content
```

## Example

```js
var templateElement = document.querySelector("#foo");
var documentFragment = templateElement.content.cloneNode(true);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
