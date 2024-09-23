---
title: "CSPViolationReportBody: originalPolicy property"
short-title: originalPolicy
slug: Web/API/CSPViolationReportBody/originalPolicy
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.originalPolicy
---

{{APIRef("Reporting API")}}

The **`originalPolicy`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) whose enforcement uncovered the violation.

This is the string in the {{HTTPHeader("Content-Security-Policy")}} HTTP response header that contains the list of [directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) and their values that make the CSP policy.
Note that differs from the {{domxref("CSPViolationReportBody.effectiveDirective","effectiveDirective")}}, which is the specific directive that is effectively being violated (and which might not be explicitly listed in the policy if `default-src` is used).

## Value

A string representing the policy whose enforcement uncovered the violation.

## Examples

### CSP inline script violation

This example triggers a CSP violation using an inline script, and reports the violation using a {{domxref("ReportingObserver")}}.
In particular, it logs the `effectiveDirective` and the `originalPolicy`, making the difference clear.

#### HTML

The HTML file below uses the [`<meta>`](/en-US/docs/Web/HTML/Element/meta) element to set the {{httpheader('Content-Security-Policy')}} `default-src` to `self`, which allows scripts and other resources to be loaded from the same domain, but does not allow inline scripts to be executed.
The document also includes an inline script, which should trigger a CSP violation.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; report-to csp-endpoint" />
    <!-- This is the (original) CSP policy -->
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
Each time the callback function is invoked, we get the body of the first entry of the reports array, and use it to log the effectiveDirective and `originalPolicy` of the violation to the console.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`effectiveDirective: ${reports[0].body.effectiveDirective}`);
    // effectiveDirective: script-src-elem
    console.log(`originalPolicy: ${reports[0].body.originalPolicy}`);
    // originalPolicy: default-src 'self'; report-to csp-endpoint
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

The console output for the above code is:

```plain
effectiveDirective: script-src-elem
originalPolicy: default-src 'self'; report-to csp-endpoint
```

Note that the `originalPolicy` matches the `<meta>` content of the `Content-Security-Policy` directive in the HTML, and specifies that the policy is `self` by default (`default-src 'self'`).

The `effectiveDirective` is `script-src-elem`, which specifies valid sources for JavaScript {{htmlelement("script")}} elements.
This is the specific directive that has effectively been violated, even though `default-src` was set in the policy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}}
