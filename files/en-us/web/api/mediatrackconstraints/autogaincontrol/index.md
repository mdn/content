---
title: MediaTrackConstraints.autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Web
  - autoGainControl
browser-compat: api.MediaTrackConstraints.autoGainControl
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`autoGainControl`** property is a
[`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainBoolean) describing the requested or mandatory constraints placed
upon the value of the {{domxref("MediaTrackSettings.autoGainControl",
  "autoGainControl")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.autoGainControl")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

Automatic gain control is typically a feature provided by microphones, although it can
be provided by other input sources as well.

## Syntax

```js
var constraintsObject = { autoGainControl: constraint };

constraintsObject.autoGainControl = constraint;
```

### Value

If this value is a simple `true` or `false`, the user agent will
attempt to obtain media with automatic gain control enabled or disabled as specified, if
possible, but will not fail if this can't be done. If, instead, the value is given as an
object with an `exact` field, that field's Boolean value indicates a required
setting for the automatic gain control feature; if it can't be met, then the request
will result in an error.

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
