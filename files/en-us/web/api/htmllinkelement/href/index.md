---
title: "HTMLLinkElement: href property"
short-title: href
slug: Web/API/HTMLLinkElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.href
---

{{APIRef("HTML DOM")}}

The **`href`** property of the {{domxref("HTMLLinkElement")}} interface contains a string that is the URL associated with the link.

It reflects the `href` attribute of the {{HTMLElement("link")}} element. If the element does not have an `href` attribute, then this property's value is the empty string (`""`).

> **Note:** Every `<link>` element must contain either one or both of the `href` or [`imagesrcset`](/en-US/docs/Web/HTML/Element/link#imagesrcset) attributes. This means, for each valid `<link>`, either this property or {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} will not be empty.

## Value

A string that contains a URL, or the empty string (`""`) if there is no `href` element.

## Examples

```html
<link rel="stylesheet" href="example.css" />
```

```js
const link = document.getElementsByTag("link")[0];
console.log(link.href); // 'example.css'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.imageSrcset")}} property
- {{domxref("HTMLAnchorElement.href")}} property
