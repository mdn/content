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

The **`attributionSrc`** property of the {{domxref("HTMLScriptElement")}} interface gets and sets the `attributionsrc` attribute on an {{htmlelement("script")}} element programmatically, reflecting the value of that attribute. `attributionsrc` specifies that you want the browser to send an {{httpheader("Attribution-Reporting-Eligible")}} header along with the resource request once the script is being loaded. On the server-side this is used to trigger sending an {{httpheader("Attribution-Reporting-Register-Source")}} or {{httpheader("Attribution-Reporting-Register-Trigger")}} header in the response, to complete the registration of a view-based attribution source or attribution trigger, respectively.

See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

## Value

A string. There are two versions of this property that you can get and set:

- Empty string, i.e. `scriptElem.attributionSrc=""`. This specifies that you want the {{httpheader("Attribution-Reporting-Eligible")}} header sent to the same server as the `src` attribute points to. This is fine when you are handling the attribution source or trigger registration in the same place. When registering an attribution trigger this is optional — you can use the loaded script to send the header.
- Value containing one or more URLs, e.g. `scriptElem.attributionSrc="https://a.example/register-source https://b.example/register-source"`. This specifies that the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionsrc`; this is required if the resource pointed to in `src` is not on a server you control, and you want to register the attribution source or trigger on a separate server that you _do_ control. `attributionsrc` instructs the browser to make the required extra request and specifies its destination.

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
