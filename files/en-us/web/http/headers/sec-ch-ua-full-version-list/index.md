---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
tags:
  - Sec-CH-UA-Full-Version-List
  - Client hint
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Experimental
browser-compat: http.headers.Sec-CH-UA-Full-Version-List
---
{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Sec-CH-UA-Full-Version-List`** [user agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) request header provides the user-agent's branding and full version information.

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

The **`Sec-CH-UA-Full-Version-List`** header provides the brand and full version information for each brand associated with the browser, in a comma-separated list.

A brand is a commercial name for the user agent like: Chromium, Opera, Google Chrome, Microsoft Edge, Firefox, and Safari.
A user agent might have several associated brands.
For example, Opera, Chrome, and Edge are all based on Chromium, and will provide both brands in the **`Sec-CH-UA-Full-Version-List`** header.

The header therefore allows the server to customize its response based on both shared brands and on particular customizations in their specific respective builds.

The header may include "fake" brands in any position and with any name.
This is a feature designed to prevent servers from rejecting unknown user agents outright, forcing user agents to lie about their brand identity.

> **Note:** This is similar to {{HTTPHeader("Sec-CH-UA")}}, but includes the full version number instead of the significant version number for each brand.

## Syntax

A comma separated list of brands in the user agent brand list, and their associated full version number.
The syntax for a single entry has the following format:

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### Directives

- `<brand>`
  - : A brand associated with the user agent, like "Chromium", "Google Chrome".
     This may be an intentionally incorrect brand like `" Not A;Brand"` or `"(Not(A:Brand"` (the actual value is expected change over time and be unpredictable).
- `<full version>`
  - : A full version number, such as 98.0.4750.0.

## Examples

A server requests the `Sec-CH-UA-Full-Version-List` header by including the {{HTTPHeader("Accept-CH")}} in a _response_ to any request from the client, using the name of the desired header as a token:

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

The client may choose to provide the hint, and add the `Sec-CH-UA-Full-Version-List` header to subsequent requests, as shown below:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version-List: " Not A;Brand";v="99.0.0.0", "Chromium";v="98.0.4750.0", "Google Chrome";v="98.0.4750.0"
Sec-CH-UA-Platform: "Linux"
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
