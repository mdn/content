---
title: 'Feature-Policy: encrypted-media'
slug: Web/HTTP/Headers/Feature-Policy/encrypted-media
tags:
  - Directive
  - EME
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.encrypted-media
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `encrypted-media` directive controls whether the current document is allowed to use the [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) API (EME). When this policy is enabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} will reject with a {{domxref("DOMException")}}.

## Syntax

```http
Feature-Policy: encrypted-media <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `encrypted-media` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
