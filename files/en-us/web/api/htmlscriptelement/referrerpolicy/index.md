---
title: "HTMLScriptElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.referrerPolicy
---

{{APIRef}}

The **`referrerPolicy`** property of the
{{domxref("HTMLScriptElement")}} interface reflects the HTML
[`referrerpolicy`](/en-US/docs/Web/HTML/Element/script#referrerpolicy) of the {{HTMLElement("script")}} element, which defines how the referrer is set when fetching the script and any scripts it imports.

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

> **Note:** An empty string value (`""`) is both the default
> value, and a fallback value if `referrerpolicy` is not supported. If
> `referrerpolicy` is not explicitly specified on the
> `<script>` element, it will adopt a higher-level referrer policy,
> i.e. one set on the whole document or domain. If a higher-level policy is not
> available, the empty string is treated as being equivalent to
> `no-referrer-when-downgrade`.

## Examples

```js
const scriptElem = document.createElement("script");
scriptElem.src = "/";
scriptElem.referrerPolicy = "unsafe-url";
document.body.appendChild(scriptElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLIFrameElement.referrerPolicy")}}
