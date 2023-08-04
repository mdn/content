---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Content-DPR
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

The **`Content-DPR`** response header is used to confirm the _image_ device to pixel ratio in requests where the screen {{HTTPHeader("DPR")}} [client hint](/en-US/docs/Web/HTTP/Client_hints) was used to select an image resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}},
        <a href="/en-US/docs/Web/HTTP/Client_hints">Client hint</a>
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
> - `Content-DPR` was removed from the client hints specification in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07). The [Responsive Image Client Hints](https://wicg.github.io/responsive-image-client-hints/) spec proposes to replace this header by specifying intrinsic resolution/dimensions in EXIF metadata.

## Syntax

```http
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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Device client hints

  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
