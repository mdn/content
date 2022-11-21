---
title: 'Permissions-Policy: unoptimized-images'
slug: Web/HTTP/Headers/Permissions-Policy/unoptimized-images
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Image
  - Reference
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.unoptimized-images
---

{{HTTPSidebar}}{{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `unoptimized-images` directive controls whether the current document is allowed to download and display unoptimized images.

## Syntax

```http
Permissions-Policy: unoptimized-images <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `unoptimized-images` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
