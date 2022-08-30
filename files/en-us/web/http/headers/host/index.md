---
title: Host
slug: Web/HTTP/Headers/Host
tags:
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Host
---
{{HTTPSidebar}}

The **`Host`** request header specifies the host and port
number of the server to which the request is being sent.

If no port is included, the default port for the service requested is implied (e.g.,
`443` for an HTTPS URL, and `80` for an HTTP URL).

A `Host` header field must be sent in all HTTP/1.1 request messages. A
{{HTTPStatus("400")}} (Bad Request) status code may be sent to any HTTP/1.1 request
message that lacks or contains more than one `Host` header field.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Host: <host>:<port>
```

## Directives

- \<host>
  - : the domain name of the server (for virtual hosting).
- \<port> {{optional_inline}}
  - : TCP port number on which the server is listening.

## Examples

```http
Host: developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
