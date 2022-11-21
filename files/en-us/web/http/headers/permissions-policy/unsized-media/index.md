---
title: 'Permissions-Policy: unsized-media'
slug: Web/HTTP/Headers/Permissions-Policy/unsized-media
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Reference
  - Experimental
  - Non-standard
browser-compat: http.headers.Permissions-Policy.unsized-media
---

{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `unsized-media` directive controls whether the current document is allowed to change the size of media elements after the initial layout is complete.

This restriction solves "layout instability" problem caused by providing default dimensions for images whose size is not specified in advance so that image doesn't change size after loading.

## Syntax

```http
Permissions-Policy: unsized-media <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default value

The default value for unsized-media is `'*'`, that is unsized media elements are allowed for all origins by default. The page will re-flow every time an image with unknown dimensions is loaded.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Proposal](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/unsized-media.md)
