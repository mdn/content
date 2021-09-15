---
title: AudioListener.positionX
slug: Web/API/AudioListener/positionX
tags:
  - API
  - Audio
  - AudioListener
  - Property
  - Reference
  - Web Audio API
  - positionX
browser-compat: api.AudioListener.positionX
---
{{ APIRef("Web Audio API") }}

The `positionX` read-only property of the {{ domxref("AudioListener") }} interface is an {{domxref("AudioParam")}} representing the x position of the listener in 3D cartesian space.

> **Note:** The parameter is _a-rate_ when used with a {{domxref("PannerNode")}} whose {{domxref("PannerNode.panningModel", "PannerNode")}} is set to equalpower, or _k-rate_ otherwise.

## Syntax

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.positionX.value = 1;
```

### Value

An {{domxref("AudioParam")}}. Its default value is 0, and it can range between positive and negative infinity.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
