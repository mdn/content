---
title: "AudioListener: setPosition() method"
short-title: setPosition()
slug: Web/API/AudioListener/setPosition
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.AudioListener.setPosition
---

{{ APIRef("Web Audio API") }} {{deprecated_header}}

The `setPosition()` method of the {{ domxref("AudioListener") }} Interface defines the position of the listener.

The three parameters `x`, `y` and `z` are unitless and describe the listener's position in 3D space according to the right-hand Cartesian coordinate system. {{domxref("PannerNode")}} objects use this position relative to individual audio sources for spatialization.

The default value of the position vector is `(0, 0, 0)`.

> **Note: ** As this method is deprecated, use the three {{domxref("AudioListener.positionX", "positionX")}}, {{domxref("AudioListener.positionY", "positionY")}}, and {{domxref("AudioListener.positionZ", "positionZ")}} properties instead.

## Syntax

```js-nolint
setPosition(x, y, z)
```

### Parameters

- `x`
  - : The x position of the listener in 3D space.
- `y`
  - : The y position of the listener in 3D space.
- `z`
  - : The z position of the listener in 3D space.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
