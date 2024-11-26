---
title: Trailer
slug: Web/HTTP/Headers/Trailer
page-type: http-header
browser-compat: http.headers.Trailer
---

{{HTTPSidebar}}

The HTTP **Trailer** {{glossary("request header", "request")}} and {{glossary("response header")}} allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent.
The content of a trailer field may be a message integrity check, digital signature, or post-processing status.

> [!NOTE]
> The {{HTTPHeader("TE")}} request header needs to be set to `trailers` to allow trailer fields.

> [!WARNING]
> Developers cannot access HTTP trailers via the Fetch API or XHR.
> Additionally, browsers ignore HTTP trailers, with the exception of {{HTTPHeader("Server-Timing")}}.
> See [Browser compatibility](#browser_compatibility) for more information.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Trailer: header-names
```

## Directives

- `header-names`

  - : HTTP header fields which will be present in the trailer part of chunked messages.
    The following header names are **disallowed**:

    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, and `Trailer`
    - Authentication headers (e.g., {{HTTPHeader("Authorization")}} or {{HTTPHeader("Set-Cookie")}})
    - Message framing headers (e.g., {{HTTPHeader("Transfer-Encoding")}} and {{HTTPHeader("Content-Length")}})
    - Routing headers (e.g., {{HTTPHeader("Host")}})
    - Request modifiers (e.g., controls and conditionals, like {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, or {{HTTPHeader("TE")}})

## Examples

### Chunked response using a trailing header

In this example response, the {{HTTPHeader("Expires")}} header is used at the end of the chunked message and serves as a trailing header:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Server-Timing")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
