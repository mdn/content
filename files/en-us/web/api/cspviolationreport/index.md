---
title: CSPViolationReport
slug: Web/API/CSPViolationReport
page-type: web-api-interface
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.csp-violation
---

{{APIRef("Reporting API")}}

The `CSPViolationReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a report that is generated when a document violates its [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP).

Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, and a serialized version can be sent to [reporting server endpoints](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

## Instance properties

- `body`
  - : The body of the report.
    This is an object with the following properties:
    - {{domxref("CSPViolationReport.blockedURL","blockedURL")}}
      - : A string representing either the type or the URL of the resource that was blocked because it violates the CSP.
    - {{domxref("CSPViolationReport.columnNumber", "columnNumber")}}
      - : The column number in the script at which the violation occurred.
    - {{domxref("CSPViolationReport.disposition","disposition")}}
      - : A string indicating whether the violation was enforced or only reported.
        This can have the value `"enforce"` or `"reporting"`.
    - {{domxref("CSPViolationReport.documentURL","documentURL")}}
      - : A string representing the URL of the document or worker in which the violation was found.
    - {{domxref("CSPViolationReport.effectiveDirective","effectiveDirective")}}
      - : A string representing the directive whose enforcement uncovered the violation.
    - {{domxref("CSPViolationReport.lineNumber", "lineNumber")}}
      - : The line number in the script at which the violation occurred.
    - {{domxref("CSPViolationReport.originalPolicy","originalPolicy")}}
      - : A string containing the policy whose enforcement uncovered the violation.
    - {{domxref("CSPViolationReport.referrer","referrer")}}
      - : A string representing the URL for the referrer of the resources whose policy was violated, or `null`.
    - {{domxref("CSPViolationReport.sample","sample")}}
      - : A string representing a sample of the resource that caused the violation, usually the first 40 characters.
        This will only be populated if the resource is an inline script, event handler, or style — external resources causing a violation will not generate a sample.
    - {{domxref("CSPViolationReport.sourceFile","sourceFile")}}
      - : If the violation occurred as a result of a script, this will be the URL of the script; otherwise, it will be `null`.
        Both `columnNumber` and `lineNumber` should have non-null values if this property is not `null`.
    - {{domxref("CSPViolationReport.statusCode","statusCode")}}
      - : A number representing the HTTP status code of the document or worker in which the violation occurred.

- `type`
  - : The string `"csp-violation"`, indicating that this is a CSP violation report.
- `url`
  - : A string representing the URL of the document that generated the report.

## Description

CSP violation reports may be created when a webpage attempts to load a resource that violates a [CSP](/en-US/docs/Web/HTTP/Guides/CSP) set using the {{HTTPHeader("Content-Security-Policy")}} or {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP headers.

You can monitor for CSP violation reports within the page that sets the policy using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you create a {{domxref("ReportingObserver")}} object to listen for reports, passing a callback method and an (optional) `options` property specifying the types of reports that you want to report on.
The callback method is then called with reports of the requested types, passing a report object.
For CSP violations, the object will be a `CSPViolationReport` instance (which has the [`type`](#type) property set to `"csp-violation"`).

The structure of a typical report is shown below.
Note that we can see the URL of both the page that had its policy violated (`url`), the document that attempted to load the resource (`body.documentURL`) and the resource that was blocked from loading (`body.blockedURL`).
We can also see that the violation was caused by the page attempting to load a script element with a source from another origin, which violated the `body.originalPolicy`, and that the violations was enforced (and not just reported).

```json
{
  "type": "csp-violation",
  "url": "https://url-of-page-enforcing-policy",
  "body": {
    "sourceFile": null,
    "lineNumber": null,
    "columnNumber": null,
    "documentURL": "https://url-of-document-attmpting-to-load-resource-in-violation",
    "referrer": "",
    "blockedURL": "https://url-of-blocked-resource.js",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self';",
    "sample": "",
    "disposition": "enforce",
    "statusCode": 200
  }
}
```

Violation reports may also sent as a JSON object in a `POST` to one or more configured [reporting server endpoints](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).
Reporting server endpoint names are specified in the [`report-to`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) policy directive of the {{HTTPHeader("Content-Security-Policy")}} or {{HTTPHeader("Content-Security-Policy-Report-Only")}} header.
Valid endpoint names and their mapping to a particular URL are defined using the {{httpheader("Reporting-Endpoints")}} header.

> [!NOTE]
> CSP violation reports sent by the Reporting API, when an endpoint is specified using the CSP [`report-to`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) directive, are similar (but not identical) to the "CSP report" [JSON objects](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax) sent when endpoints are specified using the [`report-uri`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) directive.
> The Reporting API and `report-to` directive are intended to replace the older report format and the `report-uri` directive.

The structure of the server report is almost exactly the same as `CSPViolationReport`, except that it additionally includes `age` and `user_agent` fields.

```json
{
  "age": "176279",
  "type": "csp-violation",
  "url": "https://url-of-page-enforcing-policy",
  "body": {
    "sourceFile": null,
    "lineNumber": null,
    "columnNumber": null,
    "documentURL": "https://url-of-document-attmpting-to-load-resource-in-violation",
    "referrer": "",
    "blockedURL": "https://url-of-blocked-resource.js",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "default-src 'self';",
    "sample": "",
    "disposition": "enforce",
    "statusCode": 200
  },
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
}
```

## Examples

### Using the `ReportingObserver` interface

To obtain a `CSPViolationReport` object, you must configure your page so that a CSP violation will occur.
In this example, we will set our CSP to only allow content from the site's own origin, and then attempt to load a script from `apis.google.com`, which is an external origin.

First, we will set our {{HTTPHeader("Content-Security-Policy")}} header in the HTTP response:

```http
Content-Security-Policy: default-src 'self';
```

or in the HTML [`<meta>`](/en-US/docs/Web/HTML/Reference/Elements/meta) element:

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
Note that the report is an instance of the `CSPViolationReport` and the `type` is `"csp-violation"`.

```json
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
As you can see from the example below, the `type` is `"csp-violation"` and the `body` property is a serialization of the `CSPViolationReport` object:

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

- {{domxref("ReportingObserver")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-ReportOnly")}}
- {{domxref("SecurityPolicyViolationEvent")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
