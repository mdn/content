---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Headers/Permissions-Policy/window-management
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.window-management
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `window-management` directive controls whether or not the current document is allowed to use the [Window Management API](/en-US/docs/Web/API/Window_Management_API) to manage windows on multiple displays.

Where this policy forbids use of the API:

- The {{jsxref("Promise")}} returned by the {{domxref("Window.getScreenDetails()")}} method will reject with a `NotAllowedError` exception.
- The {{domxref("Screen.isExtended", "Window.screen.isExtended")}} property will always return `false`.

## Syntax

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `window-management` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
