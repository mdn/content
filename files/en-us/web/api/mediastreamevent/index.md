---
title: MediaStreamEvent
slug: Web/API/MediaStreamEvent
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.MediaStreamEvent
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`MediaStreamEvent`** interface represents events that occurs in relation to a {{domxref("MediaStream")}}. Two events of this type can be thrown: {{domxref("RTCPeerConnection.addstream_event", "addstream")}} and {{domxref("RTCPeerConnection.removestream_event", "removestream")}}.

## Instance properties

_A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("MediaStreamEvent.stream")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Contains the {{domxref("MediaStream")}} containing the stream associated with the event.

## Constructors

- {{domxref("MediaStreamEvent.MediaStreamEvent()", "MediaStreamEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a new `MediaStreamEvent`. It takes two parameters, the first being a string representing the type of the event; the second a dictionary containing the {{domxref("MediaStream")}} it refers to.

## Instance methods

A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties. There is no specific {{domxref("MediaStreamEvent")}} method.

## Examples

```js
pc.onaddstream = (ev) => {
  alert(`A stream (id: '${ev.stream.id}') has been added to this connection.`);
};
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCPeerConnection")}}.
