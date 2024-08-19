---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.report-to
---

{{HTTPSidebar}}

The `Content-Security-Policy` **`report-to`** directive indicates the name of the endpoint that the browser should use for reporting CSP violations.

If a CSP violation occurs, a report is generated that contains a serialized version of {{domxref("CSPViolationReportBody")}}.
This report is sent to the URL that corresponds to the endpoint name, using the generic mechanisms defined in the [Reporting API](/en-US/docs/Web/API/Reporting_API).

The server must separately provide the mapping between endpoint names and their corresponding URLs in the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}} element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` is the name of an endpoint provided by the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.

It can also be the name of a group provided in the {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP response header, but this header is deprecated and should not be used.

## Usage notes

The `report-to` directive is intended to replace `report-uri`, and browsers that support `report-to` ignore the `report-uri` directive.
However, until `report-to` is broadly supported you can specify both headers as shown:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Note that other examples in this topic do not show `report-uri`.

## Examples

### Setting a CSP violation report endpoint

A server can define the mapping between endpoint names and URLs using the {{HTTPHeader("Reporting-Endpoints")}} header in the HTTP response.
Any name can be used: here we've chosen "name-of-endpoint".

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

The server can set this an endpoint name as the target for sending CSP violation reports using the `report-to` directive as shown.

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

<!-- {{HTTPHeader("Content-Security-Policy-Report-Only")}} for more information and examples. -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Reporting-Endpoints")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
