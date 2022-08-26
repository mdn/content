---
title: CrashReportBody
slug: Web/API/CrashReportBody
page-type: web-api-interface
tags:
  - API
  - CrashReportBody
  - Experimental
  - Interface
  - Reference
  - Reporting API
browser-compat: api.CrashReportBody
---
{{SeeCompatTable}}{{APIRef("Reporting API")}}

The `CrashReportBody` interface of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents the body of a crash report (the return value of its {{domxref("Report.body")}} property).

A crash report is generated when a document becomes unusable due to the browser (or one of its processes) crashing. For security reasons, no details of the crash are communicated in the body except for a general crash reason.

{{InheritanceDiagram}}

## Properties

- `reason` {{experimental_inline}}

  - : A string representing the reason for the crash. Current possible reasons are:

    - `oom`: The browser ran out of memory.
    - `unresponsive`: The page was killed due to being unresponsive.

## Examples

Crash reports are generally only retrievable via endpoints set up using the {{httpheader("Report-To")}} header. It is difficult to retrieve a crash report via a {{domxref("ReportingObserver")}}, as by that point the page would have crashed!

Some sample JSON might look like this:

```json
{
  "type": "crash",
  "age": 42,
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "reason": "oom"
  }
}
```

> **Note:** Crash reports are always delivered to the endpoint group named `default`; there is currently no way to override this. If you want to receive other kinds of reports, but not crash reports, make sure to use a different name for the endpoint group that you choose for those reports.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
