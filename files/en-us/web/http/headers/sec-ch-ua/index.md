---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-UA
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user-agent's branding and significant version information.

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

The **`Sec-CH-UA`** header provides the brand and significant version for each brand associated with the browser in a comma-separated list.

A brand is a commercial name for the user agent like: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox, and Safari.
A user agent might have several associated brands.
For example, Opera, Chrome, and Edge are all based on Chromium, and will provide both brands in the **`Sec-CH-UA`** header.

The _significant version_ is the "marketing" version identifier that is used to distinguish between major releases of the brand.
For example a Chromium build with _full version number_ "96.0.4664.45" has a significant version number of "96".

The header therefore allows the server to customize its response based on both shared brands and on particular customizations in their respective versions.

`Sec-CH-UA` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints).
Unless blocked by a user agent permission policy, it is sent by default, without the server opting in by sending {{HTTPHeader("Accept-CH")}}.

The header may include "fake" brands in any position and with any name.
This is a feature designed to prevent servers from rejecting unknown user agents outright, forcing user agents to lie about their brand identity.

> **Note:** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} is the same as **`Sec-CH-UA`**, but includes the full version number rather than the significant version number for each brand.

## Syntax

A comma separated list of brands in the user agent brand list, and their associated significant version number.
The syntax for a single entry has the following format:

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### Directives

- `<brand>`
  - : A brand associated with the user agent, like "Chromium", "Google Chrome", or an intentionally incorrect brand like `"Not A;Brand"`.
- `<significant version>`
  - : The "marketing" version number associated with distinguishable web-exposed features.

## Examples

`Sec-CH-UA` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints).
Unless explicitly blocked by a user agent policy, it will be sent in all requests (without the server having to opt in by sending {{HTTPHeader("Accept-CH")}}).

Strings from Chromium, Chrome, Edge, and Opera desktop browsers are shown below.
Note that they all share the "Chromium" brand, but have an additional brand indicating their origin.
They also have an intentionally incorrect brand string, which may appear in any position and have different text.

```http
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```http
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
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
