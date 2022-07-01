---
title: MediaStream.getTrackById()
slug: Web/API/MediaStream/getTrackById
page-type: web-api-instance-method
tags:
  - Media
  - MediaStream
  - MediaStream API
  - Method
  - Reference
  - WebRTC
  - getTrackById
browser-compat: api.MediaStream.getTrackById
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStream.getTrackById()`** method returns a
{{domxref("MediaStreamTrack")}} object representing the track with the specified ID
string. If there is no track with the specified ID, this method returns
`null`.

## Syntax

```js
getTrackById(id)
```

### Parameters

- `id`
  - : A string which identifies the track to be returned.

### Return value

If a track is found for which {{domxref("MediaStreamTrack.id")}} matches the specified
`id` string, that {{domxref("MediaStreamTrack")}} object is returned.
Otherwise, the returned value is `null`.

## Examples

This example activates a commentary track on a video by ducking the audio level of the
main audio track to 50%, then enabling the commentary track.

```js
stream.getTrackById("primary-audio-track").applyConstraints({ volume: 0.5 });
stream.getTrackById("commentary-track").enabled = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack.id")}}
