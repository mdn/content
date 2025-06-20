---
title: "Permissions-Policy: captured-surface-control directive"
short-title: captured-surface-control
slug: Web/HTTP/Reference/Headers/Permissions-Policy/captured-surface-control
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.captured-surface-control
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `captured-surface-control` directive controls whether or not the document is permitted to use the [Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control). Specifically, the {{domxref("CaptureController.forwardWheel", "forwardWheel()")}}, {{domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}}, {{domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}}, and {{domxref("CaptureController.resetZoomLevel", "resetZoomLevel()")}} methods are controlled by this directive.

If `captured-surface-control` is disabled in a document, the above methods will throw a `NotAllowedError` exception.

## Syntax

```http
Permissions-Policy: captured-surface-control=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `captured-surface-control` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
