---
title: NEL
slug: Web/HTTP/Headers/NEL
page-type: http-header
status:
  - experimental
browser-compat: http.headers.NEL
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`NEL`** response header is used to configure network request logging.

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
  </tbody>
</table>

## Syntax

```http
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Network Error Logging (NEL) explainer](/en-US/docs/Web/HTTP/Network_Error_Logging)
