---
title: Sec-CH-UA-Arch
slug: Web/HTTP/Headers/Sec-CH-UA-Arch
tags:
  - Sec-CH-UA-Arch
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-UA-Arch
---
{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA-Arch`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user-agent's underlying CPU architecture, such as ARM or x86.

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
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-UA-Arch: <arch>
```

### Directives

- `<arch>`
  - : A string indicating the underlying platform architecture, such as: `"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"`.

## Examples

A server requests the `Sec-CH-UA-Arch` header by including the {{HTTPHeader("Accept-CH")}} in a response to some request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Arch` header to subsequent requests.
For example, on a Windows X86 based computer, the client might add the header as shown:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

Note above that the [low entropy headers](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints) are added to the request even though not specified in the server response.

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
