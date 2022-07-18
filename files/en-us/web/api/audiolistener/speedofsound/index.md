---
title: AudioListener.speedOfSound
slug: Web/API/AudioListener/speedOfSound
page-type: web-api-instance-property
tags:
  - API
  - AudioListener
  - Deprecated
  - Property
  - Reference
  - Web Audio API
  - speedOfSound
browser-compat: api.AudioListener.speedOfSound
---
{{ APIRef("Web Audio API") }}{{deprecated_header}}

The **`speedOfSound`** property of the {{
  domxref("AudioListener") }} interface is a double value representing the speed of sound,
in _meters per second_.

The `speedOfSound` property's default value is `343.3` m/s and is
used to calculate the [doppler shift](https://en.wikipedia.org/wiki/Doppler_effect) appropriate for the speed the panner is traveling at (as defined by
{{domxref("PannerNode.setVelocity")}}.)

> **Note:** Bear in mind that no propagation delay is automatically
> applied to a sound far from the listener.

## Value

A double.

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
