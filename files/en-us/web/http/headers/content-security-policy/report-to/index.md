---
title: 'CSP: report-to'
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
tags:
  - CSP
  - Content Security Policy
  - Content-Security-Policy
  - HTTP
  - Reporting
  - Security
  - report-to
browser-compat: http.headers.Content-Security-Policy.report-to
---
{{HTTPSidebar}}

The `Content-Security-Policy`
**`Report-To`** HTTP response header field
instructs the user agent to store reporting endpoints for an origin.

```http
Content-Security-Policy: …; report-to groupname
```

The directive has no effect in and of itself, but only gains meaning in combination
with other directives.

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
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: report-to <json-field-value>;
```

## Examples

See {{HTTPHeader("Content-Security-Policy-Report-Only")}} for more information and
examples.

```http
Report-To: { "group": "csp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
Content-Security-Policy: …; report-to csp-endpoint
```

```http
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }

Content-Security-Policy: …; report-to endpoint-1
```

```http
Reporting-Endpoints: endpoint-1="https://example.com/reports"

Content-Security-Policy: …; report-to endpoint-1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
