---
title: PannerNode.distanceModel
slug: Web/API/PannerNode/distanceModel
page-type: web-api-instance-property
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - distanceModel
browser-compat: api.PannerNode.distanceModel
---
{{ APIRef("Web Audio API") }}

The `distanceModel` property of the {{ domxref("PannerNode") }} interface is an enumerated value determining which algorithm to use to reduce the volume of the audio source as it moves away from the listener.

The possible values are:

- `linear`: A _linear distance model_ calculating the gain induced by the distance according to:
  `1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)`
- `inverse`: An _inverse distance model_ calculating the gain induced by the distance according to:
  `refDistance / (refDistance + rolloffFactor * (Math.max(distance, refDistance) - refDistance))`
- `exponential`: An _exponential distance model_ calculating the gain induced by the distance according to:
  `pow((Math.max(distance, refDistance) / refDistance, -rolloffFactor)`.

`inverse` is the default value of `distanceModel`.

## Value

An enum — see [`DistanceModelType`](https://webaudio.github.io/web-audio-api/#idl-def-DistanceModelType).

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
