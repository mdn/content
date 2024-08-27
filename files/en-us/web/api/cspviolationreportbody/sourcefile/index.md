---
title: "CSPViolationReportBody: sourceFile property"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.sourceFile
---

{{APIRef("Reporting API")}}

The **`sourceFile`** read-only property of the {{domxref("CSPViolationReportBody")}} interface indicates the path of the source file that caused the reported CSP violation.

This property is most useful alongside {{domxref("CSPViolationReportBody.lineNumber")}} and {{domxref("CSPViolationReportBody.columnNumber")}}, which provide the location of the violation within the file.

## Value

A string, or `null` if the path is not known.

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

Note that while there might be multiple reports in the returned array, for brevity we only log the values of the first element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.sourceFile")}}
