---
title: "Document: referrer property"
short-title: referrer
slug: Web/API/Document/referrer
page-type: web-api-instance-property
browser-compat: api.Document.referrer
---

{{APIRef("DOM")}}

The **`Document.referrer`** property returns the [URI](https://www.w3.org/Addressing/#background) of the page that linked to
this page.

## Value

The value is an empty string if the user navigated to the page directly (not through a
link, but, for example, by using a bookmark). Because this property returns only a
string, it doesn't give you document object model (DOM) access to the referring page.

Inside an {{HTMLElement("iframe")}}, the `Document.referrer` will initially
be set to the {{domxref("HTMLAnchorElement/href", "href")}} of the parent's
{{domxref("Window/location", "Window.location")}} in same-origin requests.
In cross-origin requests, it's the {{domxref("HTMLAnchorElement/origin", "origin")}} of the parent's `Window.location` by default.
For more information, see the [Referrer-Policy: strict-origin-when-cross-origin](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin) documentation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
