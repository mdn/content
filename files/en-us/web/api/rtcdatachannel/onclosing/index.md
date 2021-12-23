---
title: RTCDataChannel.onclosing
slug: Web/API/RTCDataChannel/onclosing
tags:
  - Event Handler
  - Experimental
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - onclosing
browser-compat: api.RTCDataChannel.onclosing
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCDataChannel.onclosing`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called by the browser when
the {{DOMxRef("RTCDataChannel.closing_event", "closing")}} event is received by the {{DOMxRef("RTCDataChannel")}}. This is
a simple {{DOMxRef("Event")}} which indicates that the data channel is being closed,
that is, {{DOMxRef("RTCDataChannel")}} transitions to "closing" state. For example,
after {{DOMxRef("RTCDataChannel.close", "RTCDataChannel.close()")}} was called but the
underlying data transport might not have been closed yet.

## Syntax

```js
RTCDataChannel.onclosing = function;
```

### Value

A function which the browser will call to handle the `closing` event. The
function receives as its sole input parameter the event itself, as an object of type
{{DOMxRef("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCDataChannel.onclose")}} event handler and its {{DOMxRef("RTCDataChannel.close_event", "close")}}
  event.
- {{DOMxRef("RTCDataChannel.onopen")}}
- The {{DOMxRef("RTCDataChannel.open_event", "open")}} event and its type, {{DOMxRef("Event")}}.
