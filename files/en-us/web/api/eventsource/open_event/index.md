---
title: "EventSource: open event"
short-title: open
slug: Web/API/EventSource/open_event
page-type: web-api-event
browser-compat: api.EventSource.open_event
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

The **`open`** event of the {{domxref("EventSource")}} interface is fired when a connection with an event source is opened.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("open", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onopen = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen version (but note that this replaces other event listeners
// added using onopen, if any)
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- {{domxref("EventSource/error_event", "error")}}
- {{domxref("EventSource/message_event", "message")}}
