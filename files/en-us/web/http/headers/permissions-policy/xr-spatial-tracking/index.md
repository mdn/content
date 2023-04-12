---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.xr-spatial-tracking
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `xr-spatial-tracking` directive controls whether the current document is allowed to use the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API).

Specifically, where a defined policy blocks usage of this feature:

- {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `SecurityError`.

- {{domxref("XRSystem/devicechange_event", "devicechange")}} events are not fired on the {{DOMxRef("Navigator.xr","navigator.xr")}} object.

## Syntax

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `xr-spatial-tracking` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, and {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} and {{domxref("XRSystem/devicechange_event", "devicechange")}} event on {{DOMxRef("Navigator.xr","navigator.xr")}}
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
