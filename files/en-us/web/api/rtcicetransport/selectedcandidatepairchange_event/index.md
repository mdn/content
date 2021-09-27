---
title: 'RTCIceTransport: selectedcandidatepairchange event'
slug: Web/API/RTCIceTransport/selectedcandidatepairchange_event
tags:
  - Connectivity
  - ICE
  - Negotiation
  - RTCIceCandidate
  - RTCIceTransport
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - events
  - onselectedcandidatepairchange
  - selectedcandidatepairchange
browser-compat: api.RTCIceTransport.selectedcandidatepairchange_event
---
{{APIRef("WebRTC")}}

A **`selectedcandidatepairchange`** event is sent to an {{domxref("RTCIceTransport")}} when the {{Glossary("ICE")}} agent selects a new pair of candidates that describe the endpoints of a viable connection.

The pair of candidates is in turn described by an {{domxref("RTCIceCandidatePair")}} object which contains one {{domxref("RTCIceCandidate")}} representing the local end of the connection, and another representing the remote end of the connection.

Together, the candidates can be used to establish a connection to be used by the {{domxref("RTCIceTransport")}}, and, by extension, by an {{domxref("RTCPeerConnection")}}.

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
        {{DOMxRef("RTCIceTransport.onselectedcandidatepairchange", "onselectedcandidatepairchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example creates an event handler for `selectedcandidatepairchange` that updates a display providing the user information about the progress of the ICE negotiation for an {{domxref("RTCPeerConnection")}} called `pc`.

```js
let iceTransport = pc.getSenders[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.addEventListener("selectedcandidatepairchange", ev => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
}, false)
```

This can also be done by setting the {{domxref("RTCIceTransport.onselectedcandidatepairchange", "onselectedcandidatepairchange")}} event handler property directly.

```js
let iceTransport = pc.getSenders[0].transport.iceTransport;
let localProtoElem = document.getElementById("local-protocol");
let remoteProtoElem = document.getElementById("remote-protocol");

iceTransport.onselectedcandidatepairchange = ev => {
  let pair = iceTransport.getSelectedCandidatePair();
  localProtoElem.innerText = pair.local.protocol.toUpperCase();
  remoteProtoElem.innerText = pair.remote.protocol.toUpperCase();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceTransport.onselectedcandidatepairchange")}}

### Related RTCIceTransport events

- {{event("statechange")}}
- {{event("gatheringstatechange")}}

### Related RTCPeerConnection events

- {{event("negotiationneeded")}}
- {{event("signalingstatechange")}}
- {{event("iceconnectionstatechange")}}
- {{event("icegatheringstatechange")}}
- {{event("connectionstatechange")}}
