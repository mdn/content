---
title: 'Feature-Policy: legacy-image-formats'
slug: Web/HTTP/Headers/Feature-Policy/legacy-image-formats
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Reference
  - legacy-image-formats
  - Experimental
  - Non-standard
browser-compat: http.headers.Feature-Policy.legacy-image-formats
---
{{HTTPSidebar}}{{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `legacy-image-formats` directive controls whether the current document is allowed to display images in legacy formats.

## Syntax

```http
Feature-Policy: legacy-image-formats <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `legacy-image-formats` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
