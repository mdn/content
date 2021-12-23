---
title: RTCPeerConnection.onaddstream
slug: Web/API/RTCPeerConnection/onaddstream
tags:
  - Deprecated
  - Event Handler
  - MediaStream
  - Property
  - RTCPeerConnection
  - SDP
  - Streams
  - WebRTC
  - WebRTC API
  - onaddstream
  - rtc
browser-compat: api.RTCPeerConnection.onaddstream
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **`RTCPeerConnection.onaddstream`** event handler is a
property containing the code to execute when the {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}} event, of type
{{domxref("MediaStreamEvent")}}, is received by this {{domxref("RTCPeerConnection")}}.
Such an event is sent when a {{domxref("MediaStream")}} is added to this connection by
the remote peer. The event is sent immediately after the call
{{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} and
doesn't wait for the result of the SDP negotiation.

> **Warning:** This property has been **removed** from the
> specification; you should now use {{domxref("RTCPeerConnection.ontrack")}} to watch
> for {{DOMxRef("RTCPeerConnection/track_event", "track")}} events instead. It is included here in order to help you adapt
> existing code and understand existing samples, which may not be up-to-date yet.

## Syntax

```js
rtcPeerConnection.onaddstream = eventHandler;
```

### Value

A function which handles {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}} events. These events, of type
{{domxref("MediaStreamEvent")}}, are sent when streams are added to the connection by
the remote peer. The first time an event occurs may be nearly immediately after the
remote end of the connection is set using
{{domxref("RTCPeerConnection.setRemoteDescription()")}}; it doesn't wait for a
particular stream to be accepted or rejected using {{Glossary("SDP")}} negotiation.

## Example

This code, based on an older version of our [Signaling and video
calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) sample, responds to {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}} events by setting the video
source for a {{HTMLElement("video")}} element to the stream specified in the event, and
then enabling a "hang up" button in the app's user interface.

```js
pc.onaddstream = function(event) {
  document.getElementById("received_video").srcObject = event.stream;
  document.getElementById("hangup-button").disabled = false;
};
```

You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to
add a handler for `addstream` events to an {{domxref("RTCPeerConnection")}}.

## Browser compatibility

> **Warning:** This property has been **removed** from the
> specification; you should now use {{domxref("RTCPeerConnection.ontrack")}} to watch
> for {{DOMxRef("RTCPeerConnection/track_event", "track")}} events instead. It is included here in order to help you adapt
> existing code and understand existing samples, which may not be up-to-date yet.

{{Compat}}

## See also

- Use the newer {{DOMxRef("RTCPeerConnection/track_event", "track")}} event, its type {{domxref("RTCTrackEvent")}}, and
  the {{domxref("RTCPeerConnection.ontrack")}} event handler property instead of this.
- The {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}} event and its type, {{domxref("MediaStreamEvent")}}.
