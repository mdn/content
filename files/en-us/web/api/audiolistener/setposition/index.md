---
title: AudioListener.setPosition()
slug: Web/API/AudioListener/setPosition
tags:
  - API
  - AudioListener
  - Deprecated
  - Method
  - Reference
  - Web Audio API
  - setPosition
browser-compat: api.AudioListener.setPosition
---
{{ APIRef("Web Audio API") }} {{deprecated_header}}

The `setPosition()` method of the {{ domxref("AudioListener") }} Interface defines the position of the listener.

The three parameters `x`, `y` and `z` are unitless and describe the listener's position in 3D space according to the right-hand Cartesian coordinate system. {{domxref("PannerNode")}} objects use this position relative to individual audio sources for spatialisation.

The default value of the position vector is `(0,` `0,` `0)`.

## Syntax

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.setPosition(1,1,1);
```

### Returns

{{jsxref('undefined')}}.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Parameters

- x
  - : The x position of the listener in 3D space.
- y
  - : The y position of the listener in 3D space.
- z
  - : The z position of the listener in 3D space.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
