---
title: Sec-Fetch-Site
slug: Web/HTTP/Headers/Sec-Fetch-Site
page-type: http-header
browser-compat: http.headers.Sec-Fetch-Site
---

{{HTTPSidebar}}

The **`Sec-Fetch-Site`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} indicates the relationship between a request initiator's origin and the origin of the requested resource.

In other words, this header tells a server whether a request for a resource is coming from the same origin, the same site, a different site, or is a "user initiated" request. The server can then use this information to decide if the request should be allowed.

Same-origin requests would usually be allowed by default, but what happens for requests from other origins may further depend on what resource is being requested, or information in other {{Glossary("Fetch metadata request header","Fetch metadata request headers")}}. By default, requests that are not accepted should be rejected with a {{HTTPStatus("403")}} response code.

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
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## Directives

- `cross-site`
  - : The request initiator and the server hosting the resource have a different site (i.e. a request by "potentially-evil.com" for a resource at "example.com").
- `same-origin`
  - : The request initiator and the server hosting the resource have the same {{Glossary("origin")}} (same scheme, host and port).
- `same-site`
  - : The request initiator and the server hosting the resource have the same scheme, domain and/or subdomain, but not necessarily the same port.
- `none`
  - : This request is a user-originated operation. For example: entering a URL into the address bar, opening a bookmark, or dragging-and-dropping a file into the browser window.

## Examples

A fetch request to `https://mysite.example/foo.json` originating from a web page on `https://mysite.example` (with the same port) is a same-origin request.
The browser will generate the `Sec-Fetch-Site: same-origin` header as shown below, and the server will typically allow the request:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

A fetch request to the same URL from another site, for example `potentially-evil.com`, causes the browser to generate a different header (e.g. `Sec-Fetch-Site: cross-site`), which the server can choose to accept or reject:

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related headers

  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-User")}}
  - {{HTTPHeader("Sec-Fetch-Dest")}}

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
