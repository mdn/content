---
title: 'Permissions-Policy: battery'
slug: Web/HTTP/Headers/Permissions-Policy/battery
tags:
  - Battery
  - Permissions Policy
  - HTTP
  - Experimental
browser-compat: http.headers.Permissions-Policy.battery
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `battery` directive controls whether the current document is allowed to gather information about the battery of the device through the {{DOMxRef("BatteryManager")}} interface obtained via {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}.

## Syntax

```http
Permissions-Policy: battery <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `battery` is `'self'`.

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
