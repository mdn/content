---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
page-type: http-header
browser-compat: http.headers.Sec-WebSocket-Extensions
spec-urls: https://datatracker.ietf.org/doc/html/rfc6455#section-11.3.2
---

{{HTTPSidebar}}

The HTTP **Sec-WebSocket-Extensions** {{glossary("request header", "request")}} and {{glossary("response header")}} is used in the [WebSocket](/en-US/docs/Web/API/WebSockets_API) opening [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to negotiate a protocol extension used by the client and server.

In a request the header specifies one or more extensions that the web application would like to use, in order of preference.
These can be added as in multiple headers, or as comma separate values added to a single header.

In a response the header can only appear once, where it specifies the extension selected by the server from the client's preferences.
This value must be the first extension that the server supports from the list provided in the request header.

The request header is automatically added by the browser based on its own capabilities, and does not depend on parameters passed to the constructor when the `WebSocket` is created.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Syntax

Request

```http
Sec-WebSocket-Extensions: <extensions>
```

Response

```http
Sec-WebSocket-Extensions: <selected-extension>
```

## Directives

- `<extensions>`
  - : A comma-separated list of extensions to request (or for the server to agree to support).
    These should be selected from the [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name).
    Extensions which take parameters delineate them with semicolons.

## Examples

### WebSocket opening handshake

The HTTP request below shows the opening handshake where a client supports the `permessage-deflate` and `client_max_window_bits` extensions.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

The request below with separate headers for each extension is equivalent:

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate
Sec-WebSocket-Extensions: client_max_window_bits
```

The response below might be sent from a server to indicate that it will support the `permessage-deflate` extension:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Extensions: permessage-deflate
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- [The WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) and [Subprotocols](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
