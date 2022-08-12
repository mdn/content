---
title: PannerNode.maxDistance
slug: Web/API/PannerNode/maxDistance
page-type: web-api-instance-property
tags:
  - API
  - PannerNode
  - Property
  - Reference
  - Web Audio API
  - maxDistance
browser-compat: api.PannerNode.maxDistance
---
{{ APIRef("Web Audio API") }}

The `maxDistance` property of the {{ domxref("PannerNode") }} interface is a double value representing the maximum distance between the audio source and the listener, after which the volume is not reduced any further. This value is used only by the `linear` distance model.

The `maxDistance` property's default value is `10000`.

## Value

A double. The default is `10000`, and non-positive values are not allowed.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the property has been given a value that is outside the accepted range.

## Examples

See [`BaseAudioContext.createPanner()`](/en-US/docs/Web/API/BaseAudioContext/createPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
