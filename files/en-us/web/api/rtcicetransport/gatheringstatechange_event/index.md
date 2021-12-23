---
title: 'RTCIceTransport: gatheringstatechange event'
slug: Web/API/RTCIceTransport/gatheringstatechange_event
tags:
  - Connection
  - Connectivity
  - Gathering
  - ICE
  - Negotiation
  - RTCIceTransport
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - events
  - gatheringSstate
  - gatheringstatechange
browser-compat: api.RTCIceTransport.gatheringstatechange_event
---
{{APIRef("WebRTC")}}

A **`gatheringstatechange`** event is sent to an {{domxref("RTCIceTransport")}} when its {{Glossary("ICE")}} candidate gathering state changes.

The gathering state, whose actual status can be found in the transport object's {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} property, indicates whether or not the ICE agent has begun gathering candidates, and if so, if it has finished doing so.

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
        {{DOMxRef("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}}
      </td>
    </tr>
  </tbody>
</table>

The key difference between `gatheringstatechange` and {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} is that the latter represents the overall state of the connection including every {{domxref("RTCIceTransport")}} used by every {{domxref("RTCRtpSender")}} and every {{domxref("RTCRtpReceiver")}} on the entire connection. In contrast, `gatheringstatechange` represents changes to the candidate gathering state for a single transport.

## Examples

This example creates a handler for `gatheringstatechange` events on each {{domxref("RTCRtpSender")}} associated with a given {{domxref("RTCPeerConnection")}}. Here, the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method is called to add a listener for `gatheringstatechange` events:

```js
pc.getSenders().forEach(sender => {
  sender.transport.iceTransport.addEventListener("gatheringstatechange", ev => {
  let transport = ev.target;

  if (transport.gatheringState === "complete") {
    /* this transport has finished gathering candidates,
       but others may still be working on it */
  }
}, false);
```

Likewise, you can use the {{domxref("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}} event handler property:

```js
pc.getSenders().forEach(sender => {
  sender.transport.iceTransport.ongatheringstatechange = ev => {
    let transport = ev.target;

    if (transport.gatheringState === "complete") {
      /* this transport has finished gathering candidates,
         but others may still be working on it */
    }
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceTransport.ongatheringstatechange")}}

### Related RTCIceTransport events

- {{event("statechange")}}
- {{event("selectedcandidatepairchange")}}

### Related RTCPeerConnection events

- {{event("negotiationneeded")}}
- {{event("signalingstatechange")}}
- {{event("iceconnectionstatechange")}}
- {{event("icegatheringstatechange")}}
- {{event("connectionstatechange")}}
