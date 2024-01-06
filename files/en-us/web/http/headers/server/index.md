---
title: Server
slug: Web/HTTP/Headers/Server
page-type: http-header
browser-compat: http.headers.Server
---

{{HTTPSidebar}}

The **`Server`** header describes the
software used by the origin server that handled the request — that is, the server that
generated the response.

> **Warning:** Avoid overly-detailed `Server` values, as they can reveal information that
> may make it (slightly) easier for attackers to exploit known security holes.

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
Server: <product>
```

## Directives

- \<product>
  - : A name of the software or the product that handled the request. Usually in a format
    similar to {{HTTPHeader('User-Agent')}}.

How much detail to include is an interesting balance to strike; exposing the OS version
is probably a bad idea, as mentioned in the earlier warning about overly-detailed
values. However, exposed Apache versions helped browsers to work around a bug of the
versions with {{HTTPHeader('Content-Encoding')}} and
{{HTTPHeader('Range')}} in combination.

## Examples

```http
Server: Apache/2.4.1 (Unix)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Allow")}}
