---
title: Content-Length header
short-title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
page-type: http-header
browser-compat: http.headers.Content-Length
sidebar: http
---

The HTTP **`Content-Length`** header indicates the size, in bytes, of the message body sent to the recipient.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Length: <length>
```

## Directives

- `<length>`
  - : The length in octets.

## HTTP version comparison

`Content-Length` is required in HTTP/1.0.
`Content-Length` is limited in that the message size must be known up front, before sending the headers, which is a problem when content is dynamically generated or streamed.

In HTTP/1.1 either `Content-Length` or {{httpheader("Transfer-Encoding","Transfer-Encoding: chunked")}} can be used to indicate message size (`Content-Length` is ignored if `Transfer-Encoding: chunked` is set).
At least one of these is required for persistent connections.
Note that `Transfer-Encoding: chunked` allows the content to be sent out in parts as its size is calculated, which is recommended better when the message size is not known up front.

In HTTP/2 `Content-Length` is optional and redundant, because the content length may be inferred from DATA frames. It may still be included for backwards compatibility.
Note that `Transfer-Encoding` should not be used in HTTP/2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Transfer-Encoding")}}
