---
title: Sec-WebSocket-Protocol
slug: Web/HTTP/Headers/Sec-WebSocket-Protocol
page-type: http-header
browser-compat: http.headers.Sec-WebSocket-Protocol
spec-urls: https://datatracker.ietf.org/doc/html/rfc6455#section-11.3.4
---

{{HTTPSidebar}}

The HTTP **`Sec-WebSocket-Protocol`** {{glossary("request header", "request")}} and {{glossary("response header")}} is used in the [WebSocket](/en-US/docs/Web/API/WebSockets_API) opening [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to negotiate a [sub-protocol](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) to use in the communication.
This can be a well understood protocol, such as SOAP or WAMP, or a custom protocol understood by the client and server.

In a request the header specifies one or more WebSocket sub-protocols that the web application would like to use, in order of preference.
These can be added as protocol values in multiple headers, or as comma separate values added to a single header.

In a response it specifies the sub-protocol selected by the server.
This must be the first sub-protocol that the server supports from the list provided in the request header.

The request header is automatically added and populated by the browser using values specified by the application in the [`protocols`](/en-US/docs/Web/API/WebSocket/WebSocket#protocols) argument to the `WebSocket()`.
The sub-protocol selected by the server is made available to the web application in {{domxref("WebSocket.protocol")}}.

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

Request:

```http
Sec-WebSocket-Protocol: <sub-protocols>
```

Response:

```http
Sec-WebSocket-Protocol: <selected-sub-protocol>
```

## Directives

- `<sub-protocols>`
  - : A comma-separated list of sub-protocol names, in the order of preference.
    The sub-protocols may be selected from the [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name), or may be a custom name jointly understood by the client and the server.

## Examples

### WebSocket opening handshake

The sub-protocol is specified in the original WebSocket [handshake request](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake).
The request below shows that the client prefers `soap`, but also supports `wamp`.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Protocol: soap, wamp
```

Specifying the protocols like this has the same effect:

```http
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

The response from the server will include the `Sec-WebSocket-Protocol` header, selecting the first sub-protocol that it supports from the client's preferences.
Below that is shown as `soap`:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: soap
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [The WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) and [Subprotocols](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
