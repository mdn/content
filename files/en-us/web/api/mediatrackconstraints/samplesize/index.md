---
title: MediaTrackConstraints.sampleSize
slug: Web/API/MediaTrackConstraints/sampleSize
tags:
  - API
  - Constraints
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - WebRTC
  - sampleSize
browser-compat: api.MediaTrackConstraints.sampleSize
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`sampleSize`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.sampleSize", "sampleSize")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.sampleSize")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var constraintsObject = { sampleSize: constraint };

constraintsObject.sampleSize = constraint;
```

### Value

If this value is a number, the user agent will attempt to obtain media whose sample
size (in bits per linear sample) is as close as possible to this number given the
capabilities of the hardware and the other constraints specified. Otherwise, the value
of this [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainULong) will guide the user agent in its efforts to provide
an exact match to the required sample size (if `exact` is specified or both
`min` and `max` are provided and have the same value) or to a
best-possible value.

> **Note:** Since this property can only represent linear sample sizes, this constraint can only
> be met by devices that can produce audio with linear samples.

## Example

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
