---
title: "ScreenDetailed: isInternal property"
short-title: isInternal
slug: Web/API/ScreenDetailed/isInternal
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.isInternal
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`isInternal`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a boolean indicating whether the screen is internal to the device or external. External devices are generally manufactured separately from the device they are attached to and can be connected and disconnected as needed, whereas internal screens are part of the device and not intended to be disconnected.

## Value

A boolean value — `true` if the screen is internal, and `false` if it is external.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Is the first screen internal?
const screen1Internal = screenDetails.screens[0].isInternal;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
