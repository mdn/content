---
title: Trailer
slug: Web/HTTP/Headers/Trailer
page-type: http-header
browser-compat: http.headers.Trailer
---

{{HTTPSidebar}}

The HTTP **Trailer** {{glossary("request header", "request")}} and {{glossary("response header")}} allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent.

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

### Server-Timing as HTTP trailer

Some browsers support showing server timing data in developer tools when the {{HTTPHeader("Server-Timing")}} header is sent as a trailer.
In the following response, the `Trailer` header is used to indicate that a `Server-Timing` header will follow the response body.
A metric `custom-metric` with a duration of `123.4` milliseconds is sent:

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Server-Timing")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
