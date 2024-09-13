---
title: "Document: applets property"
short-title: applets
slug: Web/API/Document/applets
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.applets
---

{{APIRef("DOM")}} {{Deprecated_Header}}

The **`applets`** property of the {{domxref("Document")}} returns an empty {{domxref("HTMLCollection")}}. This property is kept only for compatibility reasons; in older versions of browsers, it returned a list of the applets within a document.

> [!NOTE]
> Support for the `<applet>` element has been removed by all browsers. Therefore, calling `document.applets` always
> returns an empty collection.

## Value

An empty {{domxref("HTMLCollection")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
