---
title: Permissions-Policy-Report-Only header
short-title: Permissions-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Permissions-Policy-Report-Only
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Permissions-Policy-Report-Only
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Permissions-Policy-Report-Only`** {{Glossary("response header")}} provides a mechanism for website administrators to report on violations of a {{HTTPHeader("Permissions-Policy")}} without enforcing them.
This allows testing and fixing of [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) issues before a policy is deployed.

The syntax and behavior is exactly the same as for `Permissions-Policy` except:

- The policy is not enforced.
- Policy violation report objects ({{domxref("PermissionsPolicyViolationReport")}}) have a `body.disposition` value of `"report"` instead of `"enforce"`.

See {{HTTPHeader("Permissions-Policy")}} for more information (most of its content has not been duplicated below).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
# Single directive
Permissions-Policy-Report-Only: <directive>=<allowlist>

# Single directive with reporting endpoint
Permissions-Policy-Report-Only: <directive>=<allowlist>;report-to=<endpoint>

# Multiple directives, with and without server reporting endpoints
Permissions-Policy-Report-Only: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

## Examples

### Basic usage

SecureCorp Inc. wants to disable the {{domxref("Geolocation")}} API in its application.
Before rolling out the policy using `Permissions-Policy`, it adds the `Permissions-Policy-Report-Only` and {{HTTPHeader("Reporting-Endpoints")}} headers as shown below:

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy-Report-Only: geolocation=();report-to=geo_endpoint
```

By specifying `geolocation=()` for the origin list, it is a violation for any browsing context to access geolocation (this includes `<iframe>`s), regardless of origin.
The `report-to` parameter indicates that reports will be sent to the endpoint named `geo_endpoint`.
The mapping between `geo_endpoint` and the URL where reports are to be sent is provided in `Reporting-Endpoints`.

A violation occurs when a page attempts to use the blocked feature, for example:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

The [report payload](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) sent to the endpoint will have the same structure as the JSON sample shown below.
This is the same as a report for `Permissions-Policy` except for the value of `body.disposition`.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "report", // A violation that is reported but not enforced
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Chrome's server-side serialization of violation reports uses `policyId` rather than [`featureId`](/en-US/docs/Web/API/PermissionsPolicyViolationReport#featureid) for the feature name in the `body` of a server report.
> The {{domxref("PermissionsPolicyViolationReport")}} returned by a [`ReportingObserver`](/en-US/docs/Web/API/ReportingObserver) follows the specification.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} and {{DOMxRef("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- {{domxref("PermissionsPolicyViolationReport")}}
- {{domxref("ReportingObserver")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
