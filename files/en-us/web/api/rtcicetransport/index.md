---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
page-type: web-api-interface
browser-compat: api.RTCIceTransport
---

{{APIRef("WebRTC")}}

The **`RTCIceTransport`** interface provides access to information about the {{Glossary("ICE")}} transport layer over which the data is being sent and received.
This is particularly useful if you need to access state information about the connection.

{{InheritanceDiagram}}

## Instance properties

_The `RTCIceTransport` interface inherits properties from its parent, {{domxref("EventTarget")}}. It also offers the following properties:_

- {{domxref("RTCIceTransport.component", "component")}} {{ReadOnlyInline}}
  - : The ICE component being used by the transport. The value is one of the strings from the `RTCIceTransport` enumerated type: `{{Glossary("RTP", '"RTP"')}}` or `"RTSP"`.
- {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} {{ReadOnlyInline}}
  - : A string indicating which current gathering state of the ICE agent: `"new"`, `"gathering"`, or `"complete"`.
- {{domxref("RTCIceTransport.role", "role")}} {{ReadOnlyInline}}
  - : Returns a string whose value is either `"controlling"` or `"controlled"`; this indicates whether the ICE agent is the one that makes the final decision as to the candidate pair to use or not.
- {{domxref("RTCIceTransport.state", "state")}} {{ReadOnlyInline}}
  - : A string indicating what the current state of the ICE agent is. The value of `state` can be used to determine whether the ICE agent has made an initial connection using a viable candidate pair (`"connected"`), made its final selection of candidate pairs (`"completed"`), or in an error state (`"failed"`), among other states.

## Instance methods

_Also includes methods from {{domxref("EventTarget")}}, the parent interface._

- {{domxref("RTCIceTransport.getLocalCandidates", "getLocalCandidates()")}}
  - : Returns an array of {{domxref("RTCIceCandidate")}} objects, each describing one of the ICE candidates that have been gathered so far for the local device. These are the same candidates which have already been sent to the remote peer by sending an {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event to the {{domxref("RTCPeerConnection")}} for transmission.
- {{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}}
  - : Returns a {{domxref("RTCIceParameters")}} object describing the ICE parameters established by a call to the {{domxref("RTCPeerConnection.setLocalDescription()")}} method. Returns `null` if parameters have not yet been received.
- {{domxref("RTCIceTransport.getRemoteCandidates", "getRemoteCandidates()")}}
  - : Returns an array of {{domxref("RTCIceCandidate")}} objects, one for each of the remote device's ICE candidates that have been received by the local end of the {{domxref("RTCPeerConnection")}} and delivered to ICE by calling {{domxref("RTCPeerConnection.addIceCandidate()", "addIceCandidate()")}}.
- {{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}}
  - : Returns a {{domxref("RTCIceParameters")}} object containing the ICE parameters for the remote device, as set by a call to {{domxref("RTCPeerConnection.setRemoteDescription()")}}. If `setRemoteDescription()` hasn't been called yet, the return value is `null`.
- {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}
  - : Returns a {{domxref("RTCIceCandidatePair")}} object that identifies the two candidates—one for each end of the connection—that have been selected so far. It's possible that a better pair will be found and selected later; if you need to keep up with this, watch for the {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}} event. If no candidate pair has been selected yet, the return value is `null`.

## Events

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : Sent to the `RTCIceTransport` object to indicate that the value of the {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} property has changed, indicating a change in this transport's ICE candidate negotiation process.
    Also available through the {{domxref("RTCIceTransport.gatheringstatechange_event", "ongatheringstatechange")}} event handler property.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : Sent to the `RTCIceTransport` when a new, better pair of candidates has been selected to describe the connectivity between the two peers. This occurs during negotiation or renegotiation, including after an ICE restart, which reuses the existing `RTCIceTransport` objects. The current candidate pair can be obtained using {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}.
    Also available using the {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "onselectedcandidatepairchange")}} event handler property.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : Sent to the `RTCIceTransport` instance when the value of the {{domxref("RTCIceTransport.state", "state")}} property has changed, indicating that the ICE gathering process has changed state.
    Also available through the {{domxref("RTCIceTransport.statechange_event", "onstatechange")}} event handler property.

## Examples

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
