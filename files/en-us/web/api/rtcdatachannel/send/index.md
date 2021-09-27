---
title: RTCDataChannel.send()
slug: Web/API/RTCDataChannel/send
tags:
  - API
  - Communication
  - Data Transfer
  - Method
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - datachannel
  - send
browser-compat: api.RTCDataChannel.send
---
{{APIRef("WebRTC")}}

The **`send()`** method of the
{{domxref("RTCDataChannel")}} interface sends data across the data channel to the
remote peer.
This can be done any time except during the initial process of
creating the underlying transport channel. Data sent before connecting is buffered if
possible (or an error occurs if it's not possible), and is also buffered if sent while
the connection is closing or closed.

> **Note:** Different browsers have different limitations on the size of the message you can
> send. Specifications exist to define how to automatically fragment large messages, but
> not all browsers implement them, and those that do have various additional
> restrictions. This will get less complicated over time, but for now, if you have
> questions, see {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels",
    "Understanding message size limits")}}.

## Syntax

```js
RTCDataChannel.send(data);
```

### Parameters

- `data`
  - : The data to transmit across the connection. This may be a {{domxref("USVString")}},
    a {{domxref("Blob")}}, an {{jsxref("ArrayBuffer")}}, or an
    {{domxref("ArrayBufferView")}}.

### Return value

`undefined`.

### Exceptions

- `InvalidStateError`
  - : Since the data channel uses a separate transport channel from the media content, it
    must establish its own connection; if it hasn't finished doing so (that is, its
    {{domxref("RTCDataChannel.readyState", "readyState")}} is `"connecting")`,
    this error occurs without sending or buffering the `data`.
- `NetworkError`
  - : The specified `data` would need to be buffered, and there isn't room for
    it in the buffer. In this scenario, the underlying transport is immediately closed.
- `TypeError`
  - : The specified `data` is too large for the other peer to receive. Since
    there are multiple techniques for breaking up large data into smaller pieces for
    transfer, it's possible to encounter scenarios in which the other peer does not
    support the same ones. For example, if one peer is a modern browser that supports
    using the `EOR` (End of Record) flag to indicate when a received message is
    the last piece of a multi-part object sent using `send()`. For more
    information about message size restrictions, see
    {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels", "Understanding
    message size limits")}}.

## Example

In this example, a routine called `sendMessage()` is created; it accepts an
object as input and sends to the remote peer, over the {{domxref("RTCDataChannel")}}, a
JSON string with the specified object and a time stamp.

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("BackChannel");

function sendMessage(msg) {
  let obj = {
    "message": msg,
    "timestamp": new Date()
  }
  dc.send(JSON.stringify(obj));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.readyState")}}
- {{DOMxRef("RTCDataChannel.close_event", "close")}} event
