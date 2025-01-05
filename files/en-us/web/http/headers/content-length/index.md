---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
page-type: http-header
browser-compat: http.headers.Content-Length
---

{{HTTPSidebar}}

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
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
