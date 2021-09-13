---
title: RTCIceTransport.onselectedcandidatepairchange
slug: Web/API/RTCIceTransport/onselectedcandidatepairchange
tags:
  - API
  - Candidate
  - Candidate Pair
  - Connectivity
  - Event Handler
  - Negotiation
  - Property
  - RTCIceTransport
  - Reference
  - WebRTC
  - WebRTC API
  - onselectedcandidatepairchange
  - selectedcandidatepairchange
browser-compat: api.RTCIceTransport.onselectedcandidatepairchange
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceTransport")}} interface's **`onselectedcandidatepairchange`** event handler specifies a
function to be called to handle the {{event("selectedcandidatepairchange")}} event,
which is fired when the ICE agent selects a new candidate pair to be used for the connection.

## Syntax

```js
RTCIceTransport.onselectedcandidatepairchange = candidatePairHandler;
```

### Value

This propoerty should be set to reference an event handler function to be called by the
ICE agent when it discovers a new candidate pair that the {{domxref("RTCIceTransport")}}
will be using for communication with the remote peer. This event will occur at least
once, and may occur more than once if the ICE agent continues to identify candidate
pairs that will work better, more closely match the requested parameters, and so forth.

The event handler can determine the current state by calling the transport's
{{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}
method, which returns a {{domxref("RTCIceCandidatePair")}} whose
{{domxref("RTCIceCandidatePair.local")}} and {{domxref("RTCIceCandidatePair.global")}}
properties specify {{domxref("RTCIceCandidate")}} objects describing the local and
remote candidates that are currently being used.

## Example

In this example, an event handler for {{event("selectedcandidatepairchange")}} is set
up to update an on-screen display showing the protocol used by the currently selected candidate pair.

```js
var iceTransport = pc.getSenders()[0].transport.iceTransport;
var localProto = document.getElementById("local-protocol");
var remoteProto = document.getElementById("remote-protocol");

iceTransport.onselectedcandidatepairchange = function(event) {
  var pair = iceTransport.getSelectedCandidatePair();
  localProtocol.innerText = pair.local.protocol.toUpperCase();
  remoteProtocol.innerText = pair.remote.protocol.toUpperCase();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("selectedcandidatepair")}} event and its type, {{domxref("Event")}}.
- The other event handlers for `RTCIceTransport`:
  {{domxref("RTCIceTransport.onstatechange", "onstatechange")}}
  and{{domxref("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}}
