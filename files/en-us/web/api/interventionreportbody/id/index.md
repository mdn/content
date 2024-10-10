---
title: "InterventionReportBody: id property"
short-title: id
slug: Web/API/InterventionReportBody/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InterventionReportBody.id
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("InterventionReportBody")}} interface returns a string identifying the intervention that generated the report. This can be used to group reports.

## Value

A string.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `id` to the console.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
