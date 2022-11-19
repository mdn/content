---
title: Sec-CH-Save-Data
slug: Web/HTTP/Headers/Sec-CH-Save-Data
tags:
  - Sec-CH-Save-Data
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-Save-Data
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-Save-Data`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) request header indicates the user agent's preference for reduced data usage. This could be for reasons such as high transfer costs, slow connection speeds, etc.

If a server signals to a client via the {{httpheader("Accept-CH")}} header that it accepts `Sec-CH-Save-Data`, the client can then respond with this header to indicate the user's preference for reduced data usage. The server can send the client appropriately adapted content, for example, JavaScript, videos, images, or CSS, to reduce the amount of data transfered for displaying subsequent rendered content. This could include reducing the amount of images, videos, simpler CSS styles, simpler HTML markup. Further, `Sec-CH-Save-Data` should be used to reduce data sent to the client irrespective of the values of other client hints that indicate network capability, like {{HTTPHeader("Downlink")}} and {{HTTPHeader("RTT")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/en-US/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Save-Data: <boolean>
```

### Directives

- `<boolean>`

  - : `?1` indicates that the user-agent prefers experience with reduced data usage (`true`).
    `?0` indicates that user-agent prefers a full-featured experience, potentially with data-intensive components (`false`).

## Examples

The client makes an initial request to the server:

```http
GET / HTTP/1.1
Host: example.com
```

The server responds, telling the client via {{httpheader("Accept-CH")}} that it accepts `Sec-CH-Save-Data`. In this example {{httpheader("Critical-CH")}} is also used, indicating that `Sec-CH-Save-Data` is considered a [critical client hint](/en-US/docs/Web/HTTP/Client_hints#critical_client_hints).

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Save-Data
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Save-Data
```

> **Note:** We've also specified `Sec-CH-Save-Data` in the {{httpheader("Vary")}} header to indicate to the browser that the served content will differ based on this header value, even if the URL stays the same, so the browser shouldn't just use an existing cached response and instead should cache this response separately. Each header listed in the `Critical-CH` header should also be present in the `Accept-CH` and `Vary` headers.

The client automatically retries the request (due to `Critical-CH` being specified above), telling the server via `Sec-CH-Save-Data` that it has a user preference for data-reduced-motion animations:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Save-Data: ?1
```

The client will include the header in subsequent requests in the current session unless the `Accept-CH` changes in responses to indicate that it is no longer supported by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- CSS @media feature [`prefers-reduced-data`](/en-US/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- {{HTTPHeader("Downlink")}} header indicating link capacity
- {{HTTPHeader("RTT")}} header indicationg the request round-trip time
- {{HTTPHeader("Save-Data")}} header which preceded `Sec-CH-Save-Data` but could be sent without server requesting it
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
