---
title: "CSPViolationReportBody: columnNumber property"
short-title: columnNumber
slug: Web/API/CSPViolationReportBody/columnNumber
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.columnNumber
---

{{APIRef("Reporting API")}}

The **`columnNumber`** read-only property of the {{domxref("CSPViolationReportBody")}} interface indicates the column number in the source file that triggered the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) violation.

Note that the browser extracts the value from _the global object_ of the file that triggered the violation.
If the resource that triggers the CSP violation is not loaded, the value will be `null`.
See {{domxref("CSPViolationReportBody.sourceFile")}} for more information.

This property is most useful alongside {{domxref("CSPViolationReportBody.sourceFile")}} and {{domxref("CSPViolationReportBody.lineNumber")}}, as it provides the location of the column in that file and line that resulted in a violation.

## Value

An integer containing the column number that triggered the violation, or `null`.

## Examples

### CSP inline script violation

This example triggers a CSP violation using an inline script, and reports the violation using a {{domxref("ReportingObserver")}}.

#### HTML

The HTML file below uses the [`<meta>`](/en-US/docs/Web/HTML/Element/meta) element to set the {{httpheader('Content-Security-Policy')}} `default-src` to `self`, which allows scripts and other resources to be loaded from the same origin, but does not allow inline scripts to be executed.
The document also includes an inline script, which should therefore trigger a CSP violation.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <meta
      http-equiv="Reporting-Endpoints"
      content="csp-endpoint='https://example.com/csp-reports'" />
    <script src="main.js"></script>
    <title>CSP: Violation due to inline script</title>
  </head>
  <body>
    <h1>CSP: Violation due to inline script</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

The document above also loads the external script `main.js`, which is shown below.
Because this is loaded from the same domain as the HTML, it is not blocked by the CSP.

The script creates a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function is invoked, we get the body of the first entry of the reports array, and use it to log the file, line, and column of the violation to the console.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolationBody = reports[0].body;
    console.log(`sourceFile: ${cspViolationBody.sourceFile}`);
    console.log(`lineNumber: ${cspViolationBody.lineNumber}`);
    console.log(`columnNumber: ${cspViolationBody.columnNumber}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the values of the first element.

#### Results

If serving the above code using a local server (on `http://127.0.0.1:9999/`), the output of the log on Chrome is:

```plain
sourceFile: http://127.0.0.1:9999/inline/
lineNumber: 17
columnNumber: 0
```

Note that the column number is (incorrectly) set to `0`.
The result is similar for Firefox, which correctly reports the `columnNumber`.

```plain
sourceFile: http://127.0.0.1:9999/inline/
lineNumber: 17
columnNumber: 13
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.columnNumber")}}
