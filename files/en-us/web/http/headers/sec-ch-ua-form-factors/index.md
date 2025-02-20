---
title: Sec-CH-UA-Form-Factors
slug: Web/HTTP/Headers/Sec-CH-UA-Form-Factors
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA-Form-Factors
---

{{HTTPSidebar}}{{SecureContext_Header}}

The HTTP **`Sec-CH-UA-Form-Factors`** {{Glossary("request header")}} is a [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) which provides information on the user-agent's device form factor.

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
Sec-CH-UA-Form-Factors: <form-factor>
Sec-CH-UA-Form-Factors: <form-factor>, …, <form-factor>
```

### Directives

- `<form-factor>`
  - : A string indicating a common device form factor.
    All applicable form factors can be included.
    The meanings of the allowed values are:
    - `"Desktop"`
      - : A user-agent running on a personal computer.
    - `"Automotive"`
      - : A user-agent embedded in a vehicle, where the user may be responsible for operating the vehicle and have limited ability to interact.
    - `"Mobile"`
      - : Small, touch-oriented device typically carried on a user's person.
    - `"Tablet"`
      - : A touch-oriented device larger than `"Mobile"` and not typically carried on a user's person.
    - `"XR"`
      - : Immersive devices that augment or replace the environment around the user.
    - `"EInk"`
      - : A device characterized by slow screen updates and limited or no color resolution.
    - `"Watch"`
      - : A mobile device with a tiny screen (typically less than 2 inches), carried in such a way that the user can glance at it quickly.

## Examples

### Using Sec-CH-UA-Form-Factors

A server requests the `Sec-CH-UA-Form-Factors` header by including the {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Form-Factors
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Form-Factors` header to subsequent requests.
For example, the client might add the header as shown:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Form-Factors: "EInk"
```

In this case, `"EInk"` means that the device is characterized by slow screen updates and limited color resolution, and as such, responses may differ depending on this hint.

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
