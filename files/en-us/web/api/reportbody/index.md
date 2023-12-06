---
title: ReportBody
slug: Web/API/ReportBody
page-type: web-api-interface
browser-compat: api.ReportBody
---

{{APIRef("Reporting API")}}

The **`ReportBody`** interface of the {{domxref('Reporting API','','',' ')}} represents the body of a report. Individual report types inherit from this interface, adding specific attributes relevant to the particular report.

### Reports that inherit from `ReportBody`

- {{domxref("CSPViolationReportBody")}}
- {{domxref("DeprecationReportBody")}}
- {{domxref("InterventionReportBody")}}

An instance of `ReportBody` is returned as the value of {{domxref("Report.body")}}. The interface has no constructor.

## Instance methods

- {{domxref("ReportBody.toJSON()")}}
  - : A _serializer_ which returns a JSON representation of the `ReportBody` object.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports. The {{domxref("InterventionReportBody")}} interface inherits from `ReportBody`.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  console.log(firstReport.type); // intervention
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
