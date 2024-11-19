---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
page-type: http-header
browser-compat: http.headers.Sec-WebSocket-Accept
spec-urls: https://datatracker.ietf.org/doc/html/rfc6455#section-11.3.3
---

{{HTTPSidebar}}

The HTTP **Sec-WebSocket-Accept** {{glossary("response header")}} is used in the [WebSocket](/en-US/docs/Web/API/WebSockets_API) opening [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to indicate that the server is willing to upgrade to a WebSocket connection.

This header must appear no more than once in the response, and has a directive value that is calculated from the {{HTTPHeader("Sec-WebSocket-Key")}} request header sent in the corresponding request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Accept: <hashed key>
```

## Directives

- `<hashed key>`
  - : If a {{HTTPHeader("Sec-WebSocket-Key")}} header was provided, the value of this header is computed by taking the value of the key, concatenating the string `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`, and taking the [SHA-1](https://en.wikipedia.org/wiki/SHA-1) hash of that concatenated string — resulting in a 20-byte value.
    That value is then [base64](/en-US/docs/Glossary/Base64) encoded to obtain the value of this property.

## Examples

### WebSocket opening handshake

The client will initiate a WebSocket handshake with a request like the following.
Note that this starts as an HTTP `GET` request (HTTP/1.1 or later) and includes the {{httpheader("Upgrade")}} header indicating the intent to upgrade to a WebSocket connection.
It also includes `Sec-WebSocket-Key`, which is used in the calculation of `Sec-WebSocket-Accept` to confirm the intent to upgrade the connection to a WebSocket connection.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

The response from the server should include the `Sec-WebSocket-Accept` header with a value that is calculated from the `Sec-WebSocket-Key` header in the request, and confirms the intent to upgrade the connection to a WebSocket connection:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [The WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
