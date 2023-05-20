---
title: Sec-Fetch-User
slug: Web/HTTP/Headers/Sec-Fetch-User
page-type: http-header
browser-compat: http.headers.Sec-Fetch-User
---

{{HTTPSidebar}}

The **`Sec-Fetch-User`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} is only sent for requests initiated by user activation, and its value will always be `?1`.

A server can use this header to identify whether a navigation request from a document, iframe, etc., was originated by the user.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes (prefix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-User: ?1
```

## Directives

The value will always be `?1`. When a request is triggered by something other than a user activation, the spec requires browsers to omit the header completely.

## Examples

If a user clicks on a page link to another page on the same origin, the resulting request would have the following headers:

```http
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related headers

  - {{HTTPHeader("Sec-Fetch-Dest")}}
  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
