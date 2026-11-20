---
title: "COOPViolationReportBody: columnNumber property"
short-title: columnNumber
slug: Web/API/COOPViolationReportBody/columnNumber
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.columnNumber
---

{{APIRef("Reporting API")}}

The **`columnNumber`** read-only property of the {{domxref("COOPViolationReportBody")}} interface indicates the column number in the source file that triggered the [Cross-Origin-Opener-Policy (COEP)](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-OPener-Policy) violation.

This property is used with {{domxref("COOPViolationReportBody.sourceFile")}} and {{domxref("COOPViolationReportBody.lineNumber")}} to indicate the location that triggered the violation.

## Value

An integer containing the column number that triggered the violation.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
