---
title: PannerNode.coneOuterGain
slug: Web/API/PannerNode/coneOuterGain
page-type: web-api-instance-property
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - coneOuterGain
browser-compat: api.PannerNode.coneOuterGain
---
{{ APIRef("Web Audio API") }}

The `coneOuterGain` property of the {{ domxref("PannerNode") }} interface is a double value, describing the amount of volume reduction outside the cone, defined by the {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} attribute.

The `coneOuterGain` property's default value is `0`, meaning that no sound can be heard outside the cone.

## Value

A double. The default is `0`, and its value can be in the range 0–1.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the property has been given a value outside the accepted range (0–1).

## Examples

See [`PannerNode.orientationX`](/en-US/docs/Web/API/PannerNode/orientationX#example) for example code that demonstrates how changing the {{domxref("PannerNode")}} orientation parameters in combination with {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} and {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} affects volume.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
