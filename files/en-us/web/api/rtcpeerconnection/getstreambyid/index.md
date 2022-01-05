---
title: RTCPeerConnection.getStreamById()
slug: Web/API/RTCPeerConnection/getStreamById
tags:
  - Method
  - RTCPeerConnection
  - Reference
  - Deprecated
  - WebRTC
browser-compat: api.RTCPeerConnection.getStreamById
---
{{APIRef("WebRTC")}}

{{deprecated_header}}

The **`RTCPeerConnection.getStreamById()`** method returns the
{{DOMxRef("MediaStream")}}
with the given id that is associated with local or remote end of the connection. If no
stream matches, it returns `null`.

> **Warning:** This property has been replaced with the
> {{domxref("RTCPeerConnection.getLocalStreams")}} and
> {{domxref("RTCPeerConnection.getRemoteStreams")}} properties. If you have code that
> uses `stream`, you will need to update, since browsers have begun to remove
> support for `stream`.

## Syntax

```js
var mediaStream = pc.getStream(id);
```

### Parameters

- _id_
  - : Is a {{domxref("DOMString")}} corresponding to the stream to return.

## Example

```js
var stream = pc.getStreamById(myTrackId);
if (stream) {
  console.log("Found stream: " + stream.id);
}
```

## Polyfill

Running the following code before any other code will create
`RTCPeerConnection.prototype.getStreamById()` if it's not natively available.

```js
// from: https://bugs.chromium.org/p/chromium/issues/detail?id=698163&desc=5#c10
RTCPeerConnection.prototype.getStreamById = function(id) {
  try {
    var localStreams = this.getLocalStreams();
    var remoteStreams = this.getRemoteStreams();
    var i;
    for (i = 0; i < localStreams.length; i++) {
     if (localStreams[i].id == id)
       return localStreams[i];
    }
    for (i = 0; i < remoteStreams.length; i++) {
     if (remoteStreams[i].id == id)
       return remoteStreams[i];
    }
  } catch(e) {}
  return null;
}
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
