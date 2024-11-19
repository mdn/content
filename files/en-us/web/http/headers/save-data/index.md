---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Save-Data
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Save-Data`** {{Glossary("request header")}} is a [network client hint](/en-US/docs/Web/HTTP/Client_hints#network_client_hints) which indicates the client's preference for reduced data usage.
This could be for reasons such as high transfer costs, slow connection speeds, etc.

`Save-Data` is a [low entropy hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints), and hence may be sent by the client even if not requested by the server using an {{HTTPHeader("Accept-CH")}} response header.
Further, it should be used to reduce data sent to the client irrespective of the values of other client hints that indicate network capability, like {{HTTPHeader("Downlink")}} and {{HTTPHeader("RTT")}}.

A value of `On` indicates explicit user opt-in into a reduced data usage mode on the client.
When communicated to origins, this allows them to deliver alternative content to reduce the data downloaded such as smaller image and video resources, different markup and styling, disabled polling and automatic updates, and so on.

> [!NOTE]
> Disabling HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) may reduce data downloads.
> Note that this feature is no longer supported by default in most major browser engines.

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
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Save-Data: <sd-token>
```

## Directives

- `<sd-token>`
  - : A value indicating whether the client wants to opt in to reduced data usage mode.
    `on` indicates yes, while `off` (the default) indicates no.

## Examples

### Using `Save-Data: on`

The following message requests a resource with `Save-Data` header indicating the client is opting in to reduced data mode:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

The server responds with a `200` response, and the {{HTTPHeader("Vary")}} header indicates that `Save-Data` may have been used to create the response, and caches should be aware of this header to differentiate responses:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Omitting `Save-Data`

In this case, the client requests the same resource without the `Save-Data` header:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

The server's response provides the full version of the content.
The {{HTTPHeader("Vary")}} header ensures that responses should be separately cached based on the value of the `Save-Data` header.
This can ensure that the user is not served a lower-quality image from the cache when the `Save-Data` header is no longer present (e.g., after having switched from cellular to Wi-Fi).

```http
HTTP/1.1 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS `@media` feature [`prefers-reduced-data`](/en-US/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- {{HTTPHeader("Vary")}} header which indicates that the content served varies depending on the value of `Save-Data` (see [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary))
- {{domxref("NetworkInformation.saveData")}}
- [Help Your Users `Save-Data`](https://css-tricks.com/help-users-save-data/) on css-tricks.com
- [Delivering Fast and Light Applications with Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) on web.dev
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
