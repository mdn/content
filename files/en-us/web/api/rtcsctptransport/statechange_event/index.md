---
title: "RTCSctpTransport: statechange event"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
page-type: web-api-event
browser-compat: api.RTCSctpTransport.statechange_event
---

{{APIRef("WebRTC")}}

A **`statechange`** event is sent to an {{domxref("RTCSctpTransport")}} to provide notification when the {{domxref("RTCSctpTransport.state")}} property has changed.

<!-- This event is not cancelable and does not bubble. -->

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onstatechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Given an {{domxref("RTCSctpTransport")}}, `transport`, and an `updateStatus()` function that presents connection state information to the user, this code sets up an event handler to let the user know when the transport is connected.

```js
transport.addEventListener("statechange", (event) => {
  switch (transport.state) {
    case "connected":
      updateStatus("Connection started");
      break;
  }
});
```

Using `onstatechange`, it looks like this (but note that this replaces other event listeners added using `onstatechange`, if any):

```js
transport.onstatechange = (event) => {
  switch (transport.state) {
    case "connected":
      updateStatus("Connection started");
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
- {{domxref("RTCSctpTransport.state")}}
