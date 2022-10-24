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

The **`HTMLMetaElement.name`** is used in combination with {{domxref("HTMLMetaElement.content")}} to define the name-value pairs for the metadata of a document.
The `name` attribute defines the metadata name and the `content` attribute defines the value.

## Value

A string.

## Examples

### Reading the metadata name of the first meta element

```js
// given <meta name="keywords" content="documentation, HTML, web technologies">
let meta = document.querySelector("meta[0]");
console.log(meta.name);
// "keywords"
```

### Creating a meta element with `author` and setting a `content` value

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
- [Possible values for the name attribute](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification)
