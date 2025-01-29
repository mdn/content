---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.report-to
---

{{HTTPSidebar}}

The `Content-Security-Policy` **`report-to`** directive indicates the name of the endpoint that the browser should use for reporting CSP violations.

If a CSP violation occurs, a report is generated that contains a serialized {{domxref("CSPViolationReportBody")}} object instance.
This report is sent to the URL that corresponds to the endpoint name, using the generic mechanisms defined in the [Reporting API](/en-US/docs/Web/API/Reporting_API).

The server must separately provide the mapping between endpoint names and their corresponding URLs in the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>3</td>
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
It can also be the name of a group that is provided by the server in the {{HTTPHeader("Report-To")}} {{deprecated_inline}} HTTP response header.

### Violation report syntax

A CSP violation report is a JSON-serialized {{domxref("Report")}} object instance, with a `type` property that has a value of `"csp-violation"`, and a `body` that is the serialized form of a {{domxref("CSPViolationReportBody")}} object (see the respective objects for their property definitions).
Reports are sent to the target endpoint(s) via a `POST` operation with a {{HTTPHeader("Content-Type")}} of `application/reports+json`.

The JSON for a single report might look like this:

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## Usage notes

The `report-to` directive is intended to replace `report-uri`, and browsers that support `report-to` ignore the `report-uri` directive.
However, until `report-to` is broadly supported you can specify both directives as shown:

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

Note that other examples in this topic do not show `report-uri`.

## Examples

### Setting a CSP violation report endpoint

A server can define the mapping between endpoint names and URLs using the {{HTTPHeader("Reporting-Endpoints")}} header in the HTTP response.
Any name can be used: here we've chosen `name-of-endpoint`.

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

The server can set this endpoint name as the target for sending CSP violation reports to using the `report-to` directive:

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Reporting-Endpoints")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
