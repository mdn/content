---
title: Navigator.pdfViewerEnabled
slug: Web/API/Navigator/pdfViewerEnabled
page-type: web-api-instance-property
tags:
  - pdfViewerEnabled
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Navigator.pdfViewerEnabled
---
{{APIRef("HTML DOM")}}

The **`pdfViewerEnabled`** property of the {{domxref("Navigator")}} interface indicates whether the browser supports inline display of PDF files when navigating to them.

If inline viewing is not supported the PDF is downloaded and may then be handled by some external application.

> **Note:** This method replaces a number of legacy methods of inferring support for inline viewing of PDF files.

## Value

`true` if the browser can display PDF files inline when navigating to the file (using either an internal viewer or a PDF viewer extension); otherwise `false`.

## Examples

To check PDF inline viewing support:

```js
if (!navigator.pdfViewerEnabled) {
  // The browser does not support inline viewing of PDF files.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
