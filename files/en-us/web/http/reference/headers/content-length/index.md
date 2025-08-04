---
title: Content-Length header
short-title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
page-type: http-header
browser-compat: http.headers.Content-Length
sidebar: http
---

The HTTP **`Content-Length`** header indicates the size, in bytes, of the message body sent to the recipient.

`Content-Length` is limited in that the message size must be known up front, before sending the headers, which is a problem when content is dynamically generated or streamed.

- In HTTP/1.0, it is required.
- In HTTP/1.1, it could be replaced with {{httpheader("Transfer-Encoding", "Transfer-Encoding: chunked")}} for responses sent out in parts as its size is calculated.
- In HTTP/2, `Content-Length` is redundant, because the content length may be inferred from DATA frames. It may still be included for backwards compatibility.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Transfer-Encoding")}}
