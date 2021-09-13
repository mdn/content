---
title: AudioListener.forwardZ
slug: Web/API/AudioListener/forwardZ
tags:
  - API
  - Audio
  - AudioListener
  - Property
  - Reference
  - Web Audio API
  - forwardZ
browser-compat: api.AudioListener.forwardZ
---
{{ APIRef("Web Audio API") }}

The `forwardZ` read-only property of the {{ domxref("AudioListener") }} interface is an {{domxref("AudioParam")}} representing the z value of the direction vector defining the forward direction the listener is pointing in.

> **Note:** The parameter is _a-rate_ when used with a {{domxref("PannerNode")}} whose {{domxref("PannerNode.panningModel", "panningModel")}} is set to equalpower, or _k-rate_ otherwise.

## Syntax

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.forwardZ.value = 0;
```

### Value

An {{domxref("AudioParam")}}. Its default value is -1, and it can range between positive and negative infinity.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
