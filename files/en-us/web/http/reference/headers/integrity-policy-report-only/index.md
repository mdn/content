---
title: Integrity-Policy-Report-Only header
short-title: Integrity-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Integrity-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.IntegrityPolicyReportOnly
---

{{HTTPSidebar}}

The HTTP **`Integrity-Policy-Report-Only`** response header allows website administrators to ensure that all resources the user agent loads (of a certain type) have [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees.

It does so by _reporting_ on requests (of certain [request destinations](/en-US/docs/Web/API/Request/destination)) without integrity metadata or in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode.

This helps make developers aware of content manipulation of fetched subresources, and allows them to test [integrity policies](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy) and eventually deploy an {{HTTPHeader("Integrity-Policy")}} header without breakage.

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
  - : Defines a list of [request destinations](/en-US/docs/Web/API/Request/destination) to be blocked. The only currently supported value is `script`.
- `sources` {{optional_inline}}
  - : Defines a list of integrity sources. The default and only currently supported value is `"inline"`.
- `endpoints` {{optional_inline}}
  - : Defines a list of [reporting endpoints](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint).
    Reports are sent to all valid endpoints.

An example header might look like:

```http
Integrity-Policy-Report-Only: blocked-destinations=(script), endpoints=(integrity-endpoint, some-other-integrity-endpoint)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Integrity-Policy")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
