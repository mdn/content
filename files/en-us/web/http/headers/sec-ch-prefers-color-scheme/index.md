---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-Prefers-Color-Scheme
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request header")}} is a [media feature client hint](/en-US/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) which provides the user's preference for light or dark color themes.
A user indicates their preference through an operating system setting (for example, light or dark mode) or a user agent setting.

If a server signals to a client via the {{httpheader("Accept-CH")}} header that it accepts `Sec-CH-Prefers-Color-Scheme`, the client can then respond with this header to indicate the user's preference for a specific color scheme. The server can send the client appropriately adapted content including images or CSS to display a light or dark mode for subsequent rendered content.

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
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Usage notes

The **`Sec-CH-Prefers-Color-Scheme`** header allows sites to obtain user color scheme preference at request time; they could then choose to provide the relevant CSS for the user's preference inline, for performance reasons. If the server inlines the CSS, it might want to include a {{HTTPHeader("Vary")}} response header specifying `Sec-CH-Prefers-Color-Scheme`, to indicate that the response is tailored for a particular color scheme.

If performance is not a critical consideration in this context, you could instead handle the user's color scheme preference using the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query, and/or the {{domxref("Window.matchMedia()")}} API.

`Sec-CH-Prefers-Color-Scheme` is a high entropy hint so the site needs to opt into receiving it by sending an appropriate {{HTTPHeader("Accept-CH")}} response header. A user agent may intentionally omit the `Sec-CH-Prefers-Color-Scheme` header to preserve user privacy since the user's preference could, in theory, be used for fingerprinting.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Directives

- `<preference>`
  - : A string indicating the user agent's preference for dark or light content: `"light"` or `"dark"`.
    The value may originate from a corresponding setting in the underlying operating system.

## Examples

### Using Sec-CH-Prefers-Color-Scheme

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

> [!NOTE]
> We've also specified `Sec-CH-Prefers-Color-Scheme` in the {{httpheader("Vary")}} header to indicate that responses should be separately cached based on the value of this header (even if the URL stays the same).
> Each header listed in the `Critical-CH` header should also be present in the `Accept-CH` and `Vary` headers.

The client automatically retries the request (due to `Critical-CH` being specified above), telling the server via `Sec-CH-Prefers-Color-Scheme` that it has a user preference for dark content:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

The client will include the header in subsequent requests in the current session, unless the `Accept-CH` changes in responses to indicate that it is no longer supported by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching varying responses](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}} header
- [`prefers-color-scheme` CSS Media Query](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
