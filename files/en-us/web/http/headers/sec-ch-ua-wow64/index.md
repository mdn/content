---
title: Sec-CH-UA-WoW64
slug: Web/HTTP/Headers/Sec-CH-UA-WoW64
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA-WoW64
---

{{HTTPSidebar}}{{SecureContext_Header}}

The HTTP **`Sec-CH-UA-WoW64`** {{Glossary("request header")}} is a [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) indicating if a 32-bit user-agent application is running on a 64-bit Windows machine.

[WoW64](https://en.wikipedia.org/wiki/WoW64) was commonly used to know which [NPAPI](https://en.wikipedia.org/wiki/NPAPI) plugin installer should be offered for download.
This client hint header is used for backwards compatibility considerations, to provide a one-to-one mapping from the user-agent string of certain browsers to UA client hints.

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

## Syntax

```http
Sec-CH-UA-WoW64: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indicates that the user agent's binary is running in 32-bit mode on 64-bit Windows (true), while `?0` means that it is not (false).

## Examples

### Using Sec-CH-UA-WoW64

A server requests the `Sec-CH-UA-WoW64` header by including the {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

The client may choose to provide the hint, and add the `Sec-CH-UA-WoW64` header to subsequent requests.
Adding `Sec-CH-UA-WoW64: ?1` means the user agent's binary is running in 32-bit mode on 64-bit Windows:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-WoW64: ?1
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Form-Factors: "Desktop"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}} header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) on developer.chrome.com
