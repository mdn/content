---
title: RTCDataChannel.ordered
slug: Web/API/RTCDataChannel/ordered
tags:
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - ordered
browser-compat: api.RTCDataChannel.ordered
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property **`ordered`** indicates
whether or not the data channel guarantees in-order delivery of messages;
the default is `true`,
which indicates that the data channel is indeed ordered.
This is set when the {{domxref("RTCDataChannel")}} is created,
by setting the `ordered` property
on the object passed as {{domxref("RTCPeerConnection.createDataChannel()")}}'s `options` parameter.

## Syntax

```js
var ordered = aDataChannel.ordered;
```

A boolean value which is `true` if in-order delivery is
guaranteed and is otherwise `false`.

## Example

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

if (!dc.ordered) {
  // Handle unordered messaging
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
