---
title: 'Feature-Policy: document-domain'
slug: Web/HTTP/Headers/Feature-Policy/document-domain
tags:
  - Directive
  - Experimental
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - document-domain
  - Header
browser-compat: http.headers.Feature-Policy.document-domain
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header
`document-domain` directive controls whether the current document is
allowed to set {{domxref("document.domain")}}. When this policy is disabled, attempting
to set {{domxref("document.domain")}} will fail and cause a `SecurityError`
{{domxref("DOMException")}} to be thrown.

## Syntax

```http
Feature-Policy: document-domain <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `document-domain` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
