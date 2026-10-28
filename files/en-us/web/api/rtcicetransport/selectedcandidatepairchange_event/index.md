---
title: "RTCIceTransport: selectedcandidatepairchange event"
short-title: selectedcandidatepairchange
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
page-type: web-api-event
browser-compat: api.RTCIceTransport.selectedcandidatepairchange_event
---

{{APIRef("WebRTC")}}

A **`selectedcandidatepairchange`** event is sent to an {{domxref("RTCIceTransport")}} when the {{Glossary("ICE")}} agent selects a new pair of candidates that describe the endpoints of a viable connection.

The pair of candidates is in turn described by an {{domxref("RTCIceCandidatePair")}} object which contains one {{domxref("RTCIceCandidate")}} representing the local end of the connection, and another representing the remote end of the connection.

Together, the candidates can be used to establish a connection to be used by the {{domxref("RTCIceTransport")}}, and, by extension, by an {{domxref("RTCPeerConnection")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("selectedcandidatepairchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselectedcandidatepairchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example creates an event handler for `selectedcandidatepairchange` that updates a display providing the user information about the progress of the ICE negotiation for an {{domxref("RTCPeerConnection")}} called `pc`.

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.addEventListener("selectedcandidatepairchange", (ev) => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
});
```

This can also be done by setting the `onselectedcandidatepairchange` event handler property directly (but note that this replaces other event listeners added using `onselectedcandidatepairchange`, if any).

```js
let iceTransport = pc.getSenders()[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.onselectedcandidatepairchange = (ev) => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
};
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
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}

### Related RTCPeerConnection events

- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
