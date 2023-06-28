---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
page-type: http-method
browser-compat: http.methods.CONNECT
---

{{HTTPSidebar}}

The **HTTP `CONNECT` method** starts two-way communications
with the requested resource. It can be used to open a tunnel.

For example, the `CONNECT` method can be used to access websites that use
{{Glossary("SSL")}} ({{Glossary("HTTPS")}}). The client asks an HTTP {{Glossary("Proxy
  server")}} to tunnel the [TCP](/en-US/docs/Glossary/TCP) connection to
the desired destination. The server then proceeds to make the connection on behalf of
the client. Once the connection has been established by the server, the
{{Glossary("Proxy server")}} continues to proxy the TCP stream to and
from the client.

`CONNECT` is a hop-by-hop method.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/en-US/docs/Learn/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
CONNECT www.example.com:443 HTTP/1.1
```

## Example

Some proxy servers might need authority to create a tunnel. See also the
{{HTTPHeader("Proxy-Authorization")}} header.

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
