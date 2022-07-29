---
title: XRCompositionLayer.chromaticAberrationCorrection
slug: Web/API/XRCompositionLayer/chromaticAberrationCorrection
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
browser-compat: api.XRCompositionLayer.chromaticAberrationCorrection
---
{{APIRef("WebXR Device API")}}

The **`chromaticAberrationCorrection`** property of the {{domxref("XRCompositionLayer")}} interface is a boolean enabling the layer's optical chromatic aberration correction.

Chromatic aberration ("color fringing") is an imperfection wherein a lens fails to focus all wavelengths of colors at the same point. This effect results in a seven-colored rainbow. To remove these imperfections a process called chromatic aberration correction is needed. For more information, read [Chromatic aberration](https://en.wikipedia.org/wiki/Chromatic_aberration) on Wikipedia.

## Value

A boolean. `true` enables chromatic aberration correction for the layer; `false` disables it.
If the device doesn't support this feature, `chromaticAberrationCorrection` is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and setting it will not do anything.

If `chromaticAberrationCorrection` was changed, it will take effect in the next frame.

## Examples

### Setting a layer's chromatic aberration correction

The following code snippet enables the layer's chromatic aberration correction.

```js
myLayer.chromaticAberrationCorrection = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chromatic aberration](https://en.wikipedia.org/wiki/Chromatic_aberration)
