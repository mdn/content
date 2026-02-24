---
title: IntegrityViolationReport
slug: Web/API/IntegrityViolationReport
page-type: web-api-interface
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.integrity-violation
spec-urls: https://w3c.github.io/webappsec-subresource-integrity/#report-violations
---

{{APIRef("Reporting API")}}

The `IntegrityViolationReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a report that is generated when a document violates its [Integrity Policy](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy).

Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, and a serialized version can be sent to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

## Instance properties

- `body`
  - : The body of the report.
    This is an object with the following properties:
    - `blockedURL`
      - : A string representing the URL of the resource blocked by an enforced integrity policy (or just reported for a [reportOnly](#reportonly) policy).
    - `documentURL`
      - : A string representing the URL of the document that is attempting to load the resource.
    - `destination`
      - : A string indicating the [`Request.destination`](/en-US/docs/Web/API/Request/destination#script) of the resource that was blocked.
        This can currently only be `"script"`.
    - `reportOnly`
      - : A boolean: `false` if the policy was enforced, and `true` if the violation was only reported.
        The values indicate that the policy was set with {{httpheader(Integrity-Policy)}} and {{httpheader(Integrity-Policy-Report-Only)}}, respectively.

- `type`
  - : The string `"integrity-violation"` indicating that this is an integrity violation report.
- `url`
  - : A string representing the URL of the document that generated the report.

## Description

Integrity Policy violations are reported when a document attempts to load a resource that does not meet the [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity) guarantees of a policy set using either the {{httpheader("Integrity-Policy")}} or {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers.

Specifically, a report is sent when a document attempts to load a {{htmlelement("script")}} resource (or other [request destination](/en-US/docs/Web/API/Request/destination) listed in the policy) that does not have valid integrity metadata, or to make a request in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

You can monitor for integrity violation reports within the page that sets the policy using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you create a {{domxref("ReportingObserver")}} object to listen for reports, passing a callback method and an (optional) `options` property specifying the types of reports that you want to report on.
The callback method is then called with reports of the requested types, passing a report object.
For integrity violations, the object will be an `IntegrityViolationReport` instance (which has the [`type`](#type) property set to `"integrity-violation"`).

The structure of a typical report is shown below.
Note that we can see the URL of both the page that had its policy violated (`url`), the document that attempted to load the resource (`body.documentURL`), and the resource that was blocked from loading (`body.blockedURL`).
We can also see that the report was due to loading a script, and that it was triggered by a violation that was enforced (and not just reported).

```json
{
  "type": "integrity-violation",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "body": {
    "documentURL": "https://localhost:8443/",
    "blockedURL": "https://url-of-blocked-resource.js",
    "destination": "script",
    "reportOnly": false
  }
}
```

Violation reports may also sent as a JSON object in a `POST` to one or more configured [reporting server endpoints](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).
Reporting server endpoint names are specified in the [`endpoints` list](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) when setting {{httpheader("Integrity-Policy")}} or {{httpheader("Integrity-Policy-Report-Only")}}.
Valid endpoint names and their mapping to a particular URL are defined using the {{httpheader("Reporting-Endpoints")}} header.

The structure of the server report is almost exactly the same as `IntegrityViolationReport`, except that it additionally includes `age` and `user_agent` fields.

```json
{
  "age": "176279",
  "body": {
    "documentURL": "https://localhost:8443/",
    "blockedURL": "https://url-of-blocked-resource.js",
    "destination": "script",
    "reportOnly": false
  },
  "type": "integrity-violation",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
}
```

## Examples

### Using the `ReportingObserver` interface

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
As you can see from the example below, the `type` is `"integrity-violation"` and the `body` property is a serialization of this `IntegrityViolationReport` object:

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
- [Integrity Policy](/en-US/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy) in [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity#integrity_policy)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
