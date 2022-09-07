---
title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version
tags:
  - Sec-CH-UA-Full-Version
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Deprecated
browser-compat: http.headers.Sec-CH-UA-Full-Version
---
{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}

> **Note:** This is being replaced by the {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}.

The **`Sec-CH-UA-Full-Version`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user-agent's full version string.

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
Sec-CH-UA-Full-Version: <version>
```

### Directives

- `<version>`
  - : A string containing the full version number, like "96.0.4664.93".

## Examples

A server requests the `Sec-CH-UA-Full-Version` header by including the {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Full-Version` header to subsequent requests.
For example, the client might add the header as shown:

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version: "96.0.4664.110"
Sec-CH-UA-Platform: "Windows"
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
