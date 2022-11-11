---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
tags:
  - Sec-CH-Prefers-Reduced-Motion
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-Prefers-Reduced-Motion
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-Prefers-Reduced-Motion`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user agent's reduced motion preference, typically (but not necessarily) reflecting the operating system's corresponding setting.

If a server declares to a client via the {{httpheader("Accept-CH")}} header that it accepts `Sec-CH-Prefers-Reduced-Motion`, the client can then respond with this header to indicate the user's preference for reduced motion. The server can send the client appropriate CSS to reduce the motion of any animations presented on subsequent rendered content.

This header is modeled on the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} media query.

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
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Directives

- `<preference>`

  - : The user agent's preference for reduced-motion animations, which is often taken from the underlying operating system's setting. The value of this directive can be either `no-preference` or `reduce`.

## Examples

The client makes an initial request to the server:

```http
GET / HTTP/1.1
Host: example.com
```

The server responds, telling the client via {{httpheader("Accept-CH")}} that it accepts `Sec-CH-Prefers-Reduced-Motion`:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
```

The client then retries the request, telling the server via `Sec-CH-Prefers-Reduced-Motion` that it has a user preference for reduced-motion animations.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
