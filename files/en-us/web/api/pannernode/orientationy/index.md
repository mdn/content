---
title: "PannerNode: orientationY property"
short-title: orientationY
slug: Web/API/PannerNode/orientationY
page-type: web-api-instance-property
browser-compat: api.PannerNode.orientationY
---

{{ APIRef("Web Audio API") }}

The **`orientationY`** property of the {{ domxref("PannerNode") }} interface
indicates the Y (vertical) component of the direction the audio source is facing, in 3D Cartesian coordinate space.

The complete vector is defined by the position of the audio source, given as
({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}},
{{domxref("PannerNode.positionZ", "positionZ")}}), and the orientation
of the audio source (that is, the direction in which it's facing), given as
({{domxref("PannerNode.orientationX", "orientationX")}},
`orientationY`,
{{domxref("PannerNode.orientationZ", "orientationZ")}}).

Depending on the directionality of the sound (as specified using the attributes
{{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}},
{{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}, and
{{domxref("PannerNode.coneOuterGain", "coneOuterGain")}}), the orientation of the
sound may alter the perceived volume of the sound as it's being played. If the sound
is pointing toward the listener, it will be louder than if the sound is pointed away
from the listener.

The {{domxref("AudioParam")}} contained by this property is read only; however, you
can still change the value of the parameter by assigning a new value to its
{{domxref("AudioParam.value")}} property.

## Value

An {{domxref("AudioParam")}} whose `value` is the Y component of the
direction the audio source is facing, in 3D Cartesian coordinate space.

## Examples

See [`PannerNode.orientationX`](/en-US/docs/Web/API/PannerNode/orientationX#example) for example code that demonstrates the effect on volume of changing the {{domxref("PannerNode")}} orientation parameters in combination with {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} and {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}
