---
title: HTMLMetaElement.content
slug: Web/API/HTMLMetaElement/content
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMetaElement
  - Property
  - Reference
browser-compat: api.HTMLMetaElement.content
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.content`** property is gets or sets the content attribute by {{domxref("HTMLMetaElement.name")}} or {{domxref("HTMLMetaElement.httpEquiv")}}.
For more information, see the [content](/en-US/docs/Web/HTML/Element/meta#attr-content) attribute.

## Value

A string.

## Examples

Reading the content for when a meta element has a `keywords` name:

```js
// given <meta name="keywords" content="documentation, HTML, web">
let meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

Creating a new meta element with `description` as a name and setting a `content` value:

```js
let meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
