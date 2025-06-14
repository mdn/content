---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
page-type: http-header
browser-compat: http.headers.IntegrityPolicy
---

{{HTTPSidebar}}

The HTTP **`Integrity-Policy`** response header allows website administrators to ensure that all resources the user agent loads (of a certain type) have [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees.
It does so by blocking requests (of certain [request destinations](/en-US/docs/Web/API/Request/destination)) without integrity metadata or in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode from ever being made, as well as reporting them as violations.

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
  - : Defines a list of [request destinations](/en-US/docs/Web/API/Request/destination) to be blocked. The only allowed value is `script`.
- `sources` {{optional_inline}}
  - : Defines a list of integrity sources. The default and only currently supported value is `inline`. As a result, adding `sources=(inline)` to the header has a similar effect as omitting `sources`.
- `endpoints` {{optional_inline}}
  - : Defines a list of [reporting endpoints](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint). The reporting endpoints need to be defined in a {{httpheader("Reporting-Endpoints")}} header.

## Examples

### Blocking and reporting when scripts lack integrity metadata

This example shows a document that blocks and reports when any {{htmlelement("script")}} (or `HTMLScriptElement`) does not specify an `integrity` attribute, or when a script resource is requested in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

Note that the `integrity-endpoint` used in `Integrity-Policy` is defined in the {{httpheader("Reporting-Endpoints")}} header.

```http
Reporting-Endpoints: integrity-endpoint=https://example.com/integrity, backup-integrity-endpoint=https://report-provider.example/integrity
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, backup-integrity-endpoint)
```

The report payload might look like this.

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
