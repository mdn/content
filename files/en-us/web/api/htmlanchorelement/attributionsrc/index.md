---
title: "HTMLAnchorElement: attributionSrc property"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLAnchorElement.attributionSrc
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`attributionSrc`** property of the {{domxref("HTMLAnchorElement")}} interface gets and sets the [`attributionsrc`](/en-US/docs/Web/HTML/Element/a#attributionsrc) attribute on an {{htmlelement("a")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} header in the response, to register of a [navigation-based attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources).

The browser stores the source data associated with the navigation-based attribution source (as provided in the {{httpheader("Attribution-Reporting-Register-Source")}} response header) when it receives the navigation response.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

> **Note:** `<a>` elements cannot be used as attribution triggers, only sources.

## Value

A string. There are two versions of this property that you can get and set:

- Empty string, i.e. `aElem.attributionSrc=""`. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server that the `href` attribute points to. This is fine when you are handling the attribution source registration on the same server.
- Value containing one or more URLs, for example:

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  This is useful in cases where the requested resource is not on a server you control, or you just want to handle registering the attribution source on a different server. In this case, you can specify one or more URLs as the value of `attributionSrc`. When the resource request occurs, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionSrc` in addition to the resource origin. These URLs can then respond with a {{httpheader("Attribution-Reporting-Register-Source")}} to register the source.

  > [!NOTE]
  > Specifying multiple URLs means that multiple attribution sources can be registered on the same feature. You might for example have different campaigns that you are trying to measure the success of, which involve generating different reports on different data.

## Examples

### Setting an empty attributionSrc

```html
<a href="https://shop.example"> Click to visit our shop </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### Setting an attributionSrc containing URLs

```html
<a href="https://ourshop.example"> Click to visit our shop </a>
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
