---
title: "ScreenDetailed: label property"
short-title: label
slug: Web/API/ScreenDetailed/label
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScreenDetailed.label
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`label`** read-only property of the
{{domxref("ScreenDetailed")}} interface is a string providing a descriptive label for the screen, for example "Built-in Retina Display".

This is useful for constructing a list of options to display to the user if you want them to choose a screen to display content on.

## Value

A string.

## Examples

```js
const screenDetails = await window.getScreenDetails();

// Return the label of the first screen
const screen1Label = screenDetails.screens[0].label;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Window Management API](/en-US/docs/Web/API/Window_Management_API)
