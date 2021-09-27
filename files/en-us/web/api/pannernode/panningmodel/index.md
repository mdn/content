---
title: PannerNode.panningModel
slug: Web/API/PannerNode/panningModel
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - panningModel
browser-compat: api.PannerNode.panningModel
---
{{ APIRef("Web Audio API") }}

The `panningModel` property of the {{ domxref("PannerNode") }} interface is an enumerated value determining which spatialisation algorithm to use to position the audio in 3D space.

The possible values are:

- `equalpower`: Represents the equal-power panning algorithm, generally regarded as simple and efficient. `equalpower` is the default value.
- `HRTF`: Renders a stereo output of higher quality than `equalpower` — it uses a convolution with measured impulse responses from human subjects.

## Syntax

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.panningModel = 'HRTF';
```

### Value

A enum — see [`PanningModelType`](https://webaudio.github.io/web-audio-api/#idl-def-PanningModelType).

## Example

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
