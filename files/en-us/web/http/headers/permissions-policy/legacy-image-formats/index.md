---
title: 'Permissions-Policy: legacy-image-formats'
slug: Web/HTTP/Headers/Permissions-Policy/legacy-image-formats
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Reference
  - legacy-image-formats
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.legacy-image-formats
---

{{HTTPSidebar}}{{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `legacy-image-formats` directive controls whether the current document is allowed to display images in legacy formats.

## Syntax

```http
Permissions-Policy: legacy-image-formats <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `legacy-image-formats` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
