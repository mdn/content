---
title: "EventSource: error event"
short-title: error
slug: Web/API/EventSource/error_event
page-type: web-api-event
browser-compat: api.EventSource.error_event
---

{{APIRef}}

The `error` event of the {{domxref("EventSource")}} API is fired when a connection with an event source fails to be opened.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("error", (e) => {
  console.log("An error occurred while attempting to connect.");
});

// onerror version
evtSource.onerror = (e) => {
  console.log("An error occurred while attempting to connect.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/en-US/docs/Web/API/EventSource/open_event)
- [`message`](/en-US/docs/Web/API/EventSource/message_event)
