---
title: 'Feature-Policy: oversized-images'
slug: Web/HTTP/Headers/Feature-Policy/oversized-images
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Reference
  - Experimental
  - Non-standard
browser-compat: http.headers.Feature-Policy.oversized-images
---
{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `oversized-images` directive controls whether the current document is allowed to download and display large images.

## Syntax

```http
Feature-Policy: oversized-images <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default value

The default value is `'*'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
