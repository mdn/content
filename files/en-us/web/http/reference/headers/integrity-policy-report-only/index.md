---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Integrity-Policy-Report-Only
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Integrity-Policy-Report-Only`** response header allows website administrators to report on resources that the user agent loads that would violate [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees if the integrity policy was enforced (using the {{HTTPHeader("Integrity-Policy")}} header).

Reports may be generated for requests on specified [request destinations](#blocked-destinations) that omit integrity metadata, or that are made in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.
For reports to be sent to a reporting endpoint, the `Integrity-Policy-Report-Only` header must specify a valid reporting endpoint name that matches an endpoint declared using the {{HTTPHeader("Reporting-Endpoints")}} header.
Reports are generated using the [Reporting API](/en-US/docs/Web/API/Reporting_API), and may also be observed in the page for which the integrity policy is being reported, using a [`ReportingObserver`](/en-US/docs/Web/API/ReportingObserver).
The format of the report body is given by the {{domxref("IntegrityViolationReportBody")}} dictionary (a JSON-serialized form of this body is sent in POSTs to reporting server endpoints).

The header allows developers to test [integrity policies](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy) and fix any content issues before eventually deploying an {{HTTPHeader("Integrity-Policy")}} header to enforce the policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Integrity-Policy-Report-Only: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
```

The header values are defined as structured field dictionaries with the following keys:

- `blocked-destinations`
  - : A list of [request destinations](/en-US/docs/Web/API/Request/destination) that must include valid integrity metadata.
    Allowed values are:
    - `script`
      - : Script resources.
    - `style`
      - : Stylesheet resources.

- `sources` {{optional_inline}}
  - : A list of integrity sources that must include integrity metadata.
    Allowed values are:
    - `inline`
      - : The integrity metadata source is inline to the content, such as the [integrity attribute](/en-US/docs/Web/API/HTMLScriptElement/integrity).
        This is the default.

        As this is the default and only value, omitting `sources` is equivalent to specifying `sources=(inline)`.

- `endpoints` {{optional_inline}}
  - : A list of [reporting endpoint names](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint) that indicate where reports will be sent.
    The reporting endpoints must be defined in a {{httpheader("Reporting-Endpoints")}} header.

## Examples

### Reporting when scripts lack integrity metadata

This example shows a document that reports when any {{htmlelement("script")}} (or `HTMLScriptElement`) does not specify an `integrity` attribute, or when a script resource is requested in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

Note that the `integrity-endpoint` used in `Integrity-Policy-Report-Only` is defined in the {{httpheader("Reporting-Endpoints")}} header.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

The [report payload](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) might look like this.

```json
{
  "type": "integrity-violation",
  "url": "https://example.com",
  "body": {
    "documentURL": "https://example.com",
    "blockedURL": "https://example.com/main.js",
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

- {{HTTPHeader("Integrity-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
