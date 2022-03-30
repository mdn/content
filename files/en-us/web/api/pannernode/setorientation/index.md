---
title: PannerNode.setOrientation()
slug: Web/API/PannerNode/setOrientation
tags:
  - API
  - Method
  - PannerNode
  - Reference
  - Web Audio API
  - setOrientation
browser-compat: api.PannerNode.setOrientation
---
{{ APIRef("Web Audio API") }} {{Deprecated_Header}}

The `setOrientation()` method of the {{ domxref("PannerNode") }} Interface defines the direction the audio source is playing in.

This can have a big effect if the sound is very directional — controlled by the three cone-related attributes {{domxref("PannerNode.coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle")}}, and {{domxref("PannerNode.coneOuterGain")}}. In such a case, a sound pointing away from the listener can be very quiet or even silent.

The three parameters `x`, `y` and `z` are unitless and describe a direction vector in 3D space using the right-hand Cartesian coordinate system. The default value of the direction vector is `(1,` `0,` `0)`.

## Syntax

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.setOrientation(1,0,0);
```

### Returns

{{jsxref('undefined')}}.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Parameters

- x
  - : The x value of the panner's direction vector in 3D space.
- y
  - : The y value of the panner's direction vector in 3D space.
- z
  - : The z value of the panner's direction vector in 3D space.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
