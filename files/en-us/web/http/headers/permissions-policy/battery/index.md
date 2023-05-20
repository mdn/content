---
title: "Permissions-Policy: battery"
slug: Web/HTTP/Headers/Permissions-Policy/battery
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.battery
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `battery` directive controls whether the current document is allowed to gather information about the battery of the device through the {{DOMxRef("BatteryManager")}} interface obtained via {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}.

Specifically, where a defined policy blocks use of this feature, {{domxref("Navigator.getBattery", "getBattery()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `NotAllowedError`.

## Syntax

```http
Permissions-Policy: battery=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `battery` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- {{DOMxRef("BatteryManager")}}
