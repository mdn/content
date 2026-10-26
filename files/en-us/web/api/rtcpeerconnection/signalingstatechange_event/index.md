---
title: "RTCPeerConnection: signalingstatechange event"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
page-type: web-api-event
browser-compat: api.RTCPeerConnection.signalingstatechange_event
---

{{APIRef("WebRTC")}}

A **`signalingstatechange`** event is sent to an {{domxref("RTCPeerConnection")}} to notify it that its signaling state, as indicated by the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} property, has changed.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("signalingstatechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsignalingstatechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Given an {{domxref("RTCPeerConnection")}}, `pc`, and an `updateStatus()` function that presents status information to the user, this code sets up an event handler to let the user know when the ICE negotiation process finishes up.

```js
pc.addEventListener("signalingstatechange", (ev) => {
  switch (pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
});
```

Using `onsignalingstatechange`, it looks like this (but note that this replaces other event listeners added using `onsignalingstatechange`, if any):

```js
pc.onsignalingstatechange = (ev) => {
  switch (pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.signalingState")}}
