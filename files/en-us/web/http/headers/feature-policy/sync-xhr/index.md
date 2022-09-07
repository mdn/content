---
title: 'Feature-Policy: sync-xhr'
slug: Web/HTTP/Headers/Feature-Policy/sync-xhr
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - XMLHttpRequest
  - Experimental
  - Non-standard
browser-compat: http.headers.Feature-Policy.sync-xhr
---
{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `sync-xhr` directive controls whether the current document is allowed to make synchronous {{domxref("XMLHttpRequest")}} requests.

## Syntax

```http
Feature-Policy: sync-xhr <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

By default the policy is set to `*`, which means synchronous requests are allowed in all frames.

## Browser compatibility

{{Compat}}

## See also

- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
