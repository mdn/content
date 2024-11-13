---
title: "Permissions-Policy: cross-origin-isolated"
slug: Web/HTTP/Headers/Permissions-Policy/cross-origin-isolated
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.cross-origin-isolated
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `cross-origin-isolated` directive controls whether the current document is allowed to be cross-origin isolated.

Specifically, where a defined policy blocks use of this feature, the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties will always return `false`, regardless of of the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} and {{HTTPHeader("Cross-Origin-Opener-Policy")}} headers.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `cross-origin-isolated` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
