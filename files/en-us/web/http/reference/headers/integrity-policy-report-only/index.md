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

The header values are defined as [structured field dictionaries](https://www.rfc-editor.org/rfc/rfc8941.html#name-dictionaries) with the following keys:

- `blocked-destinations`
  - : Defines an [inner list](https://www.rfc-editor.org/rfc/rfc8941.html#name-inner-lists) of [request destinations](/en-US/docs/Web/API/Request/destination) to be blocked. The only currently supported value is `"script"`.
- `sources`
  - : Defines an [inner list](https://www.rfc-editor.org/rfc/rfc8941.html#name-inner-lists) of integrity sources. The default and only currently supported value is `"inline"`.
- `endpoints`
  - : Defines an [inner list](https://www.rfc-editor.org/rfc/rfc8941.html#name-inner-lists) of [reporting endpoints](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#endpoint).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Integrity-Policy")}}
- [Integrity Policy](/en-US/docs/Web/Security/Subresource_Integrity#integrity_policy)
