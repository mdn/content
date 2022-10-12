---
title: HTMLMetaElement.name
slug: Web/API/HTMLMetaElement/name
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMetaElement
  - Property
  - Reference
browser-compat: api.HTMLMetaElement.name
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.name`** is used in combination with {{domxref("HTMLMetaElement.content")}} to define name/value pairs of metadata of a document.
The `name` attribute defines the metadata name and the `content` attribute defines the value.

## Value

A string.

## Examples

Reading the metadata name for the first meta element in a document:

```js
// given <meta name="keywords" content="documentation, HTML, web technologies">
let meta = document.querySelector("meta[0]");
console.log(meta.name);
// "keywords"
```

Creating a new meta element with `author` metadata and setting a `content` value:

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
