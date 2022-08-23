---
title: 'Feature-Policy: ambient-light-sensor'
slug: Web/HTTP/Headers/Feature-Policy/ambient-light-sensor
tags:
  - Ambient Light Sensor
  - Feature Policy
  - HTTP
  - Experimental
browser-compat: http.headers.Feature-Policy.ambient-light-sensor
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Feature-Policy')}} header `ambient-light-sensor` directive controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the {{domxref('AmbientLightSensor')}} interface.

## Syntax

```http
Feature-Policy: ambient-light-sensor <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `ambient-light-sensor` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Feature-Policy')}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
