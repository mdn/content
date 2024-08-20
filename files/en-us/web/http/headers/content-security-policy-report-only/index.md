---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

The HTTP **`Content-Security-Policy-Report-Only`** response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects.
This allows CSP violations to be caught and repaired quickly during testing.

It is used in exactly the same way as {{httpheader("Content-Security-Policy")}} but violations are not enforced.
The CSP {{CSP("report-to")}} directive must be specified for the reports to be sent: if it is not, the operation won't have any effect.

Violation reports are sent using the [Reporting API](/en-US/docs/Web/API/Reporting_API), to endpoints that are defined in a {{HTTPHeader("Reporting-Endpoints")}} HTTP response header, and selected using the CSP {{CSP("report-to")}} directive.

For more information, see [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) guide.

> [!NOTE]
> The header can also be used with the deprecated {{CSP("report-uri")}} directive (this is being replaced by {{CSP("report-to")}}).
> The usage and resulting report syntax is slightly different, and is documented in the `report-uri` topic.

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
      <th colspan="2" scope="row">
        This header is not supported inside a {{HTMLElement("meta")}} element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; ...; <policy-directive>; report-to <endpoint-name>
```

## Directives

The directives of the {{HTTPHeader("Content-Security-Policy")}} header can also be applied to `Content-Security-Policy-Report-Only`, except for the `sandbox` directive, which is ignored when used with `Content-Security-Policy-Report-Only`.

The CSP {{CSP("report-to")}} directive should be used with this header or it will no effect.

## Examples

In order to use the {{CSP("report-to")}} directive, you first need to define the corresponding endpoint using the {{httpheader("Reporting-Endpoints")}} HTTP response header.
In the example below we define just one endpoint named `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

We might then define the destination of the report using `report-to` and `report-uri` as shown below.
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
