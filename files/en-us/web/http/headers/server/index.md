---
title: Server
slug: Web/HTTP/Headers/Server
tags:
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Server
---
{{HTTPSidebar}}

The **`Server`** header describes the
software used by the origin server that handled the request — that is, the server that
generated the response.

> **Warning:** Avoid overly-detailed `Server` values, as they can reveal information that
> might make it (slightly) easier for attackers to exploit known security holes.

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

```
Server: <product>
```

## Directives

- \<product>
  - : The name of the software or product that handled the request. Usually in a format
    similar to {{HTTPHeader('User-Agent')}}.

How much detail to include is an interesting balance to strike; exposing the OS version
is probably a bad idea, as mentioned in the earlier warning about overly-detailed
values. However, exposed Apache versions helped browsers work around a bug those
versions had with {{HTTPHeader('Content-Encoding')}} combined with
{{HTTPHeader('Range')}}.

## Examples

```
Server: Apache/2.4.1 (Unix)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Allow")}}
