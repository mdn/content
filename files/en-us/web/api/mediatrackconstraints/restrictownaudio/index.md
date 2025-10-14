---
title: "MediaTrackConstraints: restrictOwnAudio property"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackConstraints/restrictOwnAudio
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaStreamTrack.applyConstraints.restrictOwnAudio_constraint
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`restrictOwnAudio`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) that specifies the requested or mandatory constraints placed on the value of the {{domxref("MediaTrackSettings.restrictOwnAudio","restrictOwnAudio")}} constrainable property.

This property controls whether system audio originating from the capturing tab is filtered out of screen capture, allowing for cleaner screen recordings in some cases. For example, if the capturing web page itself is playing embedded audio or video, that audio would be included in the capture. Since this could lead to an undesirable echo or interfere with the intended audio sources from other tabs or applications, removing it from the capture is desirable.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.restrictOwnAudio")}}, as returned
by {{domxref("MediaDevices.getSupportedConstraints()")}}. However, 
this is rarely necessary since browsers typically ignore any constraints they don't recognize.

## Value

A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) value.

If the value is `true`, the user agent will attempt to remove any audio originating from the tab that called {{domxref("MediaDevices.getDisplayMedia()")}} to initiate screen capture. If removal of audio via processing fails, the user agent may exclude all audio originating from the capturing tab.

> [!NOTE]
> If the captured display surface doesn't include system audio, this setting will have no effect.

If the value is given as `exact`, that field's boolean value indicates an exact requirement for the `restrictOwnAudio` feature; if the user agent can't meet this requirement, the request will result in an error.

If the value is `false`, the user agent will not attempt to restrict any system audio originating from the capturing tab.

## Examples

```js
let isCapturingTabSystemAudioRestricted = displayStream
  .getAudioTracks()[0]
  .getSettings().restrictOwnAudio;
```

The [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example shows how to use media track constraints.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
