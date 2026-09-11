---
title: "RTCDtlsTransport: statechange event"
short-title: statechange
slug: Web/API/RTCDtlsTransport/statechange_event
page-type: web-api-event
browser-compat: api.RTCDtlsTransport.statechange_event
---

{{APIRef("WebRTC")}}

A **`statechange`** event occurs when the {{domxref("RTCDtlsTransport")}} changes state. The {{domxref("RTCDtlsTransport.state", "state")}} property can be used to determine the current state of the underlying Datagram Transport Layer Security (DTLS) transport.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Given an {{domxref("RTCPeerConnection")}}, `pc`, the following code creates an event handler that calls a function named `handleFailure()` if the DTLS transport enters a failure state.

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("statechange", (ev) => {
  if (dtlsTransport.state === "failed") {
    handleFailure(pc);
  }
});
```

The same code, using the `onstatechange` event handler property, looks like this:

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.onstatechange = (ev) => {
  if (dtlsTransport.state === "failed") {
    handleFailure(pc);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDtlsTransport.state")}}
- {{domxref("RTCDtlsTransport.error_event", "error")}}
