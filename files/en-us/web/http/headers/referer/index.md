---
title: Referer
slug: Web/HTTP/Headers/Referer
page-type: http-header
browser-compat: http.headers.Referer
---

{{HTTPSidebar}}

The HTTP **`Referer`** {{Glossary("request header")}} contains the absolute or partial address from which a resource has been requested.
The `Referer` header allows a server to identify referring pages that people are visiting from or where requested resources are being used.
This data can be used for analytics, logging, optimized caching, and more.

When you click a link, the `Referer` contains the address of the page that includes the link.
When you make resource requests to another domain, the `Referer` contains the address of the page that uses the requested resource.

The `Referer` header can contain an _origin_, _path_, and _querystring_, and may not contain [URL fragments](/en-US/docs/Web/URI/Reference/Fragment) (i.e., `#section`) or `username:password` information.
The request's _referrer policy_ defines the data that can be included. See {{HTTPHeader("Referrer-Policy")}} for more [information](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives) and [examples](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#examples).

The `Referer` should also be sent in requests following a {{httpheader("Refresh")}} response (or equivalent [`<meta http-equiv="refresh" content="...">`](/en-US/docs/Web/HTML/Element/meta#http-equiv)) that causes a navigation to a new page, if permitted by the referrer policy.

> [!NOTE]
> The header name "referer" is actually a misspelling of the word "referrer".
> See [HTTP referer on Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer) for more details.

> [!WARNING]
> This header may have undesirable consequences for user security and privacy.
> See [Referer header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigation hints.

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
Referer: <url>
```

## Directives

- `<url>`
  - : An absolute or partial address of the web page that makes the request.
    URL fragments (i.e., `#section`) and user info (i.e., `username:password` in `https://username:password@example.com/foo/bar/`) are not included.
    Origin, path, and query string may be included, depending on the [referrer policy](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#directives).

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

- {{HTTPHeader("Referrer-Policy")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [Fetch](/en-US/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [HTTP referer on Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
