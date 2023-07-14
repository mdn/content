---
title: "CSP: referrer"
slug: Web/HTTP/Headers/Content-Security-Policy/referrer
page-type: http-csp-directive
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Content-Security-Policy.referrer
---

{{HTTPSidebar}} {{deprecated_header}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`referrer`** directive used to specify information in the
{{HTTPHeader("Referer")}} header (with a single `r` as this was a typo in the
original spec) for links away from a page. This API is deprecated and removed from
browsers.

> **Note:** Use the {{HTTPHeader("Referrer-Policy")}} header instead.

## Syntax

```http
Content-Security-Policy: referrer <referrer-policy>;
```

where `<referrer-policy>` can be one of the following values:

- "no-referrer"
  - : The {{HTTPHeader("Referer")}} header will be omitted entirely. No referrer
    information is sent along with requests.
- "none-when-downgrade"
  - : This is the user agent's default behavior if no policy is specified. The origin is
    sent as referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but isn't
    sent to a less secure destination (HTTPS->HTTP).
- "origin"
  - : Only send the origin of the document as the referrer in all cases.
    The document `https://example.com/page.html` will send the referrer
    `https://example.com/`.
- "origin-when-cross-origin" / "origin-when-crossorigin"
  - : Send a full URL when performing a same-origin request, but only send the origin of
    the document for other cases.
- "unsafe-url"
  - : Send a full URL (stripped from parameters) when performing a same-origin or
    cross-origin request. This policy will leak origins and paths from TLS-protected
    resources to insecure origins. Carefully consider the impact of this setting.

## Examples

```http
Content-Security-Policy: referrer "none";
```

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}} header
- {{HTTPHeader("Referer")}} header
