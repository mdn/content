---
title: "Window: getScreenDetails() method"
short-title: getScreenDetails()
slug: Web/API/Window/getScreenDetails
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Window.getScreenDetails
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`getScreenDetails()`** method of the
{{domxref("Window")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance representing the details of all the screens available to the user's device.

## Syntax

```js-nolint
getScreenDetails()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if a {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) is set that blocks use of the [Window Management API](/en-US/docs/Web/API/Window_Management_API), or if the user has explicitly denied the browser's permission request to use the API.

## Examples

When `getScreenDetails()` is invoked, the user will be asked for permission to manage windows on all their displays (the status of this permission can be checked using {{domxref("Permissions.query()")}} to query `window-management`). Provided they grant permission, the resulting {{domxref("ScreenDetails")}} object contains details of all the screens available to the user's system.

The below example opens a full-size window on each available display.

```js
const screenDetails = await window.getScreenDetails();

// Open a full-size window on each screen available to the device
for (const screen of screenDetails.screens) {
  window.open(
    "https://example.com",
    "_blank",
    `left=${screen.availLeft},
    top=${screen.availTop},
    width=${screen.availWidth},
    height=${screen.availHeight}`,
  );
}
```

> [!NOTE]
> See [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) for a full example (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
