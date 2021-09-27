---
title: MediaTrackSettings.frameRate
slug: Web/API/MediaTrackSettings/frameRate
tags:
  - API
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettings
  - Property
  - Reference
  - Settings
  - Video
  - WebRTC
  - frameRate
browser-compat: api.MediaTrackSettings.frameRate
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`frameRate`** property is a double-precision floating-point
number indicating the frame rate, in frames per second, of the
{{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what
value was selected to comply with your specified constraints for this property's value
as described in the {{domxref("MediaTrackConstraints.frameRate")}} property you provided
when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.frameRate")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var frameRate = MediaTrackSettings.frameRate;
```

### Value

A double-precision floating-point number indicating the current configuration of the
track's frame rate, in frames per second.

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
- {{domxref("MediaTrackConstraints.frameRate")}}
- {{domxref("MediaTrackSettings")}}
