---
title: RTCDataChannel.close()
slug: Web/API/RTCDataChannel/close
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
  - close
browser-compat: api.RTCDataChannel.close
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.close()`** method closes the
{{domxref("RTCDataChannel")}}. Either peer is permitted to call this method to initiate
closure of the channel.

Closure of the data channel is not instantaneous. Most of the process of closing the
connection is handled asynchronously; you can detect when the channel has finished
closing by watching for a {{DOMxRef("RTCDataChannel.close_event", "close")}} event on the data channel.

The sequence of events which occurs in response to this method being called:

1.  {{domxref("RTCDataChannel.readyState")}} is set to `closing`.
2.  A background task is established to handle the remainder of the steps below, and
    `close()` returns to the caller.
3.  The transport layer deals with any buffered messages; the protocol layer decides
    whether to send them or discard them.
4.  The underlying data transport is closed.
5.  The {{domxref("RTCDataChannel.readyState")}} property is set to
    `closed`.
6.  If the transport was closed with an error,
    the `RTCDataChannel` is sent
    an {{DOMxRef("RTCDataChannel.error_event", "error")}} event
    with its {{DOMxRef("DOMException.name", "name")}} set to `NetworkError`.
7.  A {{domxref("RTCDataChannel.close_event", "close")}} event is sent to the channel.

## Syntax

```js
RTCDataChannel.close();
```

## Parameters

None.

## Return value

`undefined`.

## Example

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
  dc.close(); // We decided to close after the first received message
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function (
  console.log("datachannel close");
};

// Now negotiate the connection and so forth...
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
