---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Headers/Permissions-Policy/storage-access
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.storage-access
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `storage-access` directive controls whether a document loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) is allowed to use the {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} to request access to unpartitioned cookies.

This is relevant to user agents that by default block access to unpartitioned cookies by sites loaded in a third-party context to improve privacy (for example, to prevent tracking).

Specifically, where a defined policy blocks use of this feature, {{domxref("Document.requestStorageAccess()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `NotAllowedError`.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `storage-access` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage Access API](/en-US/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
