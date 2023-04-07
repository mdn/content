---
title: "PannerNode: coneOuterAngle property"
short-title: coneOuterAngle
slug: Web/API/PannerNode/coneOuterAngle
page-type: web-api-instance-property
browser-compat: api.PannerNode.coneOuterAngle
---

{{ APIRef("Web Audio API") }}

The `coneOuterAngle` property of the {{ domxref("PannerNode") }} interface is a double value describing the angle, in degrees, of a cone outside of which the volume will be reduced by a constant value, defined by the {{domxref("PannerNode.coneOuterGain","coneOuterGain")}} property.

The `coneOuterAngle` property's default value is `0`.

## Value

A double.

## Examples

See [`PannerNode.orientationX`](/en-US/docs/Web/API/PannerNode/orientationX#example) for example code that demonstrates the effect on volume of changing the {{domxref("PannerNode")}} orientation parameters in combination with {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} and {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
