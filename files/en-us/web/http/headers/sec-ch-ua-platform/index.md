---
title: Sec-CH-UA-Platform
slug: Web/HTTP/Headers/Sec-CH-UA-Platform
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA-Platform
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA-Platform`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the platform or operating system on which the user agent is running.
For example: "Windows" or "Android".

`Sec-CH-UA-Platform` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints).
Unless blocked by a user agent permission policy, it is sent by default (without the server opting in by sending {{HTTPHeader("Accept-CH")}}).

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
Sec-CH-UA-Platform: <platform>
```

### Directives

- `<platform>`
  - : One of the following strings: `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"`, or `"Unknown"`.

## Examples

As `Sec-CH-UA-Platform` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints) it is typically sent in all requests.

A browser running on a macOS computer might add the following header to all requests.

```http
Sec-CH-UA-Platform: "macOS"
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
