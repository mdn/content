---
title: CSPViolationReportBody
slug: Web/API/CSPViolationReportBody
page-type: web-api-interface
browser-compat: api.CSPViolationReportBody
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}

The `CSPViolationReportBody` interface is an extension of the [Reporting API](/en-US/docs/Web/API/Reporting_API) that represents the body of a Content Security Policy (CSP) violation report.

CSP violations are thrown when the webpage attempts to load a resource that violates the policy set by the {{HTTPHeader("Content-Security-Policy")}} HTTP header.

CSP violation reports are returned in the [reports](/en-US/docs/Web/API/ReportingObserver/ReportingObserver#reports) parameter of {{domxref("ReportingObserver")}} callbacks that have a `type` of `"csp-violation"`.
The `body` property of those reports is an instance of `CSPViolationReportBody`.

CSP violation reports may also be sent as JSON objects to the endpoint specified in the [`report-to`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) policy directive of the {{HTTPHeader("Content-Security-Policy")}} header.
These reports similarly have a `type` of `"csp-violation"`, and a `body` property containing a serialization of an instance of this interface.

> [!NOTE]
> CSP violation reports sent by the Reporting API, when an endpoint is specified using the CSP [`report-to`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) directive, are similar (but not identical) to the "CSP report" [JSON objects](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri#violation_report_syntax) sent when endpoints are specified using the [`report-uri`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) directive.
> The Reporting API and `report-to` directive are intended to replace the older report format and the `report-uri` directive.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("ReportBody")}}._

- {{domxref("CSPViolationReportBody.blockedURL")}} {{ReadOnlyInline}}
  - : A string representing either the type or the URL of the resource that was blocked because it violates the CSP.
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

To obtain a `CSPViolationReportBody` object, you must configure your page so that a CSP violation will occur.
In this example, we will set our CSP to only allow content from the site's own origin, and then attempt to load a script from `apis.google.com`, which is an external origin.

First, we will set our {{HTTPHeader("Content-Security-Policy")}} header in the HTTP response:

```http
Content-Security-Policy: default-src 'self';
```

or in the HTML [`<meta>`](/en-US/docs/Web/HTML/Element/meta) element:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
```

Then, we will attempt to load an external script:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

Finally, we will create a new {{domxref("ReportingObserver")}} object to listen for CSP violations (this will need to be loaded from the same location, before the script that causes the violation).

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Above we log the each violation report object and a JSON-string version of the object, which might look similar to the object below.
Note that the `body` is an instance of the `CSPViolationReportBody` and the `type` is `"csp-violation"`.

```js
{
    "type": "csp-violation",
    "url": "http://127.0.0.1:9999/",
    "body": {
        "sourceFile": null,
        "lineNumber": null,
        "columnNumber": null,
        "documentURL": "http://127.0.0.1:9999/",
        "referrer": "",
        "blockedURL": "https://apis.google.com/js/platform.js",
        "effectiveDirective": "script-src-elem",
        "originalPolicy": "default-src 'self';",
        "sample": "",
        "disposition": "enforce",
        "statusCode": 200
    }
}
```

### Sending a CSP violation report

Configuring a web page to send a CSP violation report is similar to the previous example.
As before, you need to configure your page so that there is a violation.

In addition, you also need to specify the endpoint(s) where the report will be sent.
A server specifies endpoints using the {{httpheader("Reporting-Endpoints")}} response header: these must be secure URLs (HTTPS).
The CSP {{CSP("report-to")}} directive is then used to specify that a particular endpoint is used for reporting CSP violations:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-report-to"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

As before, we can trigger a violation by loading an external script from a location that is not allowed by our CSP header:

```html
<!-- This should generate a CSP violation -->
<script src="https://apis.google.com/js/platform.js"></script>
```

The violation report will then be sent to the indicated endpoint as a JSON file.
As you can see from the example below, the `type` is `"csp-violation"` and the `body` property is a serialization of the `CSPViolationReportBody` object:

```json
[
  {
    "age": 53531,
    "body": {
      "blockedURL": "inline",
      "columnNumber": 59,
      "disposition": "enforce",
      "documentURL": "https://example.com/csp-report-to",
      "effectiveDirective": "script-src-elem",
      "lineNumber": 1441,
      "originalPolicy": "default-src 'self'; report-to csp-endpoint",
      "referrer": "https://www.google.com/",
      "sample": "",
      "sourceFile": "https://example.com/csp-report-to",
      "statusCode": 200
    },
    "type": "csp-violation",
    "url": "https://example.com/csp-report-to",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
  }
]
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
