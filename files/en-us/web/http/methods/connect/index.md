---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
page-type: http-method
browser-compat: http.methods.CONNECT
---

{{HTTPSidebar}}

The **`CONNECT`** HTTP method requests that a {{Glossary("Proxy server", "proxy")}} establish a HTTP tunnel to a destination server, and if successful, blindly forward data in both directions until the tunnel is closed.

The request target is unique to this method in that it consists of only the host and port number of the tunnel destination, separated by a colon (see [Syntax](#syntax) for details).
Any [2XX successful response status code](/en-US/docs/Web/HTTP/Status#successful_responses) means that the proxy will switch to 'tunnel mode' and any data in the success response body is from the server identified by the request target.

If a website is behind a proxy and it's enforced via network rules that all external traffic must pass through the proxy, the `CONNECT` method allows you to establish a {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) connection with that website:

- The client asks the proxy to tunnel the {{Glossary("TCP")}} connection to the desired destination.
- The proxy server makes a secure connection to the server on behalf of the client.
- Once the connection is established, the proxy server continues to relay the TCP stream to and from the client.

Aside from enabling secure access to websites behind proxies, a HTTP tunnel provides a way to allow traffic that would otherwise be restricted (SSH or FTP) over the HTTP(S) protocol.

`CONNECT` is a hop-by-hop method, meaning proxies will only forward the `CONNECT` request if there is another inbound proxy in front of the origin server since most origin servers do not implement `CONNECT`.

> [!WARNING]
> If you are running a proxy that supports `CONNECT`, restrict its use to a set of known ports or a configurable list of safe request targets.
> There are significant risks in establishing a tunnel to arbitrary servers, particularly when the destination is a well-known or reserved TCP port that is not intended for Web traffic.
> A loosely-configured proxy may be abused to forward traffic such as SMTP to relay spam email, for example.

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
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
CONNECT <host>:<port> HTTP/1.1
```

- `<host>`
  - : A host which may be a registered hostname (e.g., `example.com`) or an IP address (IPv4, IPv6).
- `<port>`
  - : A port number in decimal (e.g., `80`, `443`). There is no default port, so a client **must** send one.

## Examples

### Proxy authorization

A request for proxy servers that require authorization to create a tunnel looks as follows.
See the {{HTTPHeader("Proxy-Authorization")}} header for more information.

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

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{Glossary("Proxy server")}} glossary entry
- {{HTTPHeader("Proxy-Authorization")}} header
- [How To Use SSH Over An HTTP Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
