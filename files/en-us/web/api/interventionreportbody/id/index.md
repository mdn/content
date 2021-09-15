---
title: InterventionReportBody.id
slug: Web/API/InterventionReportBody/id
tags:
  - API
  - Property
  - Reference
  - id
  - InterventionReportBody
browser-compat: api.InterventionReportBody.id
---
{{APIRef("Reporting API")}}

The **`id`** read-only property of the {{domxref("InterventionReportBody")}} interface returns a string identifying the intervention that generated the report. This can be used to group reports.

## Syntax

```js
let id = InterventionReportBody.id;
```

### Value

A {{domxref("DOMString","string")}}.

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

{{Compat}}
