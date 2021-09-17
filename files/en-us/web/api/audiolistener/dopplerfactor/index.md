---
title: AudioListener.dopplerFactor
slug: Web/API/AudioListener/dopplerFactor
tags:
  - API
  - Audio
  - AudioListener
  - Deprecated
  - Doppler
  - Doppler Effect
  - Property
  - Reference
  - Web Audio API
  - dopplerFactor
  - effects
browser-compat: api.AudioListener.dopplerFactor
---
{{ APIRef("Web Audio API") }}{{deprecated_header}}

The deprecated `dopplerFactor` property of the {{ domxref("AudioListener") }} interface is a double value representing the amount of pitch shift to use when rendering a [doppler effect](https://en.wikipedia.org/wiki/Doppler_effect).

The `dopplerFactor` property's default value is `1`, which is a sensible default for most situations.

## Syntax

```js
var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.dopplerFactor = 1;
```

### Value

A double indicating the doppler effect's pitch shift value. The value is 1 by default.

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
