---
title: 'Feature-Policy: web-share'
slug: Web/HTTP/Headers/Feature-Policy/web-share
tags:
  - Feature-Policy
  - HTTP
  - Web Share
  - Experimental
browser-compat: http.headers.Feature-Policy.web-share
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Feature-Policy')}} header `web-share` directive controls whether the current document is allowed to use the {{domxref("Navigator.share","Navigator.share()")}} method of the Web Share API to share text, links, images, and other content to arbitrary destinations of the user's choice.

## Syntax

```http
Feature-Policy: web-share <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default value is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

Browser implementation is being discussed in <https://github.com/w3c/web-share/issues/169>.

## See also

- {{HTTPHeader('Feature-Policy')}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
