---
title: "MediaStream: removeTrack() method"
short-title: removeTrack()
slug: Web/API/MediaStream/removeTrack
page-type: web-api-instance-method
browser-compat: api.MediaStream.removeTrack
---

{{APIRef("Media Capture and Streams")}}

The **`removeTrack()`** method of the {{domxref("MediaStream")}} interface removes a
{{domxref("MediaStreamTrack")}} from a stream.

## Syntax

```js-nolint
removeTrack(track)
```

### Parameters

- `track`
  - : A {{domxref("MediaStreamTrack")}} that will be removed from the stream.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example demonstrates how to remove the audio and video tracks from a {{domxref("MediaStream")}}.
`fetchStreamFunction` is an event handler for `fetchStreamButton`. When the button is clicked, audio
and video are captured from the system's devices. `removeTracksFunction` is the event handler for `removeTracksButton`.
When this button is clicked, the audio and video tracks are removed from the {{domxref("MediaStream")}}.

```js
let initialStream = null;
let newStream = null;

let fetchStreamButton = document.getElementById("fetchStream");
let removeTracksButton = document.getElementById("removeTracks");

async function fetchStreamFunction() {
  initialStream = await navigator.mediaDevices.getUserMedia({
    video: { width: 620, height: 310 },
    audio: true,
  });
  if (initialStream) {
    await attachToDOM(initialStream);
  }
}

async function attachToDOM(stream) {
  newStream = new MediaStream(stream.getTracks());
  document.querySelector("video").srcObject = newStream;
}

async function removeTracksFunction() {
  let videoTrack = newStream.getVideoTracks()[0];
  let audioTrack = newStream.getAudioTracks()[0];

  newStream.removeTrack(videoTrack);
  newStream.removeTrack(audioTrack);

  // Stream will be empty
  console.log(newStream.getTracks());
}

fetchStreamButton.addEventListener("click", fetchStreamFunction);
removeTracksButton.addEventListener("click", removeTracksFunction);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
