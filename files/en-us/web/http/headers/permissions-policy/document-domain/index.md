---
title: 'Permissions-Policy: document-domain'
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
tags:
  - Directive
  - Experimental
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Reference
  - document-domain
  - Header
browser-compat: http.headers.Permissions-Policy.document-domain
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`document-domain` directive controls whether the current document is
allowed to set {{domxref("document.domain")}}. When this policy is disabled, attempting
to set {{domxref("document.domain")}} will fail and cause a `SecurityError`
{{domxref("DOMException")}} to be thrown.

## Syntax

```http
Permissions-Policy: document-domain <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `document-domain` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
