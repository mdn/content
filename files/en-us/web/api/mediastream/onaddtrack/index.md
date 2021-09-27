---
title: MediaStream.onaddtrack
slug: Web/API/MediaStream/onaddtrack
tags:
  - API
  - Event Handler
  - Media Streams API
  - MediaStream
  - Property
  - Reference
browser-compat: api.MediaStream.onaddtrack
---
{{APIRef("Media Streams API")}}

The **`MediaStream.onaddtrack`**
property is an [event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called
when the {{event("addtrack")}} event occurs on a {{domxref("MediaStream")}} instance.
This happens when a new track of any kind is added to the media stream.

This
event is fired when the browser adds a track to the stream (such as when a
{{domxref("RTCPeerConnection")}} is renegotiated or a stream being captured using
{{domxref("HTMLMediaElement.captureStream()")}} gets a new set of tracks because the
media element being captured loaded a new source.

The `addtrack` event does _not_ get fired when JavaScript code
explicitly adds tracks to the stream (by calling {{domxref("MediaStream.addTrack",
  "addTrack()")}}).

## Syntax

```js
MediaStream.onaddtrack = eventHandler;
```

### Value

This should be set to a function which you provide that accepts as input a
{{domxref("MediaStreamTrackEvent")}} object representing the {{event("addtrack")}} event
which has occurred. The {{domxref("MediaStreamTrack")}} representing the track which was
added is specified in the event's {{domxref("MediaStreamTrackEvent.track", "track")}}
property.

## Example

This example adds a listener which, when a new track is added to the stream, appends a
new item to a list of tracks; the new item shows the track's `kind`
(`"audio"` or `"video"`) and `label`.

```js
stream.onaddtrack = function(event) {
  let trackList = document.getElementById("tracks");
  let label = document.createElement("li");

  label.innerHTML = event.track.kind + ": " + event.track.label;
  trackList.appendChild(label);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("addtrack")}} event and its type, {{domxref("MediaStreamTrackEvent")}}.
