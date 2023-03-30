---
title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Platform-Version
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA-Platform-Version
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA-Platform-Version`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the version of the operating system on which the user agent is running.

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
Sec-CH-UA-Platform-Version: <version>
```

### Directives

- `<version>`

  - : The version string typically contains the operating system version in a string, consisting of dot-separated major, minor and patch version numbers.
    For example, `"11.0.0"`

    The version string on Linux is always empty.

## Examples

A server requests the `Sec-CH-UA-Platform-Version` header by including the {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Platform-Version` header to subsequent requests.
For example, the following request headers might be sent from a browser running on Windows 10.

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
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
- [HTTP Caching > Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
