---
title: AudioListener.dopplerFactor
slug: Web/API/AudioListener/dopplerFactor
page-type: web-api-instance-property
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

> **Note:** There is no direct replacement for this deprecated property. Instead, the general approach to controlling all aspects of audio spatialization is to use the [`PannerNode`](/en-US/docs/Web/API/PannerNode) interface. For how-to guidance on working with spatialization in the Web Audio API, see the [Web audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) article.

The deprecated `dopplerFactor` property of the {{ domxref("AudioListener") }} interface is a double value representing the amount of pitch shift to use when rendering a [doppler effect](https://en.wikipedia.org/wiki/Doppler_effect).

The `dopplerFactor` property's default value is `1`, which is a sensible default for most situations.

## Value

A double indicating the doppler effect's pitch shift value. The value is 1 by default.

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
