---
title: "COOPViolationReportBody: lineNumber property"
short-title: lineNumber
slug: Web/API/COOPViolationReportBody/lineNumber
page-type: web-api-instance-property
browser-compat: api.COOPViolationReportBody.lineNumber
---

{{APIRef("Reporting API")}}

The **`lineNumber`** read-only property of the {{domxref("COOPViolationReportBody")}} interface indicates the line number in the source file that triggered the [Cross-Origin-Opener-Policy (COEP)](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-OPener-Policy) violation.

This property is used with {{domxref("COOPViolationReportBody.sourceFile")}} and {{domxref("COOPViolationReportBody.columnNumber")}} to indicate the location that triggered the violation.

## Value

An integer containing the line number that triggered the violation.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
