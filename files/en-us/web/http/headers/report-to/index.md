---
title: Report-To
slug: Web/HTTP/Headers/Report-To
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Report-To
---

{{HTTPSidebar}}{{deprecated_header}}{{non-standard_header}}

> [!WARNING]
> This header has been replaced by the {{HTTPHeader("Reporting-Endpoints")}} HTTP response header.
> It is a deprecated part of an earlier iteration of the [Reporting API](/en-US/docs/Web/API/Reporting_API) specification.

The HTTP **`Report-To`** {{Glossary("response header")}} allows website administrators to define named groups of endpoints that can be used as the destination for warning and error reports, such as CSP violation reports, {{HTTPHeader("Cross-Origin-Opener-Policy")}} reports, deprecation reports, or other generic violations.

`Report-To` is often used in conjunction with other headers that select a group of endpoints to use for a particular kind of report.
For example, the {{HTTPHeader("Content-Security-Policy")}} header {{CSP("report-to")}} directive can be used to select the group used for reporting CSP violations.

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
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Report-To: <json-field-value>
```

- `<json-field-value>`
  - : One or more endpoint-group definitions, defined as a JSON array that omits the surrounding `[` and `]` markers.
    Each object in the array has the following members:
    - `group`
      - : A name for the group of endpoints.
    - `max_age`
      - : The time in seconds that the browser should cache the reporting configuration.
    - `endpoints`
      - : An array of one or more URLs where the reports in the group should be sent.

## Examples

### Setting a CSP violation report endpoint

This example shows how a server might use `Report-To` to define a group of endpoints, and then set the group as the location where CSP violation reports are sent.

First a server might send a response with the `Report-To` HTTP response header as shown below.
This specifies a group of `url` endpoints identified by the group name `csp-endpoints`.

```http
Report-To: { "group": "csp-endpoints",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }
```

The server can then specify that it wants this group to be the target for sending CSP violation reports by setting the group name as the value of the {{CSP("report-to")}} directive:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoints
```

Given the headers above, any `script-src` CSP violations would result in violation reports being sent to both of the `url` values listed in `Report-To`.

### Specifying multiple reporting groups

The example below demonstrates a `Report-To` header that specifies multiple endpoint groups.
Note that each group has a unique name, and that the groups are not bounded by the array markers.

```http
Report-To: { "group": "csp-endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
```

We can select an endpoint group as the target for violation reports by name, in the same way as we did in the previous example:

```http
Content-Security-Policy: script-src https://example.com/; report-to csp-endpoint-1
```

## Specifications

This header is no longer part of any specification.
It was previously part of the [Reporting API](/en-US/docs/Web/API/Reporting_API). <!-- https://github.com/w3c/reporting/pull/197 -->

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API) and {{HTTPHeader("Reporting-Endpoints")}} header
- {{CSP("report-to")}} CSP directive
- {{HTTPHeader("Content-Security-Policy")}}, {{HTTPHeader("Content-Security-Policy-Report-Only")}} headers
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP#violation_reporting) guide
