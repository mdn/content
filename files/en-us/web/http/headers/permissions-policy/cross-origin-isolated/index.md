---
title: "Permissions-Policy: cross-origin-isolated"
slug: Web/HTTP/Headers/Permissions-Policy/cross-origin-isolated
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.cross-origin-isolated
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `cross-origin-isolated` directive controls whether the current document is allowed to use APIs that require {{domxref("Window.crossOriginIsolated", "cross-origin isolation", "", "nocode")}}.

Specifically, where a defined policy blocks use of this feature, the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties will always return `false`, and the document will not benefit from reduced restrictions on the use of some APIs that are granted only to cross-origin isolated documents.
This is true regardless of the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} and {{HTTPHeader("Cross-Origin-Opener-Policy")}} headers, and whether the document would have been cross-origin isolated had the permission been granted.

The APIs that require this permission include the use of {{jsxref("SharedArrayBuffer")}} objects and {{domxref("Performance.now()")}} with unthrottled timers — see {{domxref("Window.crossOriginIsolated")}} for information about other restricted APIs.

The permission can be used to maintain restrictions on access to the sensitive APIs unless they are actually needed by a cross-origin isolated document.
Note that if the feature is not allowed, but it otherwise would have been cross-origin isolated, then in all other respects it is still cross-origin isolated.
For example, it will only share a {{glossary("Browsing context", "browsing context group")}} with documents in the same origin.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : A list of one or more origins for which permission is granted to use the feature.
    See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `cross-origin-isolated` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
