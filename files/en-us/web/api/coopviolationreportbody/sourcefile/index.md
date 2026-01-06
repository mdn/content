---
title: "COOPViolationReportBody: sourceFile property"
short-title: sourceFile
slug: Web/API/COOPViolationReportBody/sourceFile
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.sourceFile
---

{{APIRef("Reporting API")}}

The **`sourceFile`** read-only property of the {{domxref("COOPViolationReportBody")}} interface indicates the URL of the source file that violated the [Cross-Origin-Opener-Policy (COEP)](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-OPener-Policy).

This property is used with {{domxref("COOPViolationReportBody.lineNumber")}} and {{domxref("COOPViolationReportBody.columnNumber")}} to indicate the location that triggered the violation.

## Value

A string containing the URL of the file that triggered the violation.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
