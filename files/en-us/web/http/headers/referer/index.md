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

The **`Referer`** HTTP request header contains an absolute or partial address of the page making the request. When following a link, this would be the address of the page containing the link. When making resource requests to another domain, this would be the address of the page using the resource. The `Referer` header allows servers to identify where people are visiting them from, which can then be used for analytics, logging, optimized caching, and more.

The `Referer` header may not contain URL fragments (i.e. "#section") or "username:password" information. It can potentially contain an _origin_, _path_, and _querystring_. What is sent, if anything, depends on the _referrer policy_ for the request. See {{HTTPHeader("Referrer-Policy")}} for [information](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives) and [examples](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#examples).

> **Note:** The header name "referer" is actually a misspelling of the word "referrer". See {{interwiki("wikipedia", "HTTP_referer", "HTTP referer on Wikipedia")}} for more details.

> **Warning:** Although this header has many innocent uses it can have undesirable consequences for user security and privacy. See [Referer header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigations.

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

```
Referer: <url>
```

## Directives

- \<url>
  - : An absolute or partial address of the web page making the request. URL fragments (i.e. "#section") and userinfo (i.e. "username:password" in "https\://username:password\@example.com/foo/bar/") are not included. Origin, path, and querystring may be included, depending on the [referrer policy](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives).

## Examples

```
Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{interwiki("wikipedia", "HTTP_referer", "HTTP referer on Wikipedia")}}
- [Fetch](/en-US/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- The obsolete {{HTTPHeader("Content-Security-Policy")}} {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} directive.
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
