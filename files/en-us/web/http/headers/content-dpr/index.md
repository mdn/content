---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
tags:
  - Content-DPR
  - Client hints
  - HTTP
  - HTTP Header
  - Response header
  - Deprecated
  - Non-standard
  - Exerimental
browser-compat: http.headers.Content-DPR
---
{{HTTPSidebar}} {{deprecated_header}}{{securecontext_header}}

The **`Content-DPR`** response header is used to confirm the _image_ device to pixel ratio in requests where the screen {{HTTPHeader("DPR")}} [client hint](/en-US/docs/Glossary/Client_hints) was used to select an image resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}},
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

If the {{HTTPHeader("DPR")}} client hint is used to select an image the server must specify `Content-DPR` in the response. If the value in `Content-DPR` is different from the {{HTTPHeader("DPR")}} value in the request (i.e. image DPR is not the same as screen DPR) then the client must use the `Content-DPR` for determining intrinsic image size and scaling the image.

If the `Content-DPR` header appears more than once in a message the last occurrence is used.

> **Note:**
>
> - `Content-DPR` was removed from the client hints specification in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07). The [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints) spec proposes to replace this header by specifying intrinsic resolution/dimensions in EXIF metadata.

## Syntax

```
Content-DPR: <number>
```

## Directives

- `<number>`
  - : The image device pixel ratio, calculated according to the following formula:
    Content-DPR = _Selected image resource size_ / (_Width_ / _DPR_)

## Examples

See the [`DPR`](/en-US/docs/Web/HTTP/Headers/DPR#examples) header example.

## Browser compatibility

{{Compat}}

## See also

- [Adapting to Users with Client Hints](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints) (developer.google.com)
- Device client hints

  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
