---
title: "PannerNode: positionX property"
short-title: positionX
slug: Web/API/PannerNode/positionX
page-type: web-api-instance-property
browser-compat: api.PannerNode.positionX
---

{{ APIRef("Web Audio API") }}

The **`positionX`** property of the {{ domxref("PannerNode")
    }} interface specifies the X coordinate of the audio source's position in 3D Cartesian
coordinates, corresponding to the _horizontal_ axis (left-right).

The complete vector is defined by the position of the audio source, given as
({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY",
    "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}), and the orientation
of the audio source (that is, the direction in which it's facing), given as
({{domxref("PannerNode.orientationX", "orientationX")}},
{{domxref("PannerNode.orientationY", "orientationY")}},
{{domxref("PannerNode.orientationZ", "orientationZ")}}).

Depending on the directionality of the sound (as specified using the attributes
{{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}},
{{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}, and
{{domxref("PannerNode.coneOuterGain", "codeOuterGain")}}), the orientation of the
sound may alter the perceived volume of the sound as it's being played. If the sound
is pointing toward the listener, it will be louder than if the sound is pointed away
from the listener.

The {{domxref("AudioParam")}} contained by this property is read only; however, you
can still change the value of the parameter by assigning a new value to its
{{domxref("AudioParam.value")}} property.

## Value

An {{domxref("AudioParam")}} whose `value` is the X coordinate of the audio
source's position, in 3D Cartesian coordinates. The default value is 0.

## Examples

The following example starts an oscillator, and pans it to the left after 1 second, to
the right after 2 seconds, and back to the center after 3 seconds.

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);

panner.positionX.setValueAtTime(-1, context.currentTime + 1);
panner.positionX.setValueAtTime(1, context.currentTime + 2);
panner.positionX.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner).connect(context.destination);

osc.start(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}
