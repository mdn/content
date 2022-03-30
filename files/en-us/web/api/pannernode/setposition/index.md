---
title: PannerNode.setPosition()
slug: Web/API/PannerNode/setPosition
tags:
  - API
  - Method
  - PannerNode
  - Reference
  - Web Audio API
  - setPosition
browser-compat: api.PannerNode.setPosition
---
{{ APIRef("Web Audio API") }} {{Deprecated_Header}}

The `setPosition()` method of the {{ domxref("PannerNode") }} Interface defines the position of the audio source relative to the listener (represented by an {{domxref("AudioListener")}} object stored in the {{domxref("BaseAudioContext.listener")}} attribute.) The three parameters `x`, `y` and `z` are unitless and describe the source's position in 3D space using the right-hand Cartesian coordinate system.

The `setPosition()` method's default value of the position is `(0,` `0,` `0)`.

## Syntax

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.setPosition(0,0,0);
```

### Returns

{{jsxref('undefined')}}.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Parameters

- x
  - : The x position of the panner in 3D space.
- y
  - : The y position of the panner in 3D space.
- z
  - : The z position of the panner in 3D space.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
