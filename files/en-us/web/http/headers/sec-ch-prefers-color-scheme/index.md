---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
tags:
  - Sec-CH-Prefers-Color-Scheme
  - Client hint
  - HTTP
  - HTTP Header
  - prefers-color-scheme
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-Prefers-Color-Scheme
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-Prefers-Color-Scheme`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user's preference for light or dark color themes. A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting.

If a server signals to a client via the {{httpheader("Accept-CH")}} header that it accepts `Sec-CH-Prefers-Color-Scheme`, the client can then respond with this header to indicate the user's preference for a specific color scheme. The server can send the client appropriately adapted content, for example, images or CSS, to display light text on dark background on subsequent rendered content.

This header is modeled on the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} media query.

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

The **`Sec-CH-Prefers-Color-Scheme`** header expesses the user's media preference to see content in dark or light color schemes, allowing sites to obtain it at request time to inline the right CSS for performance reasons. If server inlines CSS like that, it might want to to include {{HTTPHeader("Vary")}} header with `Sec-CH-Prefers-Color-Scheme` to specify that the response is tailored for a particular color scheme. Value reported by `Sec-CH-Prefers-Color-Scheme` should be equivalent to the same value useed in CSS Media Queries [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) and the JavaScript API {{domxref("Window.matchMedia()")}}.

`Sec-CH-Prefers-Color-Scheme` is a high entropy hint so the site needs to opt into receiving it by sending an appropriate response header {{HTTPHeader("Accept-CH")}}. The user agent may intentionally omit the `Sec-CH-Prefers-Color-Scheme` header to preserve user privacy since the reported user preference could in theiry be used for user fingerprinting.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Directives

- `<preference>`

  - : The user agent's preference for dark or light content. This is often taken from the underlying operating system's setting. The value of this directive can be either `light` or `dark`. A string indicating the user preference, either `"light"` or `"dark"`.

## Examples

The client makes an initial request to the server:

```http
GET / HTTP/1.1
Host: example.com
```

The server responds, telling the client via {{httpheader("Accept-CH")}} that it accepts `Sec-CH-Prefers-Color-Scheme`. In this example {{httpheader("Critical-CH")}} is also used, indicating that `Sec-CH-Prefers-Color-Scheme` is considered a [critical client hint](/en-US/docs/Web/HTTP/Client_hints#critical_client_hints).

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> **Note:** We've also specified `Sec-CH-Prefers-Color-Scheme` in the {{httpheader("Vary")}} header to indicate to the browser that the served content will differ based on this header value, even if the URL stays the same, so the browser shouldn't just use an existing cached response and instead should cache this response separately. Each header listed in the `Critical-CH` header should also be present in the `Accept-CH` and `Vary` headers.

The client automatically retries the request (due to `Critical-CH` being specified above), telling the server via `Sec-CH-Prefers-Color-Scheme` that it has a user preference for dark content:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

The client will include the header in subsequent requests in the current session unless the `Accept-CH` changes in responses to indicate that it is no longer supported by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- `prefers-color-scheme` CSS Media Query](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
