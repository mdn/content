---
title: 'Permissions-Policy: oversized-images'
slug: Web/HTTP/Headers/Permissions-Policy/oversized-images
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Reference
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.oversized-images
---

{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `oversized-images` directive controls whether the current document is allowed to download and display large images.

## Syntax

```http
Permissions-Policy: oversized-images <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default value

The default value is `'*'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
