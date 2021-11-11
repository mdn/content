---
title: PannerNode.setVelocity()
slug: Web/API/PannerNode/setVelocity
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
{{ APIRef("Web Audio API") }}

{{deprecated_header}}

The `setVelocity()` method of the {{ domxref("PannerNode") }} Interface defines the velocity vector of the audio source — how fast it is moving and in what direction.

This method was removed from the specification because of gaps in its design and implementation problems.

The velocity relative to the listener is used to control the pitch change needed to conform with the [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect) due to the relative speed.

As the vector controls both the direction of travel and its velocity, the three parameters `x`, `y` and `z` are expressed in _meters per second`.`_ The default value of the velocity vector is `(0,` `0,` `0)`.

## Syntax

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.setVelocity(0,0,17);
```

### Returns

{{jsxref('undefined')}}.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Parameters

- `x`
  - : The x value of the panner's velocity vector.
- `y`
  - : The y value of the panner's velocity vector.
- `z`
  - : The z value of the panner's velocity vector.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
