---
title: RTCTrackEvent
slug: Web/API/RTCTrackEvent
page-type: web-api-interface
browser-compat: api.RTCTrackEvent
---

{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) interface **`RTCTrackEvent`** represents the {{domxref("RTCPeerConnection.track_event", "track")}} event, which is sent when a new {{domxref("MediaStreamTrack")}} is added to an {{domxref("RTCRtpReceiver")}} which is part of the {{domxref("RTCPeerConnection")}}.

The target is the `RTCPeerConnection` object to which the track is being added.

This event is sent by the WebRTC layer to the website or application, so you will not typically need to instantiate an `RTCTrackEvent` yourself.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCTrackEvent.RTCTrackEvent", "RTCTrackEvent()")}}
  - : Creates and returns a new `RTCTrackEvent` object. You will probably not need to create new track events yourself, since they're typically created by the WebRTC infrastructure and sent to the connection's {{domxref("RTCPeerConnection.track_event", "ontrack")}} event handler.

## Instance properties

_Since `RTCTrackEvent` is based on {{domxref("Event")}}, its properties are also available._

- {{domxref("RTCTrackEvent.receiver", "receiver")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpReceiver")}} used by the track that's been added to the `RTCPeerConnection`.
- {{domxref("RTCTrackEvent.streams", "streams")}} {{ReadOnlyInline}} {{optional_inline}}
  - : An array of {{domxref("MediaStream")}} objects, each representing one of the media streams to which the added {{domxref("RTCTrackEvent.track", "track")}} belongs. By default, the array is empty, indicating a streamless track.
- {{domxref("RTCTrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The {{domxref("MediaStreamTrack")}} which has been added to the connection.
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpTransceiver")}} being used by the new track.

## Track event types

There is only one type of track event.

### `track`

The {{domxref("RTCPeerConnection.track_event", "track")}} event is sent to the {{domxref("RTCPeerConnection")}} when a new track has been added to the connection. By the time the `track` event is delivered to the `RTCPeerConnection`'s {{domxref("RTCPeerConnection.track_event", "ontrack")}} handler, the new media has completed its negotiation for a specific {{domxref("RTCRtpReceiver")}} (which is specified by the event's {{domxref("RTCTrackEvent.receiver", "receiver")}} property).

In addition, the {{domxref("MediaStreamTrack")}} specified by the receiver's {{domxref("RTCRtpReceiver.track", "track")}} is the same one specified by the event's {{domxref("RTCTrackEvent.track", "track")}}, and the track has been added to any associated remote {{domxref("MediaStream")}} objects.

You can add a `track` event listener to be notified when the new track is available so that you can, for example, attach its media to a {{HTMLElement("video")}} element, using either {{domxref("EventTarget.addEventListener", "RTCPeerConnection.addEventListener()")}} or the `ontrack` event handler property.

> [!NOTE]
> It may be helpful to keep in mind that you receive the `track` event when a new inbound track has been added to your connection, and you call {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} to add a track to the far end of the connection, thereby triggering a `track` event on the remote peer.

## Example

This simple example creates an event listener for the {{domxref("RTCPeerConnection.track_event", "track")}} event which sets the {{domxref("HTMLMediaElement.srcObject", "srcObject")}} of the {{HTMLElement("video")}} element with the ID `video-box` to the first stream in the list passed in the event's {{domxref("RTCTrackEvent.streams", "streams")}} array.

```js
peerConnection.addEventListener(
  "track",
  (e) => {
    let videoElement = document.getElementById("video-box");
    videoElement.srcObject = e.streams[0];
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
