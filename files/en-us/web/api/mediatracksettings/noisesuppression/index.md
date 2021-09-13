---
title: MediaTrackSettings.noiseSuppression
slug: Web/API/MediaTrackSettings/noiseSuppression
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettings
  - Property
  - Web
  - noiseSuppression
browser-compat: api.MediaTrackSettings.noiseSuppression
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`noiseSuppression`** property is a Boolean value whose value
indicates whether or not noise suppression technology is enabled on an audio track. This
lets you determine what value was selected to comply with your specified constraints for
this property's value as described in the
{{domxref("MediaTrackConstraints.noiseSuppression")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

Noise suppression automatically filters the audio to remove background noise, hum
caused by equipment, and the like from the sound before delivering it to your code. This
feature is typically used on microphones, although it is technically possible it could
be provided by other input sources as well.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.noiseSuppression")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var noiseSuppression = MediaTrackSettings.noiseSuppression;
```

### Value

A Boolean value which is `true` if the input track has noise suppression
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
- {{domxref("MediaTrackConstraints.noiseSuppression")}}
- {{domxref("MediaTrackSupportedConstraints")}}
