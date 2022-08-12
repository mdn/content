---
title: InterventionReportBody.message
slug: Web/API/InterventionReportBody/message
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Experimental
  - message
  - InterventionReportBody
spec-urls: https://wicg.github.io/intervention-reporting/#dom-interventionreportbody-message
---
{{APIRef("Reporting API")}}{{SeeCompatTable}}

The **`message`** read-only property of the {{domxref("InterventionReportBody")}} interface returns a human-readable description of the intervention, including information such as how the intervention could be avoided. This typically matches the message a browser will display in its DevTools console when an intervention is imposed, if one is available.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `message` to the console.

```js
const options = {
  types: ['intervention'],
  buffered: true
}

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.message);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is not yet available by default in any released browser. It can be activated in Firefox by setting `dom_reporting_enabled` to `true` and in Chrome if you [enable this experimental feature](https://web.dev/reporting-api/#use-devtools).
