---
title: MediaTrackSettings.height
slug: Web/API/MediaTrackSettings/height
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
  - height
browser-compat: api.MediaTrackSettings.height
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`height`**
property is an integer indicating the number of pixels tall
{{domxref("MediaStreamTrack")}} is currently configured to be. This lets you determine
what value was selected to comply with your specified constraints for this property's
value as described in the {{domxref("MediaTrackConstraints.height")}} property you
provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
or {{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.height")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var height = MediaTrackSettings.height;
```

### Value

An integer value indicating the height, in pixels, of the video track as currently
configured.

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
- {{domxref("MediaTrackConstraints.height")}}
- {{domxref("MediaTrackSettings")}}
