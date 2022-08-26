---
title: 'Feature-Policy: xr-spatial-tracking'
slug: Web/HTTP/Headers/Feature-Policy/xr-spatial-tracking
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - xr-spatial-tracking
  - Experimental
browser-compat: http.headers.Feature-Policy.xr-spatial-tracking
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `xr-spatial-tracking` directive controls whether the current document is allowed to use the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API). This policy controls whether {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} can return {{DOMxRef("XRSession")}} that requires spatial tracking and whether user agent can indicate support for sessions supporting spatial tracking via {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{domxref("MediaDevices/devicechange_event", "devicechange")}} event on {{DOMxRef("Navigator.xr","navigator.xr")}} object.

## Syntax

```http
Feature-Policy: xr-spatial-tracking <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default allowlist is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, and {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{domxref("XRSystem/devicechange_event", "devicechange")}} event on {{DOMxRef("Navigator.xr","navigator.xr")}}
- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
