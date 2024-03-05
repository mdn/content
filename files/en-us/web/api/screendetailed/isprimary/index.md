---
title: "ScreenDetailed: isPrimary property"
short-title: isPrimary
slug: Web/API/ScreenDetailed/isPrimary
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.isPrimary
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`isPrimary`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a boolean indicating whether the screen is set as the operating system (OS) primary screen or not.

The OS hosting the browser will have one primary screen, and one or more secondary screens. The primary screen can usually be specified by the user via OS settings, and generally contains OS UI features such as the taskbar/icon dock. The primary screen may change for a number of reasons, such as a screen being unplugged.

## Value

A boolean value — `true` if the screen is primary, and `false` if it is secondary.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Is the first screen primary?
const screen1Primary = screenDetails.screens[0].isPrimary;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
