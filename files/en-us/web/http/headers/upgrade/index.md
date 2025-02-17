---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
page-type: http-header
browser-compat: http.headers.Upgrade
---

{{HTTPSidebar}}

The HTTP `Upgrade` {{glossary("request header", "request")}} and {{glossary("response header")}} can be used to upgrade an already-established client/server connection to a different protocol (over the same transport protocol).
For example, it can be used by a client to upgrade a connection from HTTP/1.1 to HTTP/2, or an HTTP(S) connection to a WebSocket connection.

> [!WARNING]
> HTTP/2 explicitly disallows the use of this mechanism and header; it is specific to HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

A comma-separated list of one or more protocols:

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Directives

- `<protocol>`
  - : Protocols are listed, comma-separated, in order of descending preference.
- `<protocol_version>` {{optional_inline}}
  - : An optional protocol version may be provided prefixed with a `/` forward slash.

## Description

The `Upgrade` header field may be used by clients to invite a server to switch to one (or more) of the listed protocols, in descending preference order.
For example, the client might send a `GET` request as shown, listing the preferred protocols to switch to (in this case `example/1` and `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> The {{HTTPHeader("Connection")}} header with type `upgrade` must _always_ be sent with the `Upgrade` header.

The server can ignore the request, for any reason, in which case it should respond as though the `Upgrade` header had not been sent (for example, with a {{HTTPStatus(200, "200 OK")}}).
If the server will upgrade the connection, it must:

1. Send back a {{HTTPStatus(101, "101 Switching Protocols")}} response status with an `Upgrade` header that specifies the protocol(s) being switched to. For example:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Send a response to the original request _using the new protocol_ (the server may only switch to a protocol with which it can complete the original request).

A server may also send the header as part of a {{HTTPStatus("426")}} `Upgrade Required` response, to indicate that the server won't perform the request using the current protocol, but might do so if the protocol is changed. The client can then request a protocol change using the process above.

More detail and examples are provided in the topic [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Examples

### Upgrade header with multiple protocols

The following request lists multiple protocols in descending preference:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Upgrading to WebSocket

This is a common combination of headers to use to begin upgrading a HTTP connection to WebSockets.
See [Upgrading to a WebSocket connection](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection) for more information.

```http
Connection: Upgrade
Upgrade: websocket
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
