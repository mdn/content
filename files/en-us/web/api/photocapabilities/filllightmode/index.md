---
title: PhotoCapabilities.fillLightMode
slug: Web/API/PhotoCapabilities/fillLightMode
tags:
  - API
  - Experimental
  - Image
  - Image Capture
  - Media
  - MediaStream Image Capture API
  - PhotoCapabilities
  - Property
  - Read-only
  - Reference
browser-compat: api.PhotoCapabilities.fillLightMode
---
{{APIRef("MediaStream Image")}}

The **`fillLightMode`** read-only
property of the {{domxref("PhotoCapabilities")}} interface returns all available
fill light options of the source device.

Options may include
`auto`, `off`, or `flash`.

## Syntax

```js
const lightModes = photoCapabilities.fillLightMode
```

### Value

An {{jsxref("Array")}} of available fill light modes.

- `auto`
  - : The device's fill light will be used automatically in low light conditions.
- `off`
  - : No fill light will be used.
- `flash`
  - : Always use the device's fill light.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
