---
title: "HTMLMetaElement: httpEquiv property"
short-title: httpEquiv
slug: Web/API/HTMLMetaElement/httpEquiv
page-type: web-api-instance-property
browser-compat: api.HTMLMetaElement.httpEquiv
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.httpEquiv`** property gets or sets the pragma directive or an HTTP response header name for the {{domxref("HTMLMetaElement.content")}} attribute.
For more details on the possible values, see the [http-equiv](/en-US/docs/Web/HTML/Element/meta#http-equiv) attribute.

## Value

A string.

## Examples

### Reading the `http-equiv` value of a meta element

The following example queries a `<meta>` element with an `http-equiv` attribute.
The `http-equiv` attribute is logged to the console showing a `refresh` [pragma directive](/en-US/docs/Web/HTML/Element/meta#http-equiv) that instructs the browser to refresh the page after a number of seconds defined by the `content` attribute:

```js
// given <meta http-equiv="refresh" content="10" />
let meta = document.querySelector("meta[http-equiv]");
console.log(meta.httpEquiv);
// refresh
console.log(meta.content);
// 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
