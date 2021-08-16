---
title: 'Feature-Policy: vr'
slug: Web/HTTP/Headers/Feature-Policy/vr
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - WebVR
  - Experimental
browser-compat: http.headers.Feature-Policy.vr
---
{{HTTPSidebar}} {{SeeCompatTable}}

> **Warning:** The [WebVR API](/en-US/docs/Web/API/WebVR_API) has been replaced with the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
> and is currently being removed from the web platform.
> Use the feature identifier {{HTTPHeader("Feature-Policy/xr-spatial-tracking","xr-spatial-tracking")}} for WebXR Device API instead.

The HTTP {{HTTPHeader("Feature-Policy")}} header `vr` directive controls whether the current document is allowed to use the [WebVR API](/en-US/docs/Web/API/WebVR_API). When this policy is enabled, the {{JSxRef("Promise")}} returned by {{DOMxRef("Navigator.getVRDisplays","Navigator.getVRDisplays()")}} will reject with a {{DOMxRef("DOMException")}}.

## Syntax

```
Feature-Policy: vr <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default allowlist is `'self'`.

## Specifications

| Specification                            | Status                               | Comment             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Feature Policy")}} | {{Spec2("Feature Policy")}} | Initial definition. |
| {{SpecName("WebVR 1.1")}}         | {{Spec2("WebVR 1.1")}}         |                     |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy/xr-spatial-tracking","Feature-Policy: xr-spatial-tracking")}}
- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
