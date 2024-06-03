---
title: Referrer policy
slug: Web/Security/Practical_implementation/Referrer_policy
page-type: guide
---

The [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) header provides fine-grained control over how and when browsers transmit the [`Referer`](/en-US/docs/Web/HTTP/Headers/Referer) header.

## Problem

When a user navigates to a site via a hyperlink, or a website loads an external resource, browsers inform the destination site of the origin of the requests through the use of the HTTP `Referer` (sic) header. Although this can be useful for a variety of purposes, it can also place the [privacy](/en-US/docs/Web/Privacy) of users at risk.

For example, if a page at `https://example.com/page.html` contains the following HTML:

```html
<img src="https://not.example.com/image.jpg" />
```

The browser will send a request like this:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` now knows where the request came from. Even this small amount of information poses a privacy risk. Other cases could result in the browser transmitting internal-use-only URLs that it may not have intended to reveal, or URL parameters containing sensitive information.

See [Referer header: Privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more details.

## Solution

Use [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) to limit the information available in the `Referer` header, or stop it being sent altogether.

The most useful directives available to `Referrer-Policy` are as follows, in decreasing order of strictness. Choose the strictest one of these that still allows your site to function:

- `no-referrer`: Never send the `Referer` header.
- `same-origin`: send the `Referrer` header, but only on same-origin requests.
- `strict-origin`: send the `Referrer` header to all origins, but only the URL without the path (e.g. `https://example.com/`)
- `strict-origin-when-cross-origin`: send the full `Referrer` header on same-origin requests, and the URL without the path on cross-origin requests.

If you are unable to use the `Referrer-Policy` header, you can also set page-wide policies using a [`<meta http-equiv="Referrer-Policy" content="…">`](/en-US/docs/Web/HTML/Element/meta#http-equiv) element. This should be the first {{htmlelement("meta")}} element that appears inside the document {{htmlelement("head")}}. You can also set policies on individual elements using the [`referrerpolicy`](/docs/Web/HTML/Element/a#referrerpolicy) HTML attribute and individual [fetch](/en-US/docs/Web/API/fetch) requests using the {{domxref("Request.referrerPolicy")}} property.

Notes:

- There are other `Referrer-Policy` directives, but they do not protect user privacy and limit exposure in the same way as the options listed above.
- `strict-origin-when-cross-origin` is the default value.
- In recent versions of Firefox and Safari, "unsafe" directives (`no-referrer-when-downgrade`, `origin-when-cross-origin`, and `unsafe-url`) behave like `strict-origin-when-cross-origin`.

## Examples

On `example.com`, only send the `Referer` header when loading or linking to other `example.com` resources:

```http
Referrer-Policy: same-origin
```

Send the shortened referrer on cross-origin requests, full referrer on same-origin requests:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Disable referrers for browsers that don't support `strict-origin-when-cross-origin`; use `strict-origin-when-cross-origin` for browsers that do:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Do the same, but with a `<meta>` element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

The `referrerpolicy` attribute doesn't support multiple values, so only set `no-referrer`:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
