---
title: CrashReport
slug: Web/API/CrashReport
page-type: web-api-interface
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.crash
---

{{APIRef("Reporting API")}}

The `CrashReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a crash report.

## Instance properties

- `age`
  - : The age of the report in milliseconds.
- `type`
  - : The string `"crash"` indicating that this is a deprecation report.
- `url`
  - : A string representing the URL of the document that generated the report.
- `user_agent`
  - : The user agent string of the browser that generated the report.
- `body`
  - : The body of the report.
    This is an object with the following properties:
    - `reason` {{experimental_inline}} {{optional_inline}}
      - : A string indicating the specfic reason why the crash occurred, if known. Possible values are:
        - `oom`
          - : The page ran out of memory.
        - `unresponsive`
          - : The page was killed due to being unresponsive.
    - `stack` {{experimental_inline}} {{optional_inline}}
      - : A string representing the JavaScript call stack at the time of the crash. This is included if the `reason` is `unresponsive`, if the `Document-Policy` value for `include-js-call-stacks-in-crash-reports` in the document that crashed is `true`, and if the call stack was able to be recovered from the crashed document.
    - `is_top_level` {{experimental_inline}}
      - : A boolean indicating whether the crashed document was a top-level document (`true`) or an embedded document (`false`).
    - `visibility_state` {{experimental_inline}}
      - : An enumerated value indicating whether the document is visible. This mirrors the value of the {{domxref("Document.visibilityState")}} property. Possible values are:
        - `visible`
          - : The document content is at least partially visible.
        - `hidden`
          - : The document content is completely hidden.
    - `crash_report_api` {{experimental_inline}} {{optional_inline}}
      - : An object containing the key-value pairs set via the {{domxref("CrashReportContext.set()")}} method, if any.

## Description

The [Crash Reporting API](https://wicg.github.io/crash-reporting) extension to the [Reporting API](/en-US/docs/Web/API/Reporting_API) specifies a mechanism allowing arbitrary information to be recorded and made available in crash reports. This is useful because we can store detailed diagnostic information throughout the lifetime of an application and use the crash reports to debug crashes more effectively.

The information is stored in a special key-value store, manipulated using the document's {{domxref("CrashReportContext")}} object, which is accessed via the {{domxref("Window.crashReport")}} property.

When the browser crashes, the information stored in the key-value store is added to a {{domxref("CrashReport")}} and sent to the default [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints), if it is defined. The reporting server endpoint and its mapping to a particular URL are set using the {{httpheader("Reporting-Endpoints")}} header.

> [!NOTE]
> It is not possible to retrieve {{domxref("CrashReport")}}s using a {{domxref("ReportingObserver")}}.

## Examples

### Sending a report to a reporting endpoint

Configuring a web page to send a crash report requires that you set a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named "default" using the {{httpheader("Reporting-Endpoints")}} header, for example `https://example.com/default`.

A typical report structure is as follows:

```json
{
  "age": 27,
  "type": "crash",
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "sourceFile": "https://example.com/",
    "reason": "unresponsive",
    "stack": "SomeError: ... at ...",
    "is_top_level": true,
    "visibility_state": "visible",
    "crash_report_api": {
      "crash_data_1": "0001",
      "crash_data_2": "0002"
    }
  }
}
```

The report will be sent as a JSON object in a {{httpmethod("POST")}} request to the endpoint whenever the browser crashes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CrashReportContext")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
