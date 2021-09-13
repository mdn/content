---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
tags:
  - API
  - Geolocation API
  - Navigator
  - Property
  - Reference
  - Secure context
browser-compat: api.Navigator.geolocation
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`Navigator.geolocation`** read-only property returns a
{{domxref("Geolocation")}} object that gives Web content access to the location of the
device. This allows a Web site or app to offer customized results based on the user's
location.

> **Note:** For security reasons, when a web page tries to access location
> information, the user is notified and asked to grant permission. Be aware that each
> browser has its own policies and methods for requesting this permission.

## Syntax

```js
geo = navigator.geolocation
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the
  Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
