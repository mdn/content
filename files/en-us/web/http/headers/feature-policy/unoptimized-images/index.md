---
title: 'Feature-Policy: unoptimized-images'
slug: Web/HTTP/Headers/Feature-Policy/unoptimized-images
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Image
  - Reference
  - Experimental
  - Non-standard
browser-compat: http.headers.Feature-Policy.unoptimized-images
---
{{HTTPSidebar}}{{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `unoptimized-images` directive controls whether the current document is allowed to download and display unoptimized images.

## Syntax

```http
Feature-Policy: unoptimized-images <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `unoptimized-images` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
