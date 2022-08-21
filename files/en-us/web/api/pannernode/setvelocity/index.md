---
title: PannerNode.setVelocity()
slug: Web/API/PannerNode/setVelocity
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - Deprecated
  - Doppler Effect
  - Method
  - PannerNode
  - Reference
  - Web Audio API
  - setVelocity
browser-compat: api.PannerNode.setVelocity
---
{{APIRef("Web Audio API")}}{{Deprecated_Header}}

The `setVelocity()` method of the {{ domxref("PannerNode") }} Interface defines the velocity vector of the audio source — how fast it is moving and in what direction.

This method was removed from the specification because of gaps in its design and implementation problems.

The velocity relative to the listener is used to control the pitch change needed to conform with the [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect) due to the relative speed.

As the vector controls both the direction of travel and its velocity, the three parameters `x`, `y` and `z` are expressed in _meters per second`.`_ The default value of the velocity vector is `(0,` `0,` `0)`.

## Syntax

```js
setVelocity(x, y, z)
```

### Parameters

- `x`
  - : The x value of the panner's velocity vector.
- `y`
  - : The y value of the panner's velocity vector.
- `z`
  - : The z value of the panner's velocity vector.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
