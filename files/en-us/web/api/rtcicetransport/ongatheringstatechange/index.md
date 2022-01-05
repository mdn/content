---
title: RTCIceTransport.ongatheringstatechange
slug: Web/API/RTCIceTransport/ongatheringstatechange
tags:
  - API
  - Candidates
  - Connectivity
  - Event Handler
  - Gathering
  - ICE
  - Negotiation
  - Property
  - RTCIceTransport
  - Reference
  - WebRTC
  - WebRTC API
  - ongatheringstatechange
browser-compat: api.RTCIceTransport.ongatheringstatechange
---
{{APIRef("WebRTC")}}

The **`ongatheringstatechange`** event handler for the {{domxref("RTCIceTransport")}} interface specifies an event handler that is to be called when the {{event("gatheringstatechange")}} event occurs on the transport.

This event is delivered whenever the transport's {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} property changes.

## Syntax

```js
RTCIceTransport.ongatheringstatechange = stateChangeHandler;
```

### Value

A function to be called when the {{domxref("RTCIceTransport")}} object's gathering
state changes. To determine the new state, examine the value of
{{domxref("RTCIceTransport.gatheringState", "gatheringState")}}.

The gathering state indicates whether or not the ICE agent has begun gathering
candidates, and if so, whether or not gathering has finished. Its possible values are:

- `"new"`
  - : The {{domxref("RTCIceTransport")}} is newly created and has not yet started to gather ICE candidates.
- `"gathering"`
  - : The transport is in the process of gathering candidates.
- `"complete"`
  - : The transport has finished gathering ICE candidates and has sent the end-of-candidates indicator to the remote device. The transport won't gather any further candidates unless an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) occurs, at which point the gathering process starts over from scratch.

## Example

This snippet establishes a handler for the {{event("gatheringstatechange")}} event that
checks to see if the state has changed to `"complete"`, indicating that all
ICE candidates from both the local and remote peers have been received and processed.

```js
var iceTransport = pc.getSenders()[0].transport.transport;

iceTransport.ongatheringstatechange = function(event) {
  if (iceTransport.gatheringState == "complete") {
    allCandidatesReceived(pc);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("gatheringstatechange")}} event and its type, {{domxref("Event")}}.
- The other event handlers for `RTCIceTransport`:
  {{domxref("RTCIceTransport.onstatechange", "onstatechange")}} and
  {{domxref("RTCIceTransport.onselectedcandidatepairchange",
    "onselectedcandidatepairchange")}}
