---
title: InterventionReportBody
slug: Web/API/InterventionReportBody
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - InterventionReportBody
  - Reference
  - Reporting API
spec-urls: https://wicg.github.io/intervention-reporting/#interventionreportbody
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The `InterventionReportBody` interface of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents the body of an intervention report.

An intervention report is generated when usage of a feature in a web document has been blocked by the browser for reasons such as security, performance, or user annoyance. So for example, a script was been stopped because it was significantly slowing down the browser, or the browser's autoplay policy blocked audio from playing without a user gesture to trigger it.

A deprecation report is generated when a deprecated feature (for example a deprecated API method) is used on a document being observed by a {{domxref("ReportingObserver")}}. In addition to the support of this API, receiving useful intervention warnings relies on browser vendors adding these warnings for the relevant features.

{{InheritanceDiagram}}

## Constructor

An instance of `InterventionReportBody` is returned as the value of {{domxref("Report.body")}} when {{domxref("Report.Type")}} is `intervention`. The interface has no constructor.

## Properties

This interface also inherits properties from {{domxref("ReportBody")}}.

- {{domxref("InterventionReportBody.id")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A string representing the intervention that generated the report. This can be used to group reports.
- {{domxref("InterventionReportBody.message")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A string containing a human-readable description of the intervention, including information such how the intervention could be avoided. This typically matches the message a browser will display in its DevTools console when an intervention is imposed, if one is available.
- {{domxref("InterventionReportBody.sourceFile")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A string containing the path to the source file where the intervention occurred, if known, or `null` otherwise.
- {{domxref("InterventionReportBody.lineNumber")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A string representing the line in the source file in which the intervention occurred, if known, or `null` otherwise.
- {{domxref("InterventionReportBody.columnNumber")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A string representing the column in the source file in which the intervention occurred, if known, or `null` otherwise.

## Methods

This interface also inherits methods from {{domxref("ReportBody")}}.

- {{domxref("InterventionReportBody.toJSON()")}} {{experimental_inline}}
  - : A _serializer_ which returns a JSON representation of the `InterventionReportBody` object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print details of each property of the first report to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
  console.log(firstReport.body.message);
  console.log(firstReport.body.sourceFile);
  console.log(firstReport.body.lineNumber);
  console.log(firstReport.body.columnNumber);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [The Reporting API](https://web.dev/reporting-api/)
