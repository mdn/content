---
title: COEPViolationReport
slug: Web/API/COEPViolationReport
page-type: web-api-interface
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.coep
spec-urls:
  - https://html.spec.whatwg.org/multipage/browsers.html#embedder-policy-checks
  - https://html.spec.whatwg.org/multipage/browsers.html#coep
---

{{APIRef("Reporting API")}}

The `COEPViolationReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a report generated when a document violates its {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP).

Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, or a serialized version can be sent to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

## Instance properties

- `body`
  - : The body of the report, containing more information about the violation.
    This is an object with the following properties:
    - `type`
      - : A string representing the cause of the violation that triggered the report.
        This can have one of the following values:
        - `"corp"`
          - : A document with {{httpheader("Cross-Origin-Embedder-Policy")}} set to [`require-corp`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp) attempted to load a cross-origin sub-resource that does not explicitly allow itself to be embedded (by setting an appropriate {{httpheader("Cross-Origin-Resource-Policy")}}).
        - `"navigation"`
          - : An {{htmlelement("iframe")}} in a document that has either COEP `require-corp` or `credentialless` directives loads a document that:
            - Has neither COEP `require-corp` or `credentialless` directive
            - Is cross-origin with the embedding document, and does not have a CORP header that allows embedding in the parent
        - `"worker initialization"`
          - : A dedicated worker created by a document with either the COEP `require-corp` or `credentialless` directives tries to load a worker script with neither of these set.

    - `blockedURL`
      - : A string containing the URL of the resource that was blocked from loading by an enforced COEP violation.
    - `destination` {{non-standard_inline}}
      - : A string indicating the _destination_ of the of the blocked resource.
        This can can have one of the values of [`Request.destination`](/en-US/docs/Web/API/Request/destination#value).
    - `disposition`
      - : A string indicating whether the violation was enforced or only reported.
        This can have one of the following values:
        - `"enforce"`
          - : The violation caused loading of the embedded resource to be blocked.
            This is set for violations of policies set with {{httpheader("Cross-Origin-Embedder-Policy")}}.
        - `"reporting"`
          - : The violation was reported without blocking the resource from loading.
            This is set for violations of policies set with {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}.

- `type`
  - : The string `"coep"` indicating that this is a COEP violation report.

- `url`
  - : A string representing the URL of the document that generated the report.

## Description

A document's policies for loading and embedding cross-origin resources that are requested in `no-cors` mode are configured and enforced using the {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP header, and may also be reported but not enforced using the {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} header.

COEP policy violations may be reported whenever a policy set by those headers blocks (or would block) the loading of a resource.

You can monitor for COEP violation reports within the page in which they are triggered using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"coep"`, passing a callback method (optionally specifying the type of report to observe).
The callback method is called for every COEP violation with an instance of this dictionary that has the [`type`](#type) property set to `coep`.

The structure of a typical report is shown below.
Note that we can see the URL of both the page that had its policy violated (`url`) and the resource that was blocked from loading (`.blockedURL`).
We can also see that the report was triggered by a `corp` violation, and from the `.disposition` that it was enforced (and not just reported).

```json
{
  "type": "coep",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "": {
    "type": "corp",
    "blockedURL": "https://url-of-blocked-resource",
    "destination": "image",
    "disposition": "enforce"
  }
}
```

COEP violation reports can also be sent as a JSON object in a `POST` to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).
The reporting server endpoint name is specified in the [`report-to`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#report-to_endpoint_name) parameter when setting {{httpheader("Cross-Origin-Embedder-Policy")}} or {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}.
Valid endpoint names and their mapping to a particular URL are defined using the {{httpheader("Reporting-Endpoints")}} header.

The structure of the server report is almost exactly the same as `COEPViolationReport`, except that it additionally includes `age` and `user_agent` fields.

```json
{
  "age": 412139,
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
  "type": "coep",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "": {
    "type": "corp",
    "blockedURL": "https://url-of-blocked-resource",
    "destination": "image",
    "disposition": "enforce"
  }
}
```

## Examples

### Reporting using the API

This example shows how you can obtain COEP violation reports using a {{domxref("ReportingObserver")}}.

First consider the case where we have an HTML file hosted on the origin `https://example.com`, which includes in its  an {{htmlelement("img")}} element that sets as its source the (cross-origin) resource `some-image.png`.
Since the element does not set the [`cross-origin` attribute](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) attribute, it will be requested in `no-cors` mode.
By default, if `some-image.png` is not served with the {{httpheader("Cross-Origin-Embedder-Policy")}} header, this request will succeed.

```html
<img src="https://another-example.com/some-image.png" />
```

In order to ensure that the document only loads cross-origin resources that indicate that they are safe to load in our document origin, we can set the {{httpheader("Cross-Origin-Embedder-Policy")}} header with the [`require-corp`](/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp) directive as shown:

```http
Cross-Origin-Embedder-Policy: require-corp
```

This header enforces that all resources must be served with the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header and a value of `cross-origin` in order to be loaded into the document's origin (`https://example.com`).
Provided the server hosting `some-image.png` doesn't set the header we don't need to do anything else to trigger a COEP violation.

To observe violations within the page, we construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"coep"`, passing a callback that will receive and log the reports.
This code needs to be loaded before the script that causes the violation, in the same page:

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((violation) => {
    console.log(violation);
    console.log(JSON.stringify(violation));
  });
}, options);

observer.observe();
```

Above, we log each violation report object and a JSON-string version of the object, which might look similar to the object below.
Note that the `type` is `"coep"`.

```json
{
  "type": "coep",
  "url": "https://example.com",
  "": {
    "type": "corp",
    "blockedURL": "https://another-example.com/some-image.png",
    "destination": "image",
    "disposition": "enforce"
  }
}
```

The same report couple be generated using {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}, except that the [disposition](#disposition) would be reported as `"reporting"`.

### Sending a report to a reporting endpoint

Configuring a web page to send a COEP report to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) is almost the same as the previous example.
The only difference is that we need to specify a reporting endpoint where we want the reports to be sent, using the {{httpheader("Reporting-Endpoints")}} response header, and then reference these in the `report-to` parameter when setting the policy.

You can see this below, where we define the endpoint named `coep-endpoint` and then reference it in our policy:

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

The violation report will then be sent as a JSON object in a `POST` to the endpoint referenced by coep-endpoint.

The report object has the same structure as returned from the `ReportingObserver` callback except for the addition of `age` and `user_agent` properties.

```json
[
  {
    "age": 717139,
    "": {
      "blockedURL": "https://another-example.com/some-image.png",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

The same report would be generated if we set {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} in the same way, except that the [disposition](#disposition) would be set to `"reporting"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Reporting-Endpoints")}}
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
