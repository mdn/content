---
title: 'RTCPeerConnection: icegatheringstatechange event'
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
tags:
  - API
  - Connection
  - Connectivity
  - Gathering
  - ICE
  - RTCPeerConnection
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - Event
  - icegatheringstatechange
  - state
browser-compat: api.RTCPeerConnection.icegatheringstatechange_event
---
{{APIRef("WebRTC")}}

The **`icegatheringstatechange`** event is sent to the {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}} event handler on an {{domxref("RTCPeerConnection")}} when the state of the {{Glossary("ICE")}} candidate gathering process changes.
This signifies that the value of the connection's {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} property has changed.

When ICE firststarts to gather connection candidates, the value changes from `new` to `gathering` to indicate that the process of collecting candidate configurations for the connection has begun. When the value changes to `complete`, all of the transports that make up the `RTCPeerConnection` have finished gathering ICE candidates.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** While you can determine that ICE candidate gathering is complete by watching for `icegatheringstatechange` events and checking for the value of {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} to become `complete`, you can also have your handler for the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event look to see if its {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} property is `null`. This also indicates that collection of candidates is finished.

## Examples

This example creates a handler for `icegatheringstatechange` events.

```js
pc.onicegatheringstatechange = ev => {
  let connection = ev.target;

  switch(connection.iceGatheringState) {
    case "gathering":
      /* collection of candidates has begun */
      break;
    case "complete":
      /* collection of candidates is finished */
      break;
  }
}
```

Likewise, you can use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to add a listener for `icegatheringstatechange` events:

```js
pc.addEventListener("icegatheringstatechange", ev => {
  let connection = ev.target;

  switch(connection.iceGatheringState) {
    case "gathering":
      /* collection of candidates has begun */
      break;
    case "complete":
      /* collection of candidates is finished */
      break;
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
