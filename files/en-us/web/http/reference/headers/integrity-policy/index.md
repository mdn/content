---
title: Integrity-Policy header
short-title: Integrity-Policy
slug: Web/HTTP/Reference/Headers/Integrity-Policy
page-type: http-header
browser-compat: http.headers.IntegrityPolicy
---

{{HTTPSidebar}}

The HTTP **`Integrity-Policy`** response header allows website administrators to ensure that all resources the user agent loads (of a certain type) have [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) guarantees.
It does so by blocking requests (of certain [request destinations](/en-US/docs/Web/API/Request/destination)) without integrity metadata or in [no-cors](/en-US/docs/Web/API/Request/mode#no-cors) mode from ever being made.

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
  - : Defines a list of [request destinations](/en-US/docs/Web/API/Request/destination) to be blocked. The only currently supported value is `"script"`.
- `sources` {{optional_inline}}
  - : Defines a list of integrity sources. The default and only currently supported value is `"inline"`.
- `endpoints` {{optional_inline}}
  - : Defines a list of [reporting endpoints](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint).

An example header might look like:

```http
Integrity-Policy: blocked-destinations=(script), endpoints=(integrity-endpoint, general-endpoint)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Integrity-Policy-Report-Only")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
