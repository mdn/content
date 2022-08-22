---
title: RTCPeerConnection.getStreamById()
slug: Web/API/RTCPeerConnection/getStreamById
page-type: web-api-instance-method
tags:
  - Method
  - RTCPeerConnection
  - Reference
  - Deprecated
  - WebRTC
  - Non-standard
browser-compat: api.RTCPeerConnection.getStreamById
---
{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

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
getStream(id)
```

### Parameters

- `id`
  - : A string representing the ID of a stream.

### Return value

The {{DOMxRef("MediaStream")}} with the given id.

## Example

```js
const stream = pc.getStreamById(myTrackId);
if (stream) {
  console.log(`Found stream: ${stream.id}`);
}
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
