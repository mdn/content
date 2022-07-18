---
title: DeprecationReportBody.id
slug: Web/API/DeprecationReportBody/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - id
  - Experimental
  - DeprecationReportBody
spec-urls: https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-id
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns a string representing the feature or API that is deprecated. This can be used to group or count related reports.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `id` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.id);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
