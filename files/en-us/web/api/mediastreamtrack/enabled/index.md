---
title: "MediaStreamTrack: enabled property"
short-title: enabled
slug: Web/API/MediaStreamTrack/enabled
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.enabled
---

{{APIRef("Media Capture and Streams")}}

The **`enabled`** property on the
{{domxref("MediaStreamTrack")}} interface is a Boolean value which is
`true` if the track is allowed to render the source stream or
`false` if it is not. This can be used to intentionally mute a
track.

When enabled, a track's data is output from the source to the
destination; otherwise, empty frames are output.

In the case of audio, a disabled track generates frames of silence (that is, frames in
which every sample's value is 0). For video tracks, every frame is filled entirely with
black pixels.

The value of `enabled`, in essence, represents what a typical user would
consider the muting state for a track, whereas the {{domxref("MediaStreamTrack.muted",
  "muted")}} property indicates a state in which the track is temporarily unable to output
data, such as a scenario in which frames have been lost in transit.

> **Note:** If the track has been disconnected, the value of this property
> can be changed, but has no effect.

## Value

When `true`, `enabled` indicates that the track is permitted to
render its actual media to the output. When `enabled` is set to
`false`, the track only generates empty frames.

Empty audio frames have every sample's value set to 0. Empty video frames have every
pixel set to black.

> **Note:** When implementing a mute/unmute feature, you should use the
> `enabled` property.

## Usage notes

If the {{domxref("MediaStreamTrack")}} represents the video input from a camera,
disabling the track by setting `enabled` to `false` also updates
device activity indicators to show that the camera is not currently recording or
streaming. For example, the green "in use" light next to the camera in iMac and MacBook
computers turns off while the track is muted in this way.

## Example

This example demonstrates a {{domxref("Element/click_event", "click")}} event handler for a pause button.

```js
pauseButton.onclick = (evt) => {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

This creates a variable, `newState`, which is the opposite of the current
value of `enabled`, then uses that to select either the Emoji character for
the "play" icon or the character for the "pause" icon as the new
{{domxref("Element.innerHTML", "innerHTML")}} of the pause button's element.

Finally, the new value of `enabled` is saved, making the change take effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
