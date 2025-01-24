---
title: Sec-WebSocket-Version
slug: Web/HTTP/Headers/Sec-WebSocket-Version
page-type: http-header
browser-compat: http.headers.Sec-WebSocket-Version
spec-urls: https://datatracker.ietf.org/doc/html/rfc6455#section-11.3.5
---

{{HTTPSidebar}}

The HTTP **Sec-WebSocket-Version** {{glossary("request header", "request")}} and {{glossary("response header")}} is used in the [WebSocket](/en-US/docs/Web/API/WebSockets_API) opening [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to indicate the WebSocket protocol supported by the client, and the protocol versions supported by the server if it does _not_ support the version specified in the request.

The header can only appear once in a request, and specifies the WebSocket version that web application is using.
The current version of the protocol at time of writing is 13.
The header is automatically added to requests by user agents when a {{domxref("WebSocket")}} connection is established.

The server uses the version to determine if it can understand the protocol.
If the server doesn't support the version, or any header in the handshake is not understood or has an incorrect value, the server should send a response with status {{httpstatus("400", "400 Bad Request")}} and immediately close the socket.
It should also include `Sec-WebSocket-Version` in the `400` response, listing the versions that it does support.
The versions can be specified in individual headers, or as comma-separate values in a single header.

The header should not be sent in responses if the server understands the version specified by the client.

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

Request

```http
Sec-WebSocket-Version: <version>
```

Response (on error only):

```http
Sec-WebSocket-Version: <server-supported-versions>
```

## Directives

- `<version>`
  - : The WebSocket protocol version the client wishes to use when communicating with the server.
    This number should be the most recent version possible listed in the [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number).
    The most recent final version of the WebSocket protocol is version 13.
- `<server-supported-versions>`
  - : On error, a comma-delineated list of the WebSocket protocol versions supported by the server.
    The header is not sent in responses if `<version>` is supported.

## Examples

### WebSocket opening handshake

The version supported by the client is specified in the original `WebSocket` [handshake request](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake).
For the current protocol, the version is "13", as shown below.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

If the server supports version 13 of the protocol, then `Sec-WebSocket-Version` will not appear in the response.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [The WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
