---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
page-type: web-api-interface
browser-compat: api.CSPViolationReportBody
---

{{APIRef("Reporting API")}}{{SecureContext_Header}}

The `CSPViolationReportBody` interface contains the report data for a Content Security Policy (CSP) violation. CSP violations are thrown when the webpage attempts to load a resource that violates the CSP set by the {{HTTPHeader("Content-Security-Policy")}} HTTP header.

> **Note:** this interface is similar, but not identical to, the [JSON objects](/en-US/docs/Web/HTTP/CSP#violation_report_syntax) sent back to the [`report-uri`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) or [`report-to`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) policy directive of the {{HTTPHeader("Content-Security-Policy")}} header.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("ReportBody")}}._

- {{domxref("CSPViolationReportBody.blockedURL")}} {{ReadOnlyInline}}
  - : A string representing the URL of the resource that was blocked because it violates the CSP.
- {{domxref("CSPViolationReportBody.columnNumber")}} {{ReadOnlyInline}}
  - : The column number in the script at which the violation occurred.
- {{domxref("CSPViolationReportBody.disposition")}} {{ReadOnlyInline}}
  - : Indicates how the violated policy is configured to be treated by the user agent. This will be `"enforce"` or `"report"`.
- {{domxref("CSPViolationReportBody.documentURL")}} {{ReadOnlyInline}}
  - : A string representing the URL of the document or worker in which the violation was found.
- {{domxref("CSPViolationReportBody.effectiveDirective")}} {{ReadOnlyInline}}
  - : A string representing the directive whose enforcement uncovered the violation.
- {{domxref("CSPViolationReportBody.lineNumber")}} {{ReadOnlyInline}}
  - : The line number in the script at which the violation occurred.
- {{domxref("CSPViolationReportBody.originalPolicy")}} {{ReadOnlyInline}}
  - : A string containing the policy whose enforcement uncovered the violation.
- {{domxref("CSPViolationReportBody.referrer")}} {{ReadOnlyInline}}
  - : A string representing the URL for the referrer of the resources whose policy was violated, or `null`.
- {{domxref("CSPViolationReportBody.sample")}} {{ReadOnlyInline}}
  - : A string representing a sample of the resource that caused the violation, usually the first 40 characters. This will only be populated if the resource is an inline script, event handler, or style — external resources causing a violation will not generate a sample.
- {{domxref("CSPViolationReportBody.sourceFile")}} {{ReadOnlyInline}}
  - : If the violation occurred as a result of a script, this will be the URL of the script; otherwise, it will be `null`. Both `columnNumber` and `lineNumber` should have non-null values if this property is not `null`.
- {{domxref("CSPViolationReportBody.statusCode")}} {{ReadOnlyInline}}
  - : A number representing the HTTP status code of the document or worker in which the violation occurred.

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("ReportBody")}}._

- {{DOMxRef("CSPViolationReportBody.toJSON()")}}
  - : A _serializer_ which returns a JSON representation of the `CSPViolationReportBody` object.

## Examples

### Obtaining a `CSPViolationReportBody` object

To obtain a `CSPViolationReportBody` object, you must configure your page so that a CSP violation will occur. In this example, we will set our CSP to only allow content from the site's own origin, and then attempt to load a script from `apis.google.com`, which is an external origin.

First, we will set our {{HTTPHeader("Content-Security-Policy")}} header:

```http
Content-Security-Policy: default-src 'self';
```

Then, we will attempt to load an external script:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Finally, we will create a new {{domxref("ReportingObserver")}} object to listen for CSP violations.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    const cspViolation = reports[0].body;
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReportBody")}}
- {{domxref("ReportingObserver")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{domxref("SecurityPolicyViolationEvent")}}
