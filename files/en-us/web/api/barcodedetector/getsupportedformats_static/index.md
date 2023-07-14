---
title: "BarcodeDetector: getSupportedFormats() static method"
short-title: getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.BarcodeDetector.getSupportedFormats_static
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

The **`getSupportedFormats()`** static method
of the {{domxref("BarcodeDetector")}} interface returns a {{jsxref('Promise')}} which
fulfills with an {{jsxref('Array')}} of supported barcode format types.

## Syntax

```js-nolint
BarcodeDetector.getSupportedFormats()
```

### Parameters

This method receives no parameters.

### Return value

A {{jsxref('Promise')}} which fulfills with an {{jsxref('Array')}} of
[supported barcode format types](/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Exceptions

No exceptions are thrown.

## Examples

The following example calls the `getSupportFormat()` static method and logs
the results to the console.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
