---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Integrity-Policy
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Integrity-Policy`** response header allows website administrators to ensure that all resources the user agent loads (of a certain type) have [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees.

When set the user agent will block requests on specified [request destinations](#blocked-destinations) that omit integrity metadata, and will also block requests in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode from ever being made.

Violation reports may also be sent to if the header includes a reporting endpoint name that matches an endpoint declared using the {{HTTPHeader("Reporting-Endpoints")}} header.
Reports are generated using the [Reporting API](/en-US/docs/Web/API/Reporting_API), and may also be observed in the page for which the integrity policy is being enforced, using a [`ReportingObserver`](/en-US/docs/Web/API/ReportingObserver).
The format of the report body is given by the {{domxref("IntegrityViolationReportBody")}} dictionary (a JSON-serialized form of this body is sent in POSTs to reporting server endpoints).

This helps guard against content manipulation of fetched subresources.

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
Integrity-Policy: blocked-destinations=(<destination>),sources=(<source>),endpoints=(<endpoint>)
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

### Blocking and reporting when scripts lack integrity metadata

This example shows a document that blocks and reports when any {{htmlelement("script")}} (or `HTMLScriptElement`) does not specify an `integrity` attribute, or when a script resource is requested in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

Note that the `integrity-endpoint` used in `Integrity-Policy` is defined in the {{httpheader("Reporting-Endpoints")}} header.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
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

- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
