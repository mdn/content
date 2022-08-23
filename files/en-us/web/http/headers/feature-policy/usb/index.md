---
title: 'Feature-Policy: usb'
slug: Web/HTTP/Headers/Feature-Policy/usb
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Reference
  - Vibration API
  - Web USB
  - Experimental
browser-compat: http.headers.Feature-Policy.usb
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `usb` directive controls whether the current document is allowed to use the WebUSB API.

## Syntax

```http
Feature-Policy: usb <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default value is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Feature-Policy')}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
