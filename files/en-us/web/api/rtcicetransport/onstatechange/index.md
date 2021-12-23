---
title: RTCIceTransport.onstatechange
slug: Web/API/RTCIceTransport/onstatechange
tags:
  - API
  - Audio
  - Change
  - Event Handler
  - Media
  - Property
  - RTCIceTransport
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - onstatechange
  - rtc
  - state
  - statechange
browser-compat: api.RTCIceTransport.onstatechange
---
{{APIRef("WebRTC")}}

The **`onstatechange`** event handler
for the {{domxref("RTCIceTransport")}} interface is a property which specifies a
function to serve as the [event handler](/en-US/docs/Web/Events/Event_handlers) for the {{event("statechange")}}
event that is fired whenever the transport's {{domxref("RTCIceTransport.state",
    "state")}} changes.

## Syntax

```js
RTCIceTransport.onstatechange = stateChangeHandler;
```

### Value

Set this property to reference a function you provide that is called by the WebRTC
layer when the {{domxref("RTCIceTransport")}} object's
{{domxref("RTCIceTransport.state", "state")}} changes.

The event handler receives as its sole input an {{domxref("Event")}} object describing
the {{event("statechange")}} event which occurred. To determine the new state, examine
the value of {{domxref("RTCIceTransport.state", "state")}}.

## Example

This snippet establishes a handler for the {{event("statechange")}} event that looks to
see if the transport has entered the `"failed"` state, which indicates that
the connection has failed with no chance of being automatically restored.

```js
var iceTransport = pc.getSenders()[0].transport.iceTransport;

iceTransport.onstatechange = function(event) {
  if (iceTransport.state == "failed") {
    handleFailure(pc);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("statechange")}} event and its type, {{domxref("Event")}}.
- The other event handlers for `RTCIceTransport`:
  {{domxref("RTCIceTransport.ongatheringstatechange", "ongatheringstatechange")}} and
  {{domxref("RTCIceTransport.onselectedcandidatepairchange",
    "onselectedcandidatepairchange")}}
