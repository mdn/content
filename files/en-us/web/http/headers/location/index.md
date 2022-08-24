---
title: Location
slug: Web/HTTP/Headers/Location
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
browser-compat: http.headers.Location
---
{{HTTPSidebar}}

The **`Location`** response header indicates the URL to
redirect a page to. It only provides a meaning when served with a
`3xx` (redirection) or `201` (created) status response.

In cases of redirection, the HTTP method used to make the new request to fetch the page
pointed to by `Location` depends on the original method and the kind of
redirection:

- {{HTTPStatus("303")}} (See Other) responses always lead to the use of a
  {{HTTPMethod("GET")}} method.
- {{HTTPStatus("307")}} (Temporary Redirect) and
  {{HTTPStatus("308")}} (Permanent Redirect) don't change the method used in the
  original request.
- {{HTTPStatus("301")}} (Moved Permanently) and {{HTTPStatus("302")}} (Found) don't
  change the method most of the time, though older user-agents may (so you basically
  don't know).

All responses with one of these status codes send a `Location` header.

In cases of resource creation, it indicates the URL to the newly created resource.

`Location` and {{HTTPHeader("Content-Location")}} are different.
`Location` indicates the target of a redirection or the URL of a newly
created resource. {{HTTPHeader("Content-Location")}} indicates the direct URL to
use to access the resource when [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) happened,
without the need of further content negotiation. `Location` is a header
associated with the response, while {{HTTPHeader("Content-Location")}} is associated
with the entity returned.

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
Location: <url>
```

## Directives

- \<url>
  - : A relative (to the request URL) or absolute URL.

## Examples

```http
Location: /index.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Location")}}
- Status of responses including a `Location` header: {{HTTPStatus("201")}},
  {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}},
  {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
