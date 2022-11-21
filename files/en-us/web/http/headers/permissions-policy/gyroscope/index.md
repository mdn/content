---
title: 'Permissions-Policy: gyroscope'
slug: Web/HTTP/Headers/Permissions-Policy/gyroscope
tags:
  - Permissions Policy
  - gyroscope
  - HTTP
  - header
  - Experimental
browser-compat: http.headers.Permissions-Policy.gyroscope
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `gyroscope` directive controls whether the current document is allowed to gather information about the orientation of the device through the {{domxref("Gyroscope")}} interface.

## Syntax

```http
Permissions-Policy: gyroscope <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `gyroscope` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
