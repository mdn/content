---
title: 'Feature-Policy: layout-animations'
slug: Web/HTTP/Headers/Feature-Policy/layout-animations
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Reference
  - layout-animations
  - Experimental
  - Non-standard
browser-compat: http.headers.Feature-Policy.layout-animations
---
{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `layout-animations` directive controls whether the current document is allowed to show layout animations.

## Syntax

```http
Feature-Policy: layout-animations <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `layout-animations` is `'self'`.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
