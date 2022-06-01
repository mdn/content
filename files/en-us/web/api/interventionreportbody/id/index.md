---
title: InterventionReportBody.id
slug: Web/API/InterventionReportBody/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - id
  - InterventionReportBody
spec-urls: https://wicg.github.io/intervention-reporting/#dom-interventionreportbody-id
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("InterventionReportBody")}} interface returns a string identifying the intervention that generated the report. This can be used to group reports.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `id` to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
