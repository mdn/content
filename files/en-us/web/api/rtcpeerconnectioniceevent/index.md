---
title: RTCPeerConnectionIceEvent
slug: Web/API/RTCPeerConnectionIceEvent
tags:
  - API
  - Experimental
  - Interface
  - RTCIceCandidateEvent
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnectionIceEvent
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnectionIceEvent`** interface represents events that occurs in relation to {{Glossary("ICE")}} candidates with the target, usually an {{domxref("RTCPeerConnection")}}.

Only one event is of this type: {{event("icecandidate")}}.

## Properties

_A {{domxref("RTCPeerConnectionIceEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{readOnlyInline}}
  - : Contains the {{domxref("RTCIceCandidate")}} containing the candidate associated with the event, or `null` if this event indicates that there are no further candidates to come.

## Constructors

- {{domxref("RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent()", "RTCPeerConnectionIceEvent()")}}
  - : Returns a new `RTCPeerConnectionIceEvent`. It takes two parameters, the first being a {{domxref("DOMString")}} representing the type of the event; the second a dictionary containing the {{domxref("RTCIceCandidate")}} it refers to.

## Methods

_A {{domxref("RTCPeerConnectionIceEvent")}} being an {{domxref("Event")}}, this event also implements these properties. There is no specific {{domxref("RTCDataChannelEvent")}} method._

## Examples

```js
pc.onicecandidate = function (ev) {
  alert(
    "The ICE candidate (transport address: '" +
      ev.candidate.candidate +
      "') has been added to this connection."
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCPeerConnection")}}.
