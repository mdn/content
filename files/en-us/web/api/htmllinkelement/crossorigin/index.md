---
title: "HTMLLinkElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/HTMLLinkElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.crossOrigin
---

{{APIRef("HTML DOM")}}

The **`crossOrigin`** property of the {{domxref("HTMLLinkElement")}} interface specifies the Cross-Origin Resource Sharing ({{Glossary("CORS")}}) setting to use when retrieving the resource.

## Value

A string of a keyword specifying the CORS mode to use when fetching the resource. Possible values are:

- `anonymous` or the empty string (`""`)
  - : Requests sent by the {{domxref("HTMLLinkElement")}} will use the `cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode. This means that CORS is enabled and credentials are sent _if_ the resource is fetched from the same origin from which the document was loaded.
- `use-credentials`
  - : Requests sent by the {{domxref("HTMLLinkElement")}} will use the `cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode. All resources requests by the element will use CORS, regardless of what domain the fetch is from.

If the `crossOrigin` property is specified with any other value, it is the same as specifying as the `anonymous`.

If the `crossOrigin` property is not specified, the resource is fetched without CORS (the `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
