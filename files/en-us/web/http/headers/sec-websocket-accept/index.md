---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
tags:
  - Draft
  - HTTP
  - NeedsCompatTable
  - NeedsContent
  - Reference
  - Sec-WebSocket-Accept
  - WebSockets
  - header
browser-compat: http.headers.Sec-WebSocket-Accept
---
{{HTTPSidebar}}

The **Sec-WebSocket-Accept** header is used in the websocket opening
handshake. It would appear in the response headers. That is, this is header is sent from
server to client to inform that server is willing to initiate a websocket connection.

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
Sec-WebSocket-Accept: <hashed key>
```

## Directives

- \<hashed key>
  - : The server takes the value of the Sec-WebSocket-Key sent in the handshake request,
    appends `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`, takes SHA-1 of the new
    value, and is then [base64](/en-US/docs/Glossary/Base64)
    encoded.

## Examples

```http
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Sec-WebSocket-Key")}}

## Browser compatibility

{{Compat}}
