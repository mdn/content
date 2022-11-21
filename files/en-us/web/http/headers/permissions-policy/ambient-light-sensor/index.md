---
title: 'Permissions-Policy: ambient-light-sensor'
slug: Web/HTTP/Headers/Permissions-Policy/ambient-light-sensor
tags:
  - Ambient Light Sensor
  - Permissions Policy
  - HTTP
  - Experimental
browser-compat: http.headers.Permissions-Policy.ambient-light-sensor
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `ambient-light-sensor` directive controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the {{domxref('AmbientLightSensor')}} interface.

## Syntax

```http
Permissions-Policy: ambient-light-sensor <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `ambient-light-sensor` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
