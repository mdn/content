---
title: 'Feature-Policy: gyroscope'
slug: Web/HTTP/Headers/Feature-Policy/gyroscope
tags:
  - Feature Policy
  - gyroscope
  - HTTP
  - header
  - Experimental
browser-compat: http.headers.Feature-Policy.gyroscope
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `gyroscope` directive controls whether the current document is allowed to gather information about the orientation of the device through the {{domxref("Gyroscope")}} interface.

## Syntax

```http
Feature-Policy: gyroscope <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `gyroscope` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
