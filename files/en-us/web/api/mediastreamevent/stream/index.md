---
title: "MediaStreamEvent: stream property"
short-title: stream
slug: Web/API/MediaStreamEvent/stream
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.MediaStreamEvent.stream
---

{{APIRef("WebRTC")}}{{deprecated_header}}{{Non-standard_header}}

The read-only property **`MediaStreamEvent.stream`** returns
the {{domxref("MediaStream")}} associated with the event.

## Example

```js
pc.onaddstream = (ev) => {
  alert(`A stream (id: '${ev.stream.id}') has been added to this connection.`);
};
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}}, {{domxref("RTCPeerConnection.removestream_event", "removestream")}}
- {{domxref("RTCPeerConnection")}}
