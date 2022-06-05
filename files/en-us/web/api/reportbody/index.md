---
title: ReportBody
slug: Web/API/ReportBody
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Experimental
  - ReportBody
spec-urls: https://w3c.github.io/reporting/#reportbody
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`ReportBody`** interface of the {{domxref('Reporting API','','',' ')}} represents the body of a report. Individual report types inherit from this interface, adding specific attributes relevant to the particular report.

### Reports that inherit from `ReportBody`

- {{domxref("CrashReportBody")}}
- {{domxref("DeprecationReportBody")}}
- {{domxref("InterventionReportBody")}}

An instance of `ReportBody` is returned as the value of {{domxref("Report.body")}}. The interface has no constructor.

## Methods

- {{domxref("ReportBody.toJSON()")}} {{experimental_inline}}
  - : A _serializer_ which returns a JSON representation of the `ReportBody` object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports. The {{domxref("InterventionReportBody")}} interface inherits from `ReportBody`.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
