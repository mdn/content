---
title: 'RTCIceTransport: gatheringstatechange event'
slug: Web/API/RTCIceTransport/gatheringstatechange_event
page-type: web-api-event
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
  - gatheringState
  - gatheringstatechange
browser-compat: api.RTCIceTransport.gatheringstatechange_event
---
{{APIRef("WebRTC")}}

A **`gatheringstatechange`** event is sent to an {{domxref("RTCIceTransport")}} when its {{Glossary("ICE")}} candidate gathering state changes.

The gathering state, whose actual status can be found in the transport object's {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} property, indicates whether or not the ICE agent has begun gathering candidates, and if so, if it has finished doing so.

The key difference between `gatheringstatechange` and {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} is that the latter represents the overall state of the connection including every {{domxref("RTCIceTransport")}} used by every {{domxref("RTCRtpSender")}} and every {{domxref("RTCRtpReceiver")}} on the entire connection. In contrast, `gatheringstatechange` represents changes to the candidate gathering state for a single transport.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('gatheringstatechange', (event) => { });

ongatheringstatechange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example creates a handler for `gatheringstatechange` events on each {{domxref("RTCRtpSender")}} associated with a given {{domxref("RTCPeerConnection")}}. Here, the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method is called to add a listener for `gatheringstatechange` events:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.addEventListener("gatheringstatechange", (ev) => {
    let transport = ev.target;

    if (transport.gatheringState === "complete") {
      /* this transport has finished gathering candidates,
        but others may still be working on it */
    }
  }, false);
});
```

Likewise, you can use the `ongatheringstatechange` event handler property:

```js
pc.getSenders().forEach((sender) => {
  sender.transport.iceTransport.ongatheringstatechange = (ev) => {
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

### Related RTCIceTransport events

- {{domxref("RTCIceTransport/statechange_event", "statechange")}}
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}

### Related RTCPeerConnection events

- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
