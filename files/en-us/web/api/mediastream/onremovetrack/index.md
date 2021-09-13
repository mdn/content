---
title: MediaStream.onremovetrack
slug: Web/API/MediaStream/onremovetrack
tags:
  - API
  - Event Handler
  - Media Streams API
  - MediaStream
  - Property
  - Reference
  - onremovetrack
browser-compat: api.MediaStream.onremovetrack
---
{{APIRef("Media Streams API")}}

The **`MediaStream.onremovetrack`**
property is an [event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called
when the {{event("removetrack")}} event occurs on a {{domxref("MediaStream")}}
instance. This happens when a track of any kind is removed from the media
stream.

This event is fired when the browser removes a track from the stream
(such as when a {{domxref("RTCPeerConnection")}} is renegotiated or a stream being
captured using {{domxref("HTMLMediaElement.captureStream()")}} gets a new set of tracks
because the media element being captured loaded a new source.

The `removetrack` event does _not_ get fired when JavaScript code
explicitly removes tracks from the stream (by calling
{{domxref("MediaStream.removeTrack", "removeTrack()")}}).

## Syntax

```js
MediaStream.onremovetrack = eventHandler;
```

### Value

This should be set to a function which you provide that accepts as input a
{{domxref("MediaStreamTrackEvent")}} object representing the {{event("removetrack")}}
event which has occurred. The {{domxref("MediaStreamTrack")}} representing the track
which was removed is specified in the event's {{domxref("MediaStreamTrackEvent.track",
  "track")}} property.

## Example

This example adds a listener which, when a track is removed from the stream, logs the
track that was removed.

```js
stream.onremovetrack = function(event) {
  let trackList = document.getElementById("tracks");
  let label = document.createElement("li");

  label.textContent = `Removed: ${event.track.kind}: ${event.track.label}`;
  trackList.appendChild(label);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("removetrack")}} event and its type,
  {{domxref("MediaStreamTrackEvent")}}.
