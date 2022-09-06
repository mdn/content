---
title: 'Feature-Policy: battery'
slug: Web/HTTP/Headers/Feature-Policy/battery
tags:
  - Battery
  - Feature Policy
  - HTTP
  - Experimental
browser-compat: http.headers.Feature-Policy.battery
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `battery` directive controls whether the current document is allowed to gather information about the battery of the device through the {{DOMxRef("BatteryManager")}} interface obtained via {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}.

## Syntax

```http
Feature-Policy: battery <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `battery` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- {{DOMxRef("BatteryManager")}}
