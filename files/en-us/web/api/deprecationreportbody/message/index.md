---
title: DeprecationReportBody.message
slug: Web/API/DeprecationReportBody/message
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - message
  - DeprecationReportBody
spec-urls: https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-message
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`message`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns a human-readable description of the deprecation. This typically matches the message a browser will display in its DevTools console regarding a deprecated feature.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `message` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.message);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
