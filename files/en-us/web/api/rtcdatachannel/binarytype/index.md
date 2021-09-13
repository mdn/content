---
title: RTCDataChannel.binaryType
slug: Web/API/RTCDataChannel/binaryType
tags:
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - binaryType
browser-compat: api.RTCDataChannel.binaryType
---
{{APIRef("WebRTC")}}

The property **`binaryType`** on the
{{domxref("RTCDataChannel")}} interface is a {{domxref("DOMString")}} which specifies
the type of object which should be used to represent binary data received
on the {{domxref("RTCDataChannel")}}. Values allowed by the
{{domxref("WebSocket.binaryType")}} property are also permitted here:
`blob` if {{domxref("Blob")}} objects are being used or
`arraybuffer` if {{jsxref("ArrayBuffer")}} objects are being used. The
default is `blob`.

When a binary message is received on the data channel, the resulting
{{DOMxRef("RTCDataChannel.message_event", "message")}} event's {{domxref("MessageEvent.data")}} property is an object of
the type specified by the `binaryType`.

## Syntax

```js
var type = aDataChannel.binaryType;

aDataChannel.binaryType = type;
```

### Value

A {{domxref("DOMString")}} that can have one of these values:

- `"blob"`
  - : Received binary messages' contents will be contained in {{domxref("Blob")}} objects.
- `"arraybuffer"`
  - : Received binary messages' contents will be contained in {{jsxref("ArrayBuffer")}}
    objects.

## Example

This code configures a data channel to receive binary data in
{{jsxref("ArrayBuffer")}} objects, and establishes a listener for {{DOMxRef("RTCDataChannel.message_event", "message")}}
events which constructs a string representing the received data as a list of hexadecimal
byte values.

```js
var dc = peerConnection.createDataChannel("Binary");
dc.binaryType = "arraybuffer";

dc.onmessage = function(event) {
  let byteArray = new Uint8Array(event.data);
  let hexString = "";

  byteArray.forEach(function(byte) {
    hexString += byte.toString(16) + " ";
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data
  channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.send()")}}
