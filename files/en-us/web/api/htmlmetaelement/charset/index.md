---
title: HTMLMetaElement.charset
slug: Web/API/HTMLMetaElement/charset
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMetaElement
  - Property
  - Reference
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.charset`** property is a string that specifies the character encoding used in a document.
Using **non-UTF-8 character encodings is strongly discouraged** as this can create unexpected results on form submission and URL encoding.
For more details, see [Character encodings in HTML](/en-US/docs/Web/HTML/Element/meta#attr-charset).

## Value

A string.

## Examples

Reading the character encoding of a document from a meta element:

```js
// given <meta charset="utf-8">
let meta = document.querySelector("meta[charset]");
console.log(meta.charset);
// "utf-8"
```

Creating a new meta element that describes the character encoding of the document:

```js
let meta = document.createElement("meta");
meta.charset = "utf-8";
document.head.appendChild(meta);
```

## See also

- {{HTMLElement("meta")}}
