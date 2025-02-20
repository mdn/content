---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA-Bitness
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The HTTP **`Sec-CH-UA-Bitness`** {{Glossary("request header")}} is a [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) which provides the "bitness" of the user-agent's underlying CPU architecture.
This is the size in bits of an integer or memory address—typically 64 or 32 bits.

This might be used by a server, for example, to select and offer the correct binary format of an executable for a user to download.

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
Sec-CH-UA-Bitness: <bitness>
```

## Directives

- `<bitness>`
  - : A string indicating the underlying platform architecture bitness, such as: `"64"`, `"32"`.

## Examples

### Using Sec-CH-UA-Bitness

A server requests the `Sec-CH-UA-Bitness` header by including {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Bitness` header to subsequent requests.
For example, on a Windows based 64-bit computer, the client might add the header as shown:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Bitness: "64"
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
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
