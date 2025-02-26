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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
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

// onopen version
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
