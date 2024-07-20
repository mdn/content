---
title: Reporting-Endpoints
slug: Web/HTTP/Headers/Reporting-Endpoints
page-type: http-header
browser-compat: http.headers.Reporting-Endpoints
---

{{HTTPSidebar}}

The HTTP **`Reporting-Endpoints`** response header allows website administrators to specify one or more endpoints that are used to receive errors such as CSP violation reports, {{HTTPHeader("Cross-Origin-Opener-Policy")}} reports, or other generic violations.

This header can be used in combination with the {{HTTPHeader("Content-Security-Policy")}} header {{CSP("report-to")}} directive.
For more details on setting up CSP reporting, see the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP#enabling_reporting) documentation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, <endpoint>
```

- \<endpoint>
  - : A reporting endpoint in the format `{endpoint-name}="{URL}"`.
    The endpoints must have valid URIs as strings in the format `endpoint-name-"{report-URL}"` and non-secure endpoints are ignored.
    A comma-separated list of endpoints may be provided.

## Examples

### Setting a CSP violation report endpoint

The following example shows how the `Reporting-Endpoints` response header is used in conjunction with the {{HTTPHeader("Content-Security-Policy")}} header to indicate where CSP violation reports are sent:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### Specifying multiple reporting endpoints

It's possible to specify multiple endpoints that can be used for different types of violation reports:

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("report-to")}} directive
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP#enabling_reporting) guide
