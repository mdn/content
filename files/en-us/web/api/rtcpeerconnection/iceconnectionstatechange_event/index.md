---
title: "RTCPeerConnection: iceconnectionstatechange event"
short-title: iceconnectionstatechange
slug: Web/API/RTCPeerConnection/iceconnectionstatechange_event
page-type: web-api-event
browser-compat: api.RTCPeerConnection.iceconnectionstatechange_event
---

{{APIRef("WebRTC")}}

An **`iceconnectionstatechange`** event is sent to an {{domxref("RTCPeerConnection")}} object each time the {{Glossary("ICE")}} connection state changes during the negotiation process.
The new ICE connection state is available in the object's {{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} property.

One common task performed by the `iceconnectionstatechange` event listener is to trigger [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) when the state changes to `failed`.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("iceconnectionstatechange", (event) => {});

oniceconnectionstatechange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

A successful connection attempt will typically involve the state starting at `new`, then transitioning through `checking`, then `connected`, and finally `completed`. However, under certain circumstances, the `connected` state can be skipped, causing a connection to transition directly from the `checking` state to `completed`. This can happen when only the last checked candidate is successful, and the gathering and end-of-candidates signals both occur before the successful negotiation is completed.

### ICE connection state during ICE restarts

When an ICE restart is processed, the gathering and connectivity checking process is started over from the beginning, which will cause the `iceConnectionState` to transition to `connected` if the ICE restart was triggered while in the `completed` state. If ICE restart is initiated while in the transient `disconnected` state, the state transitions instead to `checking`, essentially indicating that the negotiation is ignoring the fact that the connection had been temporarily lost.

### State transitions as negotiation ends

When the negotiation process runs out of candidates to check, the ICE connection transitions to one of two states. If no suitable candidates were found, the state transitions to `failed`. If at least one suitable candidate was successfully identified, the state transitions to `completed`. The ICE layer makes this determination upon receiving the end-of-candidates signal, which is provided by calling {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} with a candidate whose {{domxref("RTCIceCandidate.candidate", "candidate")}} property is an empty string (""), or by setting the {{domxref("RTCPeerConnection")}} property {{domxref("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} to `false`.

## Examples

An event handler for this event can be added using the `oniceconnectionstatechange` property or by using {{domxref("EventTarget.addEventListener", "addEventListener()")}} on the `RTCPeerConnection`.

In this example, a handler for `iceconnectionstatechange` is set up to update a call state indicator by using the value of {{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} to create a string which corresponds to the name of a CSS class that we can assign to the status indicator to cause it to reflect the current state of the connection.

```js
pc.addEventListener(
  "iceconnectionstatechange",
  (ev) => {
    let stateElem = document.querySelector("#call-state");
    stateElem.className = `${pc.iceConnectionState}-state`;
  },
  false,
);
```

This can also be written as:

```js
pc.oniceconnectionstatechange = (ev) => {
  let stateElem = document.querySelector("#call-state");
  stateElem.className = `${pc.iceConnectionState}-state`;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.iceConnectionState")}}
