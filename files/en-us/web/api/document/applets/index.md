---
title: Document.applets
slug: Web/API/Document/applets
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Document.applets
---
{{APIRef("DOM")}} {{Deprecated_Header}}

The **`applets`** property of the {{domxref("Document")}}
interface returns a list of the applets within a document.

> **Note:** The {{htmlelement("applet")}} element was removed in [Gecko 56](https://bugzilla.mozilla.org/show_bug.cgi?id=1279218) and [Chrome in late 2015](https://bugs.chromium.org/p/chromium/issues/detail?id=470301). Since then, calling `document.applets` in those browsers always
> returns an empty {{domxref("HTMLCollection")}}. Removal is being considered in [WebKit](https://bugs.webkit.org/show_bug.cgi?id=157926).

## Value

An {{domxref("HTMLCollection")}}.

## Examples

```js
// When you know the second applet is the one you want
my_java_app = document.applets[1];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
