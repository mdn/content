---
title: 'Feature-Policy: picture-in-picture'
slug: Web/HTTP/Headers/Feature-Policy/picture-in-picture
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Picture in picture
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.picture-in-picture
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `picture-in-picture` directive controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.

## Syntax

```http
Feature-Policy: picture-in-picture <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

As of June 2019, the [spec draft](https://wicg.github.io/picture-in-picture/#feature-policy) and [Google Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=806249#c17) set default allow list to `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
