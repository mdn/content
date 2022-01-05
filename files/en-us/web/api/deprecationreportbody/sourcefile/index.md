---
title: DeprecationReportBody.sourceFile
slug: Web/API/DeprecationReportBody/sourceFile
tags:
  - API
  - Property
  - Reference
  - sourceFile
  - DeprecationReportBody
browser-compat: api.DeprecationReportBody.sourceFile
---
{{APIRef("Reporting API")}}

The **`sourceFile`** read-only property of the {{domxref("DeprecationReportBody")}} interface returns the path to the source file where the deprecated feature was used.

> **Note:** This property can be used with {{domxref("DeprecationReportBody.lineNumber")}} and {{domxref("DeprecationReportBody.columnNumber")}} to locate the column and line in the file where the error occurred.

## Syntax

```js
let sourceFile = DeprecationReportBody.sourceFile;
```

### Value

A {{domxref("DOMString","string")}}, or `null` if the path is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe deprecation reports, then print the value of `sourceFile` to the console.

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile);
}, options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
