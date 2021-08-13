---
title: Pragma
slug: Web/HTTP/Headers/Pragma
tags:
  - Caching
  - Deprecated
  - HTTP
  - HTTP Header
  - Request header
  - Response header
browser-compat: http.headers.Pragma
---
{{HTTPSidebar}}

The **`Pragma`** HTTP/1.0 general header is an
implementation-specific header that may have various effects along the request-response
chain. It is used for backwards compatibility with HTTP/1.0 caches where the
{{HTTPHeader("Cache-Control")}} HTTP/1.1 header is not yet present.

> **Note:** `Pragma` is not specified for HTTP responses and is
> therefore not a reliable replacement for the general HTTP/1.1
> `Cache-Control` header, although it does behave the same as
> `Cache-Control: no-cache`, if the `Cache-Control` header field
> is omitted in a request. Use `Pragma` only for backwards compatibility with
> HTTP/1.0 clients.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}} (response behavior is not
        specified and thus implementation-specific).
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Pragma: no-cache
```

## Directives

- no-cache
  - : Same as `Cache-Control: no-cache`. Forces caches to submit the request
    to the origin server for validation before releasing a cached copy.

## Examples

```
Pragma: no-cache
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
