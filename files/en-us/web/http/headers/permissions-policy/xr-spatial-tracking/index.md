---
title: 'Permissions-Policy: xr-spatial-tracking'
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Reference
  - xr-spatial-tracking
  - Experimental
browser-compat: http.headers.Permissions-Policy.xr-spatial-tracking
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `xr-spatial-tracking` directive controls whether the current document is allowed to use the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API). This policy controls whether {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} can return {{DOMxRef("XRSession")}} that requires spatial tracking and whether user agent can indicate support for sessions supporting spatial tracking via {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{domxref("MediaDevices/devicechange_event", "devicechange")}} event on {{DOMxRef("Navigator.xr","navigator.xr")}} object.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The default allowlist is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, and {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{domxref("XRSystem/devicechange_event", "devicechange")}} event on {{DOMxRef("Navigator.xr","navigator.xr")}}
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
