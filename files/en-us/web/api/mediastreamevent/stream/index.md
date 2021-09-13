---
title: MediaStreamEvent.stream
slug: Web/API/MediaStreamEvent/stream
tags:
  - Experimental
  - MediaStreamEvent
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamEvent.stream
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The read-only property **`MediaStreamEvent.stream`** returns
the {{domxref("MediaStream")}} associated with the event.

## Syntax

```js
 var stream = event.stream;
```

## Example

```js
pc.onaddstream = function( ev ) {
                      alert("A stream (id: '" +
                            ev.stream.id +
                            "') has been added to this connection.");
                   };
```

## Browser compatibility

{{Compat}}

## See also

- {{event("addstream")}}, {{event("removestream")}}
- {{domxref("RTCPeerConnection")}}
