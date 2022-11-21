---
title: 'Permissions-Policy: accelerometer'
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
tags:
  - Accelerometer
  - Directive
  - Permissions Policy
  - HTTP
  - Reference
  - Experimental
browser-compat: http.headers.Permissions-Policy.accelerometer
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `accelerometer` directive controls whether the current document is allowed to gather information about the acceleration of the device through the {{domxref('Accelerometer')}} interface.

## Syntax

```http
Permissions-Policy: accelerometer <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The default `allowlist` value for this feature is: `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
