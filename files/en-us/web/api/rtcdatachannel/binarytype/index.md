---
title: "RTCDataChannel: binaryType property"
short-title: binaryType
slug: Web/API/RTCDataChannel/binaryType
page-type: web-api-instance-property
browser-compat: api.RTCDataChannel.binaryType
---

{{APIRef("WebRTC")}}

The property **`binaryType`** on the
{{domxref("RTCDataChannel")}} interface is a string which specifies
the type of object which should be used to represent binary data received
on the {{domxref("RTCDataChannel")}}. Values allowed by the
{{domxref("WebSocket.binaryType")}} property are also permitted here:
`blob` if {{domxref("Blob")}} objects are being used or
`arraybuffer` if {{jsxref("ArrayBuffer")}} objects are being used. The
default is `arraybuffer`.

When a binary message is received on the data channel, the resulting
{{DOMxRef("RTCDataChannel.message_event", "message")}} event's {{domxref("MessageEvent.data")}} property is an object of
the type specified by the `binaryType`.

## Value

A string that can have one of these values:

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
const dc = peerConnection.createDataChannel("Binary");
dc.binaryType = "arraybuffer";

dc.onmessage = (event) => {
  const byteArray = new Uint8Array(event.data);
  let hexString = "";

  byteArray.forEach((byte) => {
    hexString += `${byte.toString(16)} `;
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.send()")}}
