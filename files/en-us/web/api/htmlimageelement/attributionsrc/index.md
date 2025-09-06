---
title: "HTMLImageElement: attributionSrc property"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLImageElement.attributionSrc
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`attributionSrc`** property of the {{domxref("HTMLImageElement")}} interface that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the image request. It reflects the `<img>` element's [`attributionsrc`](/en-US/docs/Web/HTML/Reference/Elements/img#attributionsrc) content attribute.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Value

A string that is either empty or a space-separated list of URLs. For the interpretation of this attribute, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#attributionsrc) reference.

## Examples

### Setting an empty attributionSrc

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### Setting an attributionSrc containing URLs

```html
<img src="advertising-image.png" />
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const imgElem = document.querySelector("img");
imgElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).
