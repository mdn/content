---
title: IntegrityViolationReportBody
slug: Web/API/IntegrityViolationReportBody
page-type: web-api-interface
status:
  - experimental
browser-compat: http.headers.Integrity-Policy
spec-urls: https://w3c.github.io/webappsec-subresource-integrity/#report-violations
---

{{APIRef("Reporting API")}} {{SecureContext_Header}}{{SeeCompatTable}}

The `IntegrityViolationReportBody` dictionary is an extension of the [Reporting API](/en-US/docs/Web/API/Reporting_API) that represents the body of an [Integrity Policy](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy) violation report.

Integrity violation reports can be reported to [reporting server endpoints](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) or via a {{domxref("ReportingObserver")}}.
They have a {{domxref("Report.type","type")}} of `"integrity-violation"`, a {{domxref("Report.url","url")}} indicating the document that contains the violation, and a {{domxref("Report.body","body")}} property that is an object matching this dictionary.

{{InheritanceDiagram}}

## Instance properties

- `blockedURL` {{ReadOnlyInline}}
  - : A string representing the URL of the resource blocked by an enforced integrity policy (or just reported for a [reportOnly](#reportonly) policy).
- `documentURL` {{ReadOnlyInline}}
  - : A string representing the URL of the document that is attempting to load the resource.
- `destination` {{ReadOnlyInline}}
  - : A string indicating the [`Request.destination`](/en-US/docs/Web/API/Request/destination#script) of the resource that was blocked.
    This can currently only be `"script"`.
- `reportOnly` {{ReadOnlyInline}}
  - : A boolean: `false` if the policy was enforced, and `true` if the violation was only reported.

## Description

Integrity Policy violations are reported when a document attempts to load a resource that does not meet the [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees of a policy set using either the {{httpheader("Integrity-Policy")}} or {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers.

Specifically, a report is sent when a document attempts to load a {{htmlelement("script")}} resource (or other [request destination](/en-US/docs/Web/API/Request/destination) listed in the policy) that does not have valid integrity metadata, or to make a request in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

Violation reports may be obtained in a violating document using a {{domxref("ReportingObserver")}} callback (defined in the {{domxref("ReportingObserver/ReportingObserver","ReportingObserver()")}} constructor), filtering on report objects that have a `type` of `"integrity-violation"`.

Violation reports may also be sent as JSON objects in `POST` requests to the [`endpoints`](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) specified in the {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} headers.
The JSON report objects are a serialization of the reports returned in the {{domxref("ReportingObserver")}}, and therefore also have a `type` of `"integrity-violation"`, and a `body` property that is a serialization of this object.
Note that endpoint values set in the policy must map to identifiers set using the {{HTTPHeader("Reporting-Endpoints")}} header.

## Examples

### Reporting using the API

This example shows how you can obtain Integrity Policy violation reports using a {{domxref("ReportingObserver")}}.

First we set a page's integrity policy using the {{httpheader("Integrity-Policy")}}.
The policy below reports and blocks resource loading of any {{htmlelement("script")}} element or {{domxref("HTMLScriptElement")}} object that does not specify an `integrity` attribute, or when a script resource is requested in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.
Note that for this example we're only interested in reporting the violations using the API, so we're omitting the reporting endpoints:

```http
Integrity-Policy: blocked-destinations=(script)
```

Next, we'll assume that our page includes the following element to load a script.
Because we want to trigger a violation, it omits the `integrity` attribute used to check the script matches our expected version.
We could also omit the `cross-origin` attribute so the request is sent in `no-cors` mode.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

> [!NOTE]
> A script that complies with the policy might look like this:
>
> ```html
> <script
>   src="https://example.com/example-framework.js"
>   integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
>   crossorigin="anonymous"></script>
> ```

To observe violations within the page, we construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"integrity-violation"`, passing a callback that will receive and log the reports.
This code needs to be loaded before the script that causes the violation, in the same page:

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["integrity-violation"],
    buffered: true,
  },
);

observer.observe();
```

Above, we log each violation report object and a JSON-string version of the object, which might look similar to the object below.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/example-framework.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

### Sending a report to a reporting endpoint

Configuring a web page to send an Integrity Policy violation report to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) is very similar to the previous example.

The main difference is that we need to specify one or more reporting endpoints where we want the reports to be sent, using the {{httpheader("Reporting-Endpoints")}} response header, and then reference these in the `endpoints` field when setting the policy.

You can see this below, where we first define two endpoints — `integrity-endpoint` and `backup-integrity-endpoint` — and then reference them in our policy:

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

We can trigger a violation by loading an external script from the page that does not meet the subresource integrity guidelines.
Just to differ from the previous example, here we send the request in `no-cors` mode:

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"></script>
```

The violation report will then be sent to the indicated endpoint as a JSON file.
As you can see from the example below, the `type` is `"integrity-violation"` and the `body` property is a serialization of this `IntegrityViolationReportBody` object:

The report in this case would look the same as our JSON report in the previous example.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/example-framework.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReportingObserver")}}
- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
