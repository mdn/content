---
title: "HTMLImageElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.referrerPolicy
---

{{APIRef("HTML DOM")}}

The **`referrerPolicy`** property of the {{domxref("HTMLImageElement")}} interface defining which referrer is sent when fetching the resource. It reflects the `<img>` element's [`referrerpolicy`](/en-US/docs/Web/HTML/Reference/Elements/img#referrerpolicy) content attribute.

## Value

A string whose value is one of `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, `strict-origin-when-cross-origin`, or `unsafe-url`. For their meanings, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#referrerpolicy) reference.

## Examples

```js
const img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

const div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
