---
title: Sec-WebSocket-Key
slug: Web/HTTP/Headers/Sec-WebSocket-Key
page-type: http-header
browser-compat: http.headers.Sec-WebSocket-Key
spec-urls: https://datatracker.ietf.org/doc/html/rfc6455#section-11.3.1
---

{{HTTPSidebar}}

The HTTP **Sec-WebSocket-Key** {{glossary("request header")}} is used in the [WebSocket](/en-US/docs/Web/API/WebSockets_API) opening [handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to allow a client (user agent) to confirm that it "really wants" to request that an HTTP client is upgraded to become a WebSocket.

The value of the key is computed using an algorithm defined in the WebSocket specification, so this _does not provide security_.
Instead, it helps to prevent non-WebSocket clients from inadvertently, or through misuse, requesting a WebSocket connection.

This header is automatically added by user agents when a script opens a WebSocket; it cannot be added using the {{domxref("Window/fetch", "fetch()")}} or {{domxref("XMLHttpRequest.setRequestHeader()")}} methods.

The server's {{HTTPHeader("Sec-WebSocket-Accept")}} response header should include a value computed based upon the specified key value.
The user agent can then validate this before this before confirming the connection.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-WebSocket-Key: <key>
```

## Directives

- `<key>`
  - : The key for this request to upgrade.
    This is a randomly selected 16-byte nonce that has been base64-encoded and isomorphic encoded.
    The user agent adds this when initiating the WebSocket connection.

## Examples

### WebSocket opening handshake

The client will initiate a WebSocket handshake with a request like the following.
Note that this starts as an HTTP `GET` request (HTTP/1.1 or later), in addition to `Sec-WebSocket-Key`, the request includes the {{httpheader("Upgrade")}} header, indicating the intent to upgrade from HTTP to a WebSocket connection.

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

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
- [The WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) in _Writing WebSocket servers_
- [HTTP Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
