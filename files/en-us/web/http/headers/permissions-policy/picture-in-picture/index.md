---
title: 'Permissions-Policy: picture-in-picture'
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
tags:
  - Directive
  - Permissions-Policy
  - HTTP
  - Picture in picture
  - Reference
  - Experimental
browser-compat: http.headers.Permissions-Policy.picture-in-picture
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `picture-in-picture` directive controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.

## Syntax

```http
Permissions-Policy: picture-in-picture <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

As of June 2019, the [spec draft](https://wicg.github.io/picture-in-picture/#feature-policy) and [Google Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=806249#c17) set default allow list to `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
