---
title: MediaTrackConstraints.aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
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
  - aspectRatio
  - getusermedia
browser-compat: api.MediaTrackConstraints.aspectRatio
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`aspectRatio`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.aspectRatio", "aspectRatio")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.aspectRatio")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var constraintsObject = { aspectRatio: constraint };

constraintsObject.aspectRatio = constraint;
```

### Value

A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble) describing the acceptable or required value(s) for a
video track's aspect ratio. The value is the width divided by the height and is rounded
to ten decimal places. For example, the standard high-definition video aspect ratio of
16:9 can be computed as 1920/1080, or 1.7777777778.

If this value is a number, the user agent will attempt to obtain media whose aspect
ratio is as close as possible to this number given the capabilities of the hardware and
the other constraints specified. Otherwise, the value of this
[`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDouble) will guide the user agent in its efforts to provide an
exact match to the required aspect ratio (if `exact` is specified or both
`min` and `max` are provided and have the same value) or to a
best-possible value.

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
