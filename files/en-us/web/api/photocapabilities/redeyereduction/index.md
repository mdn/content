---
title: PhotoCapabilities.redEyeReduction
slug: Web/API/PhotoCapabilities/redEyeReduction
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
browser-compat: api.PhotoCapabilities.redEyeReduction
---
{{APIRef("MediaStream Image")}}

The **`redEyeReduction`** read-only property of the
{{domxref("PhotoCapabilities")}} interface returns an enum indicating the red-eye
reduction capability of the source.

## Syntax

```js
const redEyeReduction = photoCapabilities.redEyeReduction
```

### Value

One of `"never"`, `"always"`, or `"controllable"`.

- `never`
  - : Red-eye reduction is not available.
- `always`
  - : Red-eye reduction is available in the source and it is always turned on.
- `controllable`
  - : Red-eye reduction is available in the source and it is configurable via the
    {{domxref("PhotoSettings")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
