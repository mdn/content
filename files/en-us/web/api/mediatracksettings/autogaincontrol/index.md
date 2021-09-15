---
title: MediaTrackSettings.autoGainControl
slug: Web/API/MediaTrackSettings/autoGainControl
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettngs
  - Property
  - Web
  - autoGainControl
browser-compat: api.MediaTrackSettings.autoGainControl
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`autoGainControl`** property is a Boolean value whose value
indicates whether or not automatic gain control (AGC) is enabled on an audio track. This
lets you determine what value was selected to comply with your specified constraints for
this property's value as described in the
{{domxref("MediaTrackConstraints.autoGainControl")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

Automatic gain control is a feature in which a sound source automatically manages
changes in the volume of its source media to maintain a steady overall volume level.
This feature is typically used on microphones, although it can be provided by other
input sources as well.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.autoGainControl")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var autoGainControl = MediaTrackSettings.autoGainControl;
```

### Value

A Boolean value which is `true` if the track has automatic gain control
enabled or `false` if AGC is disabled.

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
- {{domxref("MediaTrackConstraints.autoGainControl")}}
- {{domxref("MediaTrackSupportedConstraints")}}
