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
be set to the same value as the {{domxref("HTMLAnchorElement/href", "href")}} of
the parent window's {{domxref("Window/location", "Window.location")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
