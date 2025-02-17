---
title: "CSPViolationReportBody: sourceFile property"
short-title: sourceFile
slug: Web/API/CSPViolationReportBody/sourceFile
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.sourceFile
---

{{APIRef("Reporting API")}}

The **`sourceFile`** read-only property of the {{domxref("CSPViolationReportBody")}} interface indicates the URL of the source file that violated the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

For a violation triggered by the use of an inline script, `sourceFile` is the URL of the current document.
Similarly, if a document successfully loads a script that then violates the document CSP, the `sourceFile` is the URL of the script.

Note however that if a document with a CSP that blocks external resources attempts to load an external resource, `sourceFile` will be `null`.
This is because the browser extracts the value from _the global object_ of the file that triggered the violation.
Because of the CSP restriction the external resource is never loaded, and therefore has no corresponding global object.

This property is most useful alongside {{domxref("CSPViolationReportBody.lineNumber")}} and {{domxref("CSPViolationReportBody.columnNumber")}}, which provide the location within the file that resulted in a violation.

## Value

A string containing the URL of the file that triggered the violation, or `null`.

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

You can try this out using a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).
Copy the above code into `test/index.html` and `test/main.js` and run the server in the root directory.
Assuming the address of the local server is `http://127.0.0.1:9999`, you can then load the HTML file from `http://127.0.0.1:9999/test/` (or `http://127.0.0.1:9999/test/index.html`).

With the above setup, the output of the log on Chrome is:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 0
```

The result is similar for Firefox:

```plain
sourceFile: http://127.0.0.1:9999/test/
lineNumber: 15
columnNumber: 13
```

Note that the column number is different for the two browsers.
Chrome always appears to report `0`.
The value on Firefox represents the position of the first character after the end of the opening `<script>` element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.sourceFile")}}
