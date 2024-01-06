---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.accelerometer
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `accelerometer` directive controls whether the current document is allowed to gather information about the acceleration of the device through the {{domxref('Accelerometer')}} interface.

Specifically, where a defined policy blocks use of this feature, {{domxref("Accelerometer.Accelerometer", "Accelerometer()")}} constructor calls will throw a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `accelerometer` is: `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
