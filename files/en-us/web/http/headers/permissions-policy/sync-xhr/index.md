---
title: 'Permissions-Policy: sync-xhr'
slug: Web/HTTP/Headers/Permissions-Policy/sync-xhr
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Reference
  - XMLHttpRequest
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.sync-xhr
---

{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `sync-xhr` directive controls whether the current document is allowed to make synchronous {{domxref("XMLHttpRequest")}} requests.

## Syntax

```http
Permissions-Policy: sync-xhr <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

By default the policy is set to `*`, which means synchronous requests are allowed in all frames.

## Browser compatibility

{{Compat}}

## See also

- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
