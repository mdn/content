---
title: "RTCPeerConnection: icecandidate event"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
page-type: web-api-event
browser-compat: api.RTCPeerConnection.icecandidate_event
---

{{APIRef("WebRTC")}}

An **`icecandidate`** event is sent to an {{domxref("RTCPeerConnection")}} when an {{domxref("RTCIceCandidate")}} has been identified and added to the local peer by a call to {{domxref("RTCPeerConnection.setLocalDescription()")}}. The event handler should transmit the candidate to the remote peer over the signaling channel so the remote peer can add it to its set of remote candidates.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("icecandidate", (event) => {});

onicecandidate = (event) => {};
```

## Event type

An {{domxref("RTCPeerConnectionIceEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Event properties

_A {{domxref("RTCPeerConnectionIceEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("RTCIceCandidate")}} containing the candidate associated with the event, or `null` if this event indicates that there are no further candidates to come.

## Description

There are three reasons why the `icecandidate` event is fired on an {{domxref("RTCPeerConnection")}}.

### Sharing a new candidate

The majority of `icecandidate` events are fired to indicate that a new candidate has been gathered. This candidate needs to be delivered to the remote peer over the signaling channel your code manages.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

The remote peer, upon receiving the candidate, will add the candidate to its candidate pool by calling {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}, passing in the {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} string you have passed along using the signaling server.

### Indicating the end of a generation of candidates

When an ICE negotiation session runs out of candidates to propose for a given {{domxref("RTCIceTransport")}}, it has completed gathering for a **generation** of candidates. That this has occurred is indicated by an `icecandidate` event whose {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} string is empty (`""`).

You should deliver this to the remote peer just like any standard candidate, as described under [Sharing a new candidate](#sharing_a_new_candidate) above. This ensures that the remote peer is given the end-of-candidates notification as well. As you see in the code in the previous section, every candidate is sent to the other peer, including any that might have an empty candidate string. Only candidates for which the event's {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} property is `null` are not forwarded across the signaling connection.

The end-of-candidates indication is described in [section 9.3 of the Trickle ICE draft specification](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) (note that the section number is subject to change as the specification goes through repeated drafts).

### Indicating that ICE gathering is complete

Once all ICE transports have finished gathering candidates and the value of the {{domxref("RTCPeerConnection")}} object's {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} has made the transition to `complete`, an `icecandidate` event is sent with the value of `complete` set to `null`.

This signal exists for backward compatibility purposes and does _not_ need to be delivered onward to the remote peer (which is why the code snippet above checks to see if `event.candidate` is `null` prior to sending the candidate along.

If you need to perform any special actions when there are no further candidates expected, you're much better off watching the ICE gathering state by watching for {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} events:

```js
pc.addEventListener("icegatheringstatechange", (ev) => {
  switch (pc.iceGatheringState) {
    case "new":
      /* gathering is either just starting or has been reset */
      break;
    case "gathering":
      /* gathering has begun or is ongoing */
      break;
    case "complete":
      /* gathering has ended */
      break;
  }
});
```

As you can see in this example, the `icegatheringstatechange` event lets you know when the value of the {{domxref("RTCPeerConnection")}} property {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} has been updated. If that value is now `complete`, you know that ICE gathering has just ended.

This is a more reliable approach than looking at the individual ICE messages for one indicating that the ICE session is finished.

## Examples

This example creates a simple handler for the `icecandidate` event that uses a function called `sendMessage()` to create and send a reply to the remote peer through the signaling server.

First, an example using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
pc.addEventListener(
  "icecandidate",
  (ev) => {
    if (ev.candidate) {
      sendMessage({
        type: "new-ice-candidate",
        candidate: event.candidate,
      });
    }
  },
  false,
);
```

You can also set the `onicecandidate` event handler property directly:

```js
pc.onicecandidate = (ev) => {
  if (ev.candidate) {
    sendMessage({
      type: "new-ice-candidate",
      candidate: event.candidate,
    });
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
