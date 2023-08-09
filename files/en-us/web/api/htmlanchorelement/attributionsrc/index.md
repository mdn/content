---
title: "HTMLAnchorElement: attributionSrc property"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLAnchorElement.attributionSrc
---

{{ APIRef("Attribution Reporting API") }}{{seecompattable}}

The
**`attributionSrc`** property of the {{domxref("HTMLAnchorElement")}} interface gets and sets the `attributionsrc` attribute on an {{htmlelement("a")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the resource request once the link is clicked. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} header in the response, to complete the registration of a click-based attribution source.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

> **Note:** `<a>` elements cannot be used as attribution triggers, only sources.

## Value

A string. There are two versions of this property that you can get and set:

- Empty string, i.e. `aElem.attributionSrc=""`. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server as the `href` attribute points to. This is fine when you are handling the attribution source registration in the same place.
- Value containing one or more URLs, e.g. `aElem.attributionSrc="https://a.example/register-source https://b.example/register-source"`. This specifies that the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionsrc`; this is required if the resource pointed to in `href` is not on a server you control, and you want to register the attribution source on separate servers that you _do_ control. `attributionSrc` instructs the browser to make the required extra requests and specifies their destinations.

## Examples

### Setting an empty attributionSrc

```html
<a href="https://ourshop.example.com"> Click to visit our shop </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Setting an attributionSrc containing URLs

```html
<a href="https://ourshop.example.com"> Click to visit our shop </a>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).
