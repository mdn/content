---
title: InterventionReportBody.sourceFile
slug: Web/API/InterventionReportBody/sourceFile
tags:
  - API
  - Property
  - Reference
  - sourceFile
  - InterventionReportBody
browser-compat: api.InterventionReportBody.sourceFile
---
{{APIRef("Reporting API")}}

The **`sourceFile`** read-only property of the {{domxref("InterventionReportBody")}} interface returns the path to the source file where the intervention occurred.

> **Note:** This property can be used with {{domxref("InterventionReportBody.lineNumber")}} and {{domxref("InterventionReportBody.columnNumber")}} to locate the column and line in the file where the feature is used.

## Syntax

```js
let sourceFile = InterventionReportBody.sourceFile;
```

### Value

A {{domxref("DOMString","string")}}, or `null` if the path is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe intervention reports, then print the value of `sourceFile` to the console.

```js
let options = {
  types: ['intervention'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
