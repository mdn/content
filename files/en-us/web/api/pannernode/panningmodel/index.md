---
title: "PannerNode: panningModel property"
short-title: panningModel
slug: Web/API/PannerNode/panningModel
page-type: web-api-instance-property
browser-compat: api.PannerNode.panningModel
---

{{ APIRef("Web Audio API") }}

The `panningModel` property of the {{ domxref("PannerNode") }} interface is an enumerated value determining which spatialization algorithm to use to position the audio in 3D space.

The possible values are:

- `equalpower`: Represents the equal-power panning algorithm, generally regarded as simple and efficient. `equalpower` is the default value.
- `HRTF`: Renders a stereo output of higher quality than `equalpower` — it uses a convolution with measured impulse responses from human subjects.

## Value

An enum — see [`PanningModelType`](https://webaudio.github.io/web-audio-api/#idl-def-PanningModelType).

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
