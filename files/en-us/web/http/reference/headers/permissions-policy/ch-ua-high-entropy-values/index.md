---
title: "Permissions-Policy: ch-ua-high-entropy-values directive"
short-title: ch-ua-high-entropy-values
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ch-ua-high-entropy-values
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.ch-ua-high-entropy-values
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `ch-ua-high-entropy-values` directive controls whether or not the document is permitted to use the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method to retrieve high-entropy user-agent data.

If the permission is not allowed, the method will only return the `brands`, `mobile`, and `platform` low-entropy data.

## Syntax

```http
Permissions-Policy: ch-ua-high-entropy-values=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `ch-ua-high-entropy-values` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
