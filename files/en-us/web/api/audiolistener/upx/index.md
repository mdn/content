---
title: AudioListener.upX
slug: Web/API/AudioListener/upX
tags:
  - API
  - Audio
  - AudioListener
  - Property
  - Reference
  - Web Audio API
  - upX
browser-compat: api.AudioListener.upX
---
{{ APIRef("Web Audio API") }}

The `upX` read-only property of the {{ domxref("AudioListener") }} interface is an {{domxref("AudioParam")}} representing the x value of the direction vector defining the up direction the listener is pointing in.

> **Note:** The parameter is _a-rate_ when used with a {{domxref("PannerNode")}} whose {{domxref("PannerNode.panningModel", "PannerNode")}} is set to equalpower, or _k-rate_ otherwise.

## Syntax

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.upX.value = 0;
```

### Value

An {{domxref("AudioParam")}}. Its default value is 0, and it can range between positive and negative infinity.

## Example

For more detailed example code see [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
