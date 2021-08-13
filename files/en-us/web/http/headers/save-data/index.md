---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
tags:
  - Save-Data
  - Client hints
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Save-Data
---
{{HTTPSidebar}}

The **`Save-Data`** {{Glossary("Client hints","network client hint")}} request header field is a boolean which indicates the client's preference for reduced data usage. This could be for reasons such as high transfer costs, slow connection speeds, etc.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Client hints","Client hint")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

A value of `On` indicates explicit user opt-in into a reduced data usage
mode on the client, and when communicated to origins allows them to deliver alternative
content to reduce the data downloaded such as smaller image and video resources,
different markup and styling, disabled polling and automatic updates, and so on.

> **Note:** Disabling HTTP/2 Server Push ({{RFC("7540", "Server Push",
    "8.2")}}) might be desirable too for reducing data downloads.

> **Note:** The **`Save-Data`** {{Glossary("Client hints","network client hint")}} should be used to reduce data set to the client irrespective of the values of other client client hints that indicate network capability, like {{HTTPHeader("Downlink")}} and {{HTTPHeader("RTT")}}.

## Syntax

    Save-Data: <sd-token>

## Directives

- \<sd-token>
  - : A value indicating whether the client wants to opt in to reduced data
    usage mode. `on` indicates yes, while `off` (the default)
    indicates no.

## Examples

The {{HTTPHeader("Vary")}} header ensures that the content is cached properly (for
instance ensuring that the user is not served a lower-quality image from the cache when
`Save-Data` header is no longer present \[_e.g._ after having switched
from cellular to Wi-Fi]).

### With `Save-Data: on`

Request:
```
GET /image.jpg HTTP/1.0
Host: example.com
Save-Data: on
```

Response:

```
HTTP/1.0 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

### Without `Save-Data`

Request:

```
GET /image.jpg HTTP/1.0
Host: example.com
```

Response:

```
HTTP/1.0 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[...]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Help Your Users \`Save-Data\` - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Delivering Fast and Light Applications with Save-Data - Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/)
- {{HTTPHeader("Vary")}} header which indicate that the content served varies by `Save-Data` (see [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses))
- CSS @media feature [`prefers-reduced-data`](/en-US/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Adapting to Users with Client Hints](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints) (developer.google.com)
- Network client hints

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}

- {{domxref("NetworkInformation.saveData")}}
