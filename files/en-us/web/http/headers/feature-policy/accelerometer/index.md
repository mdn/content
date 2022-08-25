---
title: 'Feature-Policy: accelerometer'
slug: Web/HTTP/Headers/Feature-Policy/accelerometer
tags:
  - Accelerometer
  - Directive
  - Feature Policy
  - HTTP
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.accelerometer
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Feature-Policy')}} header `accelerometer` directive controls whether the current document is allowed to gather information about the acceleration of the device through the {{domxref('Accelerometer')}} interface.

## Syntax

```http
Feature-Policy: accelerometer <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default `allowlist` value for this feature is: `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Feature-Policy')}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
