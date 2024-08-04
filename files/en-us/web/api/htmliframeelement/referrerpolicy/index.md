---
title: "HTMLIFrameElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/HTMLIFrameElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.referrerPolicy
---

{{APIRef}}

The
**`HTMLIFrameElement.referrerPolicy`**
property reflects the HTML [`referrerpolicy`](/en-US/docs/Web/HTML/Element/iframe#referrerpolicy) attribute of the
{{HTMLElement("iframe")}} element defining which referrer is sent when fetching the
resource.

## Value

- `no-referrer`
  - : The {{HTTPHeader("Referer")}} header will be omitted entirely. No referrer
    information is sent along with requests.
- `no-referrer-when-downgrade`
  - : The URL is sent
    as a referrer when the protocol security level stays the same (HTTP→HTTP,
    HTTPS→HTTPS), but isn't sent to a less secure destination (HTTPS→HTTP).
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
    level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination
    (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)
  - : This is the user agent's default behavior if no policy is specified. Send a full URL when performing a same-origin request, only send the origin when the
    protocol security level stays the same (HTTPS→HTTPS), and send no header to a less
    secure destination (HTTPS→HTTP).
- `unsafe-url`

  - : Send a full URL when performing a same-origin or cross-origin request.

    > [!NOTE]
    > This policy will leak origins and paths from TLS-protected resources
    > to insecure origins. Carefully consider the impact of this setting.

## Examples

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
const body = document.querySelector("body");
body.appendChild(iframe); // Fetch the image using the complete URL as the referrer
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.referrerPolicy")}},
  {{domxref("HTMLAreaElement.referrerPolicy")}}, and
  {{domxref("HTMLAreaElement.referrerPolicy")}}.
