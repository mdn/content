---
title: "CSPViolationReportBody: columnNumber property"
short-title: columnNumber
slug: Web/API/CSPViolationReportBody/columnNumber
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.columnNumber
---

{{APIRef("Reporting API")}}

The **`columnNumber`** read-only property of the {{domxref("CSPViolationReportBody")}} interface indicates the column in the source file that caused the reported CSP violation.

This property is most useful alongside {{domxref("CSPViolationReportBody.sourceFile")}} and {{domxref("CSPViolationReportBody.lineNumber")}}, as it provides the location of the column in that file and line where the error occurred.

## Value

An integer, or `null` if the column is not known.

## Examples

In this example we create a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function in invoked, we get the body of the first entry of the reports array, and use it to log the file, line, and column of the violation to the console.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolationBody = reports[0].body;
    console.log(`File: ${cspViolationBody.sourceFile}`);
    console.log(`Line: ${cspViolationBody.lineNumber}`);
    console.log(`Column: ${cspViolationBody.columnNumber}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the values of the first report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.columnNumber")}}
