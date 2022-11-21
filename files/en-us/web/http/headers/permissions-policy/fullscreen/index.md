---
title: 'Permissions-Policy: fullscreen'
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
tags:
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - fullscreen
  - header
browser-compat: http.headers.Permissions-Policy.fullscreen
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `fullscreen` directive controls whether the current document is allowed to use {{domxref('Element.requestFullscreen()')}}. When this policy is enabled, the returned {{jsxref('Promise')}} rejects with a {{jsxref('TypeError')}}.

By default, top-level documents and their same-origin child frames can request and enter fullscreen mode. This directive allows or prevents cross-origin frames from using fullscreen mode. This includes same-origin frames.

> **Note:** If both this directive (i.e. via the `allow` attribute) and the `allowfullscreen` attribute are present on an `<iframe>` element, this directive takes precedence. There was a bug whereby the `fullscreen` directive didn't work unless the `allowfullscreen` attribute was also present, but this has been fixed as of Firefox 80 ({{bug(1608358)}}).

## Syntax

```http
Permissions-Policy: fullscreen <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `fullscreen` is `'self'`.

## Examples

### General example

SecureCorp Inc. wants to disable the Fullscreen API within all browsing contexts except for its own origin and those whose origin is `https://example.com`. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: fullscreen 'self' https://example.com
```

### With an \<iframe> element

FastCorp Inc. wants to disable `fullscreen` for all cross-origin child frames, except for a specific \<iframe>. It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: fullscreen 'self'
```

Then include an {{HTMLElement('iframe','allow','#Attributes')}} attribute on the `<iframe>` element:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

iframe attributes can selectively enable features in certain frames, and not in others, even if those frames contain documents from the same origin.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
