---
title: 'RTCPeerConnection: negotiationneeded event'
slug: Web/API/RTCPeerConnection/negotiationneeded_event
tags:
  - API
  - Event
  - Negotiation
  - RTCPeerConnection
  - Reference
  - SDP
  - Signaling
  - WebRTC
  - WebRTC API
  - negotiationneeded
  - rtc
browser-compat: api.RTCPeerConnection.negotiationneeded_event
---
{{APIRef("WebRTC")}}

A **`negotiationneeded`** event is sent to the {{domxref("RTCPeerConnection")}} when negotiation of the connection through the signaling channel is required.
This occurs both during the initial setup of the connection as well as any time a change to the communication environment requires reconfiguring the connection.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("RTCPeerConnection.onnegotiationneeded")}}
      </td>
    </tr>
  </tbody>
</table>

The `negotiationneeded` event is first dispatched to the {{domxref("RTCPeerConnection")}} when media is first added to the connection. This starts the process of {{Glossary("ICE")}} negotiation by instructing your code to begin exchanging ICE candidates through the signaling server. See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling", "Signaling transaction flow")}} for a description of the signaling process that begins with a `negotiationneeded` event.

## Examples

In this example, we use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to create an event handler for `negotiationneeded`. Its role is to create an {{Glossary("SDP")}} offer and send it through the signaling channel to the remote peer.

```js
pc.addEventListener("negotiationneeded", ev => {
  pc.createOffer()
  .then(offer => return pc.setLocalDescription(offer))
  .then(() => sendSignalingMessage({
    type: "video-offer",
    sdp: pc.localDescription
  }))
  .catch(err => {
    /* handle error */
  });
}, false);
```

After creating the offer, the local end is configured by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}; then a signaling message is created and sent to the remote peer through the signaling server, to share that offer with the other peer. The other peer should recognize this message and follow up by creating its own {{domxref("RTCPeerConnection")}}, setting the remote description with {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}, and then creating an answer to send back to the offering peer.

You can also set an event handler for the `negotiationneeded` event by assigning the event handler function to the {{domxref("RTCPeerConnection.onnegotiationneeded")}} property:

```js
pc.onnegotiationneeded = ev => {
  pc.createOffer()
  .then(offer => return pc.setLocalDescription(offer))
  .then(() => sendSignalingMessage({
    type: "video-offer",
    sdp: pc.localDescription
  }))
  .catch(err => {
    /* handle error */
  );
};
```

For a more detailed example, see {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling", "Starting negotiation")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
