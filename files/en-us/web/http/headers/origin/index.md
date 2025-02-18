---
title: Origin
slug: Web/HTTP/Headers/Origin
page-type: http-header
browser-compat: http.headers.Origin
---

{{HTTPSidebar}}

The HTTP **`Origin`** {{Glossary("request header")}} indicates the {{glossary("origin")}} ([scheme](/en-US/docs/Web/URI/Reference/Schemes), hostname, and port) that _caused_ the request.
For example, if a user agent needs to request resources included in a page, or fetched by scripts that it executes, then the origin of the page may be included in the request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## Directives

- `null`
  - : The origin is "privacy sensitive", or is an _opaque origin_ as defined by the HTML specification (specific cases are listed in the [description](#description) section).
- `<scheme>`
  - : The protocol that is used.
    Usually, it is the HTTP protocol or its secured version, HTTPS.
- `<hostname>`
  - : The domain name or the IP address of the origin server.
- `<port>` {{optional_inline}}
  - : Port number on which the server is listening.
    If no port is given, the default port for the requested service is implied from the scheme (e.g., `80` for an HTTP URL).

## Description

The `Origin` header is similar to the {{HTTPHeader("Referer")}} header, but does not disclose the path, and may be `null`.
It is used to provide the security context for the origin request, except in cases where the origin information would be sensitive or unnecessary.

Broadly speaking, user agents add the `Origin` request header to:

- {{Glossary("CORS", "cross origin")}} requests.
- [same-origin](/en-US/docs/Web/Security/Same-origin_policy) requests except for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} requests (i.e., they are added to same-origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}, and {{HTTPMethod("DELETE")}} requests).

There are some exceptions to the above rules; for example, if a cross-origin {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} request is made in [no-cors mode](/en-US/docs/Web/API/Request/mode#value), the `Origin` header will not be added.

The `Origin` header value may be `null` in a number of cases, including (non-exhaustively):

- Origins whose [scheme](/en-US/docs/Web/URI/Reference/Schemes) is not one of `http`, `https`, `ftp`, `ws`, `wss`, or `gopher` (including `blob`, `file` and `data`).
- Cross-origin images and media data, including that in {{HTMLElement("img")}}, {{HTMLElement("video")}} and {{HTMLElement("audio")}} elements.
- Documents created programmatically using {{domxref("DOMImplementation.createDocument", "createDocument()")}}, generated from a `data:` URL, or that do not have a creator browsing context.
- Redirects across origins.
- {{HTMLElement("iframe", "iframes")}} with a sandbox attribute that doesn't contain the value `allow-same-origin`.
- Responses that are network errors.
- {{HTTPHeader("Referrer-Policy")}} set to `no-referrer` for non-`cors` request modes (e.g., simple form posts).

> [!NOTE]
> There is a more detailed listing of cases that may return `null` on Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

## Examples

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
