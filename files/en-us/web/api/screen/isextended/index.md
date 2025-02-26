---
title: "Screen: isExtended property"
short-title: isExtended
slug: Web/API/Screen/isExtended
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Screen.isExtended
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`isExtended`** read-only property of the
{{domxref("Screen")}} interface returns `true` if the user's device has multiple screens, and `false` if not.

This property is typically accessed via `window.screen.isExtended`, and can be used to test whether multiple screens are available before attempting to create a multi-window, multi-screen layout using the [Window Management API](/en-US/docs/Web/API/Window_Management_API).

## Value

A boolean value — `true` if the device has multiple screens, and `false` if not.

> [!NOTE]
> If a {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) is set that blocks use the Window Management API, `isExtended` will always return `false`.

## Examples

```js
if (window.screen.isExtended) {
  // Create multi-screen window layout
} else {
  // Create single-screen window layout
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
