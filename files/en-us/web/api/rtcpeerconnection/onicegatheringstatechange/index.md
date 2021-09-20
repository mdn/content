---
title: RTCPeerConnection.onicegatheringstatechange
slug: Web/API/RTCPeerConnection/onicegatheringstatechange
tags:
  - Event Handler
  - ICE
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - onicegatheringstatechange
browser-compat: api.RTCPeerConnection.onicegatheringstatechange
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.onicegatheringstatechange`** property
is an [event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called when the
{{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} event is sent to an
{{domxref("RTCPeerConnection")}} instance. This happens when the ICE gathering
state—that is, whether or not the ICE agent is actively gathering candidates—changes.

You don't need to watch for this event unless you have specific reasons to want to
closely monitor the state of ICE gathering.

## Syntax

```js
RTCPeerConnection.onicegatheringstatechange = eventHandler;
```

### Value

A function you provide which is passed a single parameter: an {{domxref("Event")}}
object containing the {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} event. You can determine the
new state of ICE gathering by looking at the value of the
{{domxref("RTCPeerConnection.iceGatheringState")}} property.

## Example

This example updates status information presented to the user to let them know what's
happening by examining the current value of the
{{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} property each
time it changes and changing the contents of a status display based on the new
information.

The status is presented as text in a {{HTMLElement("div")}} element:

```html
<div id="iceStatus"></div>
```

The actual event handler looks like this:

```js
pc.onicegatheringstatechange = function() {
  let label = "Unknown";

  switch(pc.iceGatheringState) {
    case "new":
    case "complete":
      label = "Idle";
      break;
    case "gathering":
      label = "Determining route";
      break;
  }

  document.getElementById("iceStatus").innerHTML = label;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} event and its type, {{domxref("Event")}}.
- {{domxref("RTCPeerConnection.iceGatheringState")}}
