---
title: 'Permissions-Policy: layout-animations'
slug: Web/HTTP/Headers/Permissions-Policy/layout-animations
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Reference
  - layout-animations
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.layout-animations
---

{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `layout-animations` directive controls whether the current document is allowed to show layout animations.

## Syntax

```http
Permissions-Policy: layout-animations <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `layout-animations` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
