---
title: HTMLMetaElement.httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMetaElement
  - Property
  - Reference
browser-compat: api.HTMLMetaElement.httpEquiv
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.httpEquiv`** property gets or sets the pragma directive, or HTTP response header name, for the value of the {{domxref("HTMLMetaElement.content")}} attribute.
For more details on the possible values, see the [http-equiv](/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) attribute.

## Value

A string.

## Examples

Reading the `http-equiv` value for a meta element:

```js
// given <meta http-equiv="refresh" content="10" />
let meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// "refresh"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
