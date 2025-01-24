---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Early-Data
---

{{SeeCompatTable}}{{HTTPSidebar}}

The HTTP **`Early-Data`** {{Glossary("request header")}} is set by an intermediary to indicate that the request has been conveyed in [TLS early data](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3), and also indicates that the intermediary understands the {{HTTPStatus("425", "425 Too Early")}} status code.

If a client has interacted with a server recently, early data (also known as zero round-trip time [(0-RTT) data](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3)) allows the client to send data to a server in the first round trip of a connection, without waiting for the TLS [handshake](/en-US/docs/Glossary/TCP_handshake) to complete.
This reduces latency for repeat connections between a client and server, but has security implications, as early data is susceptible to replay attacks.

The `Early-Data` header is **not** set by the originator of the request (i.e., a browser).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Early-Data: 1
```

## Examples

### A GET request with an Early-Data header

A client that wants to use early data can send HTTP requests immediately after sending the TLS `ClientHello`.
Sending a request in early data implies that the client is willing to retry a request in response to a {{HTTPStatus("425", "425 Too Early")}} status code, so the `Early-Data` header is not included:

```http
GET /resource HTTP/1.1
Host: example.com
```

An intermediary that forwards a request prior to the completion of the TLS handshake with its client sends it with the `Early-Data` header set to `1`:

```http
GET /resource HTTP/1.1
Host: example.com
Early-Data: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("425", "425 Too Early")}}
- [Replay Attacks on 0-RTT](https://www.rfc-editor.org/rfc/rfc8446#appendix-E.5)
