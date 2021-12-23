---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - WebRTC
browser-compat: api.MediaStreamEvent
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **`MediaStreamEvent`** interface represents events that occurs in relation to a {{domxref("MediaStream")}}. Two events of this type can be thrown: {{event("addstream")}} and {{event("removestream")}}.

## Properties

_A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("MediaStreamEvent.stream")}} {{readOnlyInline}}
  - : Contains the {{domxref("MediaStream")}} containing the stream associated with the event.

## Constructors

- {{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}}
  - : Returns a new `MediaStreamEvent`. It takes two parameters, the first being a {{domxref("DOMString")}} representing the type of the event; the second a dictionary containing the {{domxref("MediaStream")}} it refers to.

## Methods

A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties. There is no specific {{domxref("MediaStreamEvent")}} method.

## Examples

```js
pc.onaddstream = function( ev ) {
  alert("A stream (id: '" + ev.stream.id + "') has been added to this connection.");
};
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCPeerConnection")}}.
