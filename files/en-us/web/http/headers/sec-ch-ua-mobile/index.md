---
title: Sec-CH-UA-Mobile
slug: Web/HTTP/Headers/Sec-CH-UA-Mobile
tags:
  - Sec-CH-UA-Mobile
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-UA-Mobile
---
{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA-Mobile`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header indicates whether the browser is on a mobile device.
It can also be used by a desktop browser to indicate a preference for a "mobile" user experience.

`Sec-CH-UA-Mobile` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints).
Unless blocked by a user agent permission policy, it is sent by default, without the server opting in by sending {{HTTPHeader("Accept-CH")}}.

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
Sec-CH-UA-Mobile: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indicates that the user-agent prefers a mobile experience (true).
    `?0` indicates that user-agent does not prefer a mobile experience (false).

## Examples

As `Sec-CH-UA-Mobile` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints) it is typically sent in all requests.

A desktop browser would usually send requests with the following header:

```http
Sec-CH-UA-Mobile: ?0
```

A browser on a mobile device would usually send requests with the following header:

```http
Sec-CH-UA-Mobile: ?1
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
