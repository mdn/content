---
title: Server
slug: Web/HTTP/Headers/Server
page-type: http-header
browser-compat: http.headers.Server
---

{{HTTPSidebar}}

The **`Server`** header describes the software used by the origin server that handled the request and generated a response.

> [!WARNING]
> The presence of this header in responses, especially when it contains fine-grained implementation details about server software, may make known vulnerabilities easier to detect.

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

- `<product>`
  - : A name of the software or the product that handled the request.
    Usually in a format similar to {{HTTPHeader('User-Agent')}}.

Too much detail in the `Server` header is not advised for response latency and for the security reasons mentioned above.
It's debatable whether obscuring the information in this header provides much benefit because fingerprinting server software is possible via other means.
In general, a more robust approach to server security is to ensure software is regularly updated or patched against known vulnerabilities instead.

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
- [HTTP Observatory](/en-US/observatory)
- [Prevent information disclosure via HTTP headers](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
