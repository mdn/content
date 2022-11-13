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
  - : A string indicating the user preference, either `"light"` or `"dark"`.

## Examples

`Sec-CH-Prefers-Color-Scheme` is a [high entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints). A server requests the `Sec-CH-Prefers-Color-Scheme` header by including the {{HTTPHeader("Accept-CH")}} and {{HTTPHeader("Vary")}} in a response to some request from the client, using the name of the desired header as a token. The inclussion of `Vary` header is not necessary for the client to send `Sec-CH-Prefers-Color-Scheme`, but it will indicate that the provided response is tailored to a particular color scheme.

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
```

The client may choose to provide the hint, and add the `Sec-CH-Prefers-Color-Scheme` header to subsequent requests. For example, on a Windows computer set to Dark Mode, the client might add the header as shown:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-Prefers-Color-Scheme: "dark"
```

Note above that the [low entropy headers](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints) are added to the request even though not specified in the server response.

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
