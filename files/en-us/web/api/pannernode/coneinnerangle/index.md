---
title: PannerNode.coneInnerAngle
slug: Web/API/PannerNode/coneInnerAngle
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - coneInnerAngle
browser-compat: api.PannerNode.coneInnerAngle
---
{{ APIRef("Web Audio API") }}

The `coneInnerAngle` property of the {{ domxref("PannerNode") }} interface is a double value describing the angle, in degrees, of a cone inside of which there will be no volume reduction.

The `coneInnerAngle` property's default value is `360`, suitable for a non-directional source.

## Syntax

```js
var audioCtx = new AudioContext();
var panner = audioCtx.createPanner();
panner.coneInnerAngle = 360;
```

### Value

A double.

## Example

See [`PannerNode.orientationX`](/en-US/docs/Web/API/PannerNode/orientationX#example) for example code that demonstrates the effect on volume of changing the {{domxref("PannerNode")}} orientation parameters in combination with {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} and {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialisation basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
