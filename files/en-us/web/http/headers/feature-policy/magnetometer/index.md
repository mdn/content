---
title: 'Feature-Policy: magnetometer'
slug: Web/HTTP/Headers/Feature-Policy/magnetometer
tags:
  - Directive
  - Feature-Policy
  - HTTP
  - Magnetometer
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.magnetometer
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `magnetometer` directive controls whether the current document is allowed to gather information about the orientation of the device through the {{domxref("Magnetometer")}} interface.

## Syntax

```http
Feature-Policy: magnetometer <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `magnetometer` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
