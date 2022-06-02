---
title: PannerNode.positionZ
slug: Web/API/PannerNode/positionZ
page-type: web-api-instance-property
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - positionZ
browser-compat: api.PannerNode.positionZ
---
{{ APIRef("Web Audio API") }}

The **`positionZ`** property of the {{ domxref("PannerNode") }} interface specifies the Z coordinate of the audio source's position in 3D Cartesian
coordinates, corresponding to the _depth_ axis (behind-in front of the
listener). The complete vector is defined by the position of the audio source, given
as ({{domxref("PannerNode.positionX", "positionX")}},
{{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ",
    "positionZ")}}), and the orientation of the audio source (that is, the direction in
which it's facing), given as ({{domxref("PannerNode.orientationX", "orientationX")}},
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

An {{domxref("AudioParam")}} whose `value` is the Z coordinate of the audio
source's position, in 3D Cartesian coordinates.

## Examples

The following example starts an oscillator and moves it in front of the listener after
1 second, behind the listener after 2 seconds, and back to the listener's position after
3 seconds. Note that in this case, the change will mainly affect the timbre and
perceived volume of the sound.

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);
panner.panningModel = 'HRTF';

panner.positionZ.setValueAtTime(1, context.currentTime + 1);
panner.positionZ.setValueAtTime(-1, context.currentTime + 2);
panner.positionZ.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner)
   .connect(context.destination);

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
