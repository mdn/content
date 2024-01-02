---
title: "HTMLLinkElement: href property"
short-title: href
slug: Web/API/HTMLLinkElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.href
---

{{APIRef("HTML DOM")}}

The **`HTMLLinkElement.href`** property of the {{domxref("HTMLLinkElement")}} interface contains a string that is the URL associated with the link.

It reflects the `href` attribute of the {{HTMLElement("link")}} element and is the empty string (`""`) if there are none.

**Note:** Either this property or {{domxref("HTMLLinkElement/imagesrcset", "imageSrcset")}} must not be empty.

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
