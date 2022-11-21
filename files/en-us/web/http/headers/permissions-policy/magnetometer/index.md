---
title: 'Permissions-Policy: magnetometer'
slug: Web/HTTP/Headers/Permissions-Policy/magnetometer
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Magnetometer
  - Reference
  - Experimental
browser-compat: http.headers.Permissions-Policy.magnetometer
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `magnetometer` directive controls whether the current document is allowed to gather information about the orientation of the device through the {{domxref("Magnetometer")}} interface.

## Syntax

```http
Permissions-Policy: magnetometer <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `magnetometer` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
