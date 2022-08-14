---
title: Referer
slug: Web/HTTP/Headers/Referer
tags:
  - HTTP
  - Reference
  - header
  - referer
  - referrer
browser-compat: http.headers.Referer
---
{{HTTPSidebar}}

The **`Referer`** HTTP request header contains an absolute or partial address of the page that makes the request.
The `Referer` header allows a server to identify a page where people are visiting it from.
This data can be used for analytics, logging, optimized caching, and more.

When you follow a link, the **`Referer`** contains the address of the page that owns the link. When you make resource requests to another domain, the **`Referer`** contains the address of the page that uses the requested resource.

The `Referer` header can contain an _origin_, _path_, and _querystring_, and may not contain URL fragments (i.e. "#section") or "username:password" information.
The request's _referrer policy_ defines the data that can be included. See {{HTTPHeader("Referrer-Policy")}} for more [information](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives) and [examples](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> **Note:** The header name "referer" is actually a misspelling of the word "referrer".
> See [HTTP referer on Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) for more details.

> **Warning:** This header may have undesirable consequences for user security and privacy.
> See [Referer header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigations.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Referer: <url>
```

## Directives

- \<url>
  - : An absolute or partial address of the web page that makes the request.
    URL fragments (i.e. "#section") and userinfo (i.e. "username:password" in "https\://username:password\@example.com/foo/bar/") are not included.
    Origin, path, and querystring may be included, depending on the [referrer policy](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives).

## Examples

```http
Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP referer on Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Fetch](/en-US/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- The obsolete {{HTTPHeader("Content-Security-Policy")}} {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} directive.
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
