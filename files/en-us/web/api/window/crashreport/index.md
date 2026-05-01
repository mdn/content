---
title: "Window: crashReport property"
short-title: crashReport
slug: Web/API/Window/crashReport
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.crashReport
---

{{securecontext_header}}{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`crashReport`** read-only property of the {{domxref("Window")}} interface returns a {{domxref("CrashReportContext")}} object that enables arbitrary data to be recorded for the current top-level browsing context.
The data is then included in {{domxref("CrashReport")}} objects that are sent to a reporting endpoint when a browser crash occurs.

## Value

A {{domxref("CrashReportContext")}} object instance.

## Examples

See the {{domxref("CrashReportContext")}} reference pages for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
