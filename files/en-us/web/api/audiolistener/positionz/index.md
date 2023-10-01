---
title: "AudioListener: positionZ property"
short-title: positionZ
slug: Web/API/AudioListener/positionZ
page-type: web-api-instance-property
browser-compat: api.AudioListener.positionZ
---

{{ APIRef("Web Audio API") }}

The `positionZ` read-only property of the {{ domxref("AudioListener") }} interface is an {{domxref("AudioParam")}} representing the z position of the listener in 3D cartesian space.

> **Note:** The parameter is _a-rate_ when used with a {{domxref("PannerNode")}} whose {{domxref("PannerNode.panningModel", "PannerNode")}} is set to equalpower, or _k-rate_ otherwise.

## Value

An {{domxref("AudioParam")}}. Its default value is 0, and it can range between positive and negative infinity.

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
