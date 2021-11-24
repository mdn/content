---
title: Vary
slug: Web/HTTP/Headers/Vary
tags:
  - HTTP
  - Reference
  - Response
  - Response Header
  - header
browser-compat: http.headers.Vary
---
{{HTTPSidebar}}

The **`Vary`** HyperText Transfer Protocol (HTTP) response header determines how to match
future request headers. This information is required to decide whether or not a cached response can be served instead of requesting a fresh one from the origin server. This response header is used by the server to indicate the headers it used when selecting a representation of a resource in a [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) algorithm.

The `Vary` header should be set on a {{HTTPStatus("304")}}
`Not Modified` response exactly like it would have been set on an equivalent {{HTTPStatus("200")}} `OK` response.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directives

- \*
  - : Each request for a URL is supposed to be treated as a unique and uncacheable
    request. A better way to indicate this is to use {{HTTPHeader("Cache-Control")}}:
    `no-store`, which is clearer to read and also signals that the object should never be stored.
- \<header-name>
  - : A comma-separated list of header names to consider when deciding whether or not a cached response can be used.

## Examples

### Dynamic serving

When using the `Vary: User-Agent` header, caching servers should consider
the user agent when deciding whether or not to serve the page from cache. For example, if you
are serving different content to mobile users, using this header can help you to avoid a cache
mistakenly serving a desktop version of your site to your mobile users. This header can help Google
and other search engines to discover the mobile version of a page and might also tell
them that no [Cloaking](https://en.wikipedia.org/wiki/Cloaking) is intended.

```
Vary: User-Agent
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## See also

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
