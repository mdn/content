---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

The HTTP **`Content-Security-Policy-Report-Only`** {{Glossary("response header")}} helps to monitor Content Security Policy (CSP) violations and their effects without enforcing the security policies.
This header allows you to test or repair violations before a specific {{HTTPHeader("Content-Security-Policy")}} is applied and enforced.

The CSP {{CSP("report-to")}} directive must be specified for reports to be sent: if not, the operation won't have any effect.

Violation reports are sent using the [Reporting API](/en-US/docs/Web/API/Reporting_API) to endpoints defined in a {{HTTPHeader("Reporting-Endpoints")}} HTTP response header and selected using the CSP {{CSP("report-to")}} directive.

For more information, see our [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) guide.

> [!NOTE]
> The header can also be used with the deprecated {{CSP("report-uri")}} directive (this is being replaced by {{CSP("report-to")}}).
> The usage and resulting report syntax is slightly different; see the {{CSP("report-uri")}} topic for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This header is not supported inside a {{HTMLElement("meta")}} element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## Directives

The `Content-Security-Policy-Report-Only` header supports all {{HTTPHeader("Content-Security-Policy")}} directives except `sandbox`, which is ignored.

> [!NOTE]
> The CSP {{CSP("report-to")}} directive should be used with this header or it will have no effect.

## Examples

### Using Content-Security-Policy-Report-Only to send CSP reports

To use the {{CSP("report-to")}} directive, you first need to define a corresponding endpoint using the {{HTTPHeader("Reporting-Endpoints")}} response header.
In the example below, we define a single endpoint named `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

We can then define the destination of the report using {{CSP("report-to")}} and {{CSP("report-uri")}}, as shown below.
Note that this particular report would be triggered if the page loaded resources insecurely, or from inline code.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> The `report-to` directive is preferred over the deprecated `report-uri`, but we declare both because `report-to` does not yet have full cross-browser support.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} directive
- CSP {{CSP("report-uri")}} directive {{deprecated_inline}}
