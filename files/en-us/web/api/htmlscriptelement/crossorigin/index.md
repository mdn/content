---
title: "HTMLScriptElement: crossOrigin property"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.crossOrigin
---

{{APIRef("HTML DOM")}}

The **`crossOrigin`** property of the {{domxref("HTMLScriptElement")}} interface reflects the {{Glossary("CORS", "Cross-Origin Resource Sharing")}} settings for the script element. For classic scripts from other [origins](/en-US/docs/Glossary/Origin), this controls if full error information will be exposed. For module scripts, it controls the script itself and any script it imports. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for details.

## Value

A string of a keyword specifying the CORS mode to use when fetching the resource. Possible values are:

- `anonymous` or an empty string (`""`)
  - : Requests sent by the {{domxref("HTMLScriptElement")}} will use the `cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode. This means that CORS is enabled and credentials are sent _if_ the resource is fetched from the same origin from which the document was loaded.
- `use-credentials`
  - : Requests sent by the {{domxref("HTMLScriptElement")}} will use the `cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode. All resources requests by the element will use CORS, regardless of which domain the fetch is from.

If the `crossOrigin` property is specified with any other value, it is the same as specifying it as the `anonymous`.

If the `crossOrigin` property is not specified, the resource is fetched without CORS (the `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} and the `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} mode).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
