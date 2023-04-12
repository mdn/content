---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.document-domain
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`document-domain` directive controls whether the current document is
allowed to set {{domxref("document.domain")}}.

Specifically, where a defined policy blocks use of this feature, attempting
to set {{domxref("document.domain")}} will fail and cause a `SecurityError`
{{domxref("DOMException")}} to be thrown.

## Syntax

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `document-domain` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
