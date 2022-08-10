---
title: HTMLLinkElement.referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
page-type: web-api-instance-property
tags:
  - API
  - HTMLLinkElement
  - Property
  - Reference
browser-compat: api.HTMLLinkElement.referrerPolicy
---
{{APIRef}}

The
**`HTMLLinkElement.referrerPolicy`**
property reflect the HTML {{htmlattrxref("referrerpolicy","link")}} attribute of the
{{HTMLElement("link")}} element defining which referrer is sent when fetching the
resource.

See the HTTP {{HTTPHeader("Referrer-Policy")}} header for details.

## Value

A string; one of the following:

- `no-referrer`
  - : The {{HTTPHeader("Referer")}} header will be omitted entirely. No referrer
    information is sent along with requests.
- `no-referrer-when-downgrade`
  - : The URL is sent
    as a referrer when the protocol security level stays the same (e.g.HTTP→HTTP,
    HTTPS→HTTPS), but isn't sent to a less secure destination (e.g. HTTPS→HTTP).
- `origin`
  - : Only send the origin of the document as the referrer in all cases.
    The document `https://example.com/page.html` will send the referrer
    `https://example.com/`.
- `origin-when-cross-origin`
  - : Send a full URL when performing a same-origin request, but only send the origin of
    the document for other cases.
- `same-origin`
  - : A referrer will be sent for [same-site origins](/en-US/docs/Web/Security/Same-origin_policy), but
    cross-origin requests will contain no referrer information.
- `strict-origin`
  - : Only send the origin of the document as the referrer when the protocol security
    level stays the same (e.g. HTTPS→HTTPS), but don't send it to a less secure
    destination (e.g. HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : This is the user agent's default behavior if no policy is specified. Send a full URL when performing a same-origin request, only send the origin when the
    protocol security level stays the same (e.g. HTTPS→HTTPS), and send no header to a
    less secure destination (e.g. HTTPS→HTTP).
- `unsafe-url`
  - : Send a full URL when performing a same-origin or cross-origin request. This policy
    will leak origins and paths from TLS-protected resources to insecure origins.
    Carefully consider the impact of this setting.

## Examples

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP header {{HTTPHeader("Referrer-Policy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
