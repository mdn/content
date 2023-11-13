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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Given an {{domxref("RTCSctpTransport")}}, `transport`, and an `updateStatus()` function that presents connection state information to the user, this code sets up an event handler to let the user know when the transport is connected.

```js
pc.addEventListener(
  "statechange",
  (event) => {
    switch (transport.state) {
      case "connected":
        updateStatus("Connection started");
        break;
    }
  },
  false,
);
```

Using `onstatechange`, it looks like this:

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
