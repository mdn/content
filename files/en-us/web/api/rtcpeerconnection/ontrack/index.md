---
title: RTCPeerConnection.ontrack
slug: Web/API/RTCPeerConnection/ontrack
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - ontrack
browser-compat: api.RTCPeerConnection.ontrack
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} property
**`ontrack`** is an [event handler](/en-US/docs/Web/Events/Event_handlers) which
specifies a function to be called when the {{DOMxRef("RTCPeerConnection/track_event", "track")}} event occurs, indicating
that a track has been added to the {{domxref("RTCPeerConnection")}}. The
function receives as input the event object, of type {{domxref("RTCTrackEvent")}}; this
event is sent when a new incoming {{domxref("MediaStreamTrack")}} has been created and
associated with an {{domxref("RTCRtpReceiver")}} object which has been added to the set
of receivers on connection.

## Syntax

```js
RTCPeerConnection.ontrack = eventHandler;
```

### Value

Set `ontrack` to be a function you provide that accepts as input a
{{domxref("RTCTrackEvent")}} object describing the new track and how it's being used.
This information includes the {{domxref("MediaStreamTrack")}} object representing the
new track, the {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpTransceiver")}}, and a
list of {{domxref("MediaStream")}} objects which indicates which stream or streams the
track is part of..

## Example

This example, taken from the code for the article [Signaling and video
calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling), connects the incoming track to the {{HTMLElement("video")}} element which
will be used to display the incoming video.

```js
pc.ontrack = function(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
};
```

The first line of our `ontrack` event handler takes the first stream in the
incoming track and sets the {{htmlattrxref("srcObject", "video")}} attribute to that.
This connects that stream of video to the element so that it begins to be presented to
the user. The second line of code enables a "hang up" button, which the user can use to
disconnect from the call.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/track_event", "track")}} event and its type, {{domxref("RTCTrackEvent")}}.
