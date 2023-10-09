---
title: "HTMLScriptElement: attributionSrc property"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLScriptElement.attributionSrc
---

{{ APIRef("Attribution Reporting API") }}{{seecompattable}}

The **`attributionSrc`** property of the {{domxref("HTMLScriptElement")}} interface gets and sets the `attributionsrc` attribute on an {{htmlelement("script")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the script resource request. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to complete the registration of a script-based attribution source or attribution trigger, respectively.

Once the source/trigger are registered, the corresponding source or trigger event can be set off using whatever event you like, via a couple of different feature options:

1. Send a {{domxref("fetch()")}} request containing the `attributionReporting` option, either set directly on the `fetch()` call or on a {{domxref("Request")}} object passed into the `fetch()` call.
2. Send an {{domxref("XMLHttpRequest")}} with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Value

A string. There are two versions of this property that you can get and set:

- Empty string, i.e. `scriptElem.attributionSrc=""`. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server as the `src` attribute points to. This is fine when you are handling the attribution source or trigger registration on the same server. When registering an attribution trigger this property is optional, and an empty string value will be used if it is ommitted.
- Value containing one or more URLs, for example:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  This is useful in cases where the requested resource is not on a server you control, and you want to register the attribution source via a separate server that you _do_ control. In this case, you can specify one or more URLs as the value of `attributionSrc`. When the resource request occurs:

  - In the case of an attribution source registration, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionSrc` rather than the resource origin; these URLs can then respond with the {{httpheader("Attribution-Reporting-Register-Source")}} header to complete registration.
  - In the case of an attribution trigger registration, the `attributionSrc` property can only contain a single URL, which the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to. This URL can then respond with the {{httpheader("Attribution-Reporting-Register-Trigger")}} header to complete registration.

## Examples

### Setting an empty attributionSrc

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Setting an attributionSrc containing URLs

```html
<script src="advertising-script.js"></script>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).
