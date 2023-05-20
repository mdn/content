---
title: "Permissions-Policy: ambient-light-sensor"
slug: Web/HTTP/Headers/Permissions-Policy/ambient-light-sensor
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.ambient-light-sensor
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `ambient-light-sensor` directive controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the {{domxref('AmbientLightSensor')}} interface.

Specifically, where a defined policy blocks use of this feature, {{domxref("AmbientLightSensor.AmbientLightSensor", "AmbientLightSensor()")}} constructor calls will throw a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `ambient-light-sensor` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
