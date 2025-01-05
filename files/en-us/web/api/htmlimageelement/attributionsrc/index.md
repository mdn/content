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

The
**`attributionSrc`** property of the {{domxref("HTMLImageElement")}} interface gets and sets the [`attributionsrc`](/en-US/docs/Web/HTML/Element/img#attributionsrc) attribute on an {{htmlelement("img")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the image request.

On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to register an image-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers), respectively. Which response header should be sent back depends on the value of the `Attribution-Reporting-Eligible` header that triggered the registration.

The source/trigger is registered once the browser receives the response containing the image file.

> [!NOTE]
> Bear in mind that users might not necessarily be able to perceive the image at all — it might be a 1x1 transparent tracking pixel that is only being used for attribution reporting.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Value

A string. There are two versions of this property that you can get and set:

- Empty string, i.e. `imgElem.attributionSrc=""`. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server as the `src` attribute points to. This is fine when you are handling the attribution source or trigger registration on the same server. When registering an attribution trigger this property is optional, and an empty string value will be used if it is omitted.
- Value containing one or more URLs, for example:

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  This is useful in cases where the requested resource is not on a server you control, or you just want to handle registering the attribution source on a different server. In this case, you can specify one or more URLs as the value of `attributionSrc`. When the resource request occurs the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionSrc` in addition to the resource origin. These URLs can then respond with a {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header as appropriate to complete registration.

  > [!NOTE]
  > Specifying multiple URLs means that multiple attribution sources can be registered on the same feature. You might for example have different campaigns that you are trying to measure the success of, which involve generating different reports on different data.

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
