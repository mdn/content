---
title: "HTMLAreaElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/HTMLAreaElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.referrerPolicy
---

{{APIRef}}

The
**`HTMLAreaElement.referrerPolicy`**
property reflect the HTML [`referrerpolicy`](/en-US/docs/Web/HTML/Element/area#referrerpolicy) attribute of the
{{HTMLElement("area")}} element defining which referrer is sent when fetching the
resource.

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

```html
<img usemap="#mapAround" width="100" height="100" src="/img/logo@2x.png" />
<map id="myMap" name="mapAround" />>
```

```js
const elt = document.createElement("area");
elt.href = "/img2.png";
elt.shape = "rect";
elt.referrerPolicy = "no-referrer";
elt.coords = "0,0,100,100";
const map = document.getElementById("myMap");

map.appendChild(elt);
// When clicked, the area's link will not send a referrer header.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.referrerPolicy")}},
  {{domxref("HTMLAnchorElement.referrerPolicy")}}, and
  {{domxref("HTMLIFrameElement.referrerPolicy")}}.
