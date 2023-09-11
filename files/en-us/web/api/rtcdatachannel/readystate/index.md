---
title: "RTCDataChannel: readyState property"
short-title: readyState
slug: Web/API/RTCDataChannel/readyState
page-type: web-api-instance-property
browser-compat: api.RTCDataChannel.readyState
---

{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property **`readyState`** returns a string which indicates the state of the data channel's underlying data connection.

## Values

A string indicating the current state of the underlying data transport, which is one of the following values:

- `connecting`
  - : The user agent (browser) is in the process of creating the underlying data transport;
    this is the state of a new {{domxref("RTCDataChannel")}} after being created by {{domxref("RTCPeerConnection.createDataChannel()")}},
    on the peer which started the connection process.
- `open`
  - : The underlying data transport has been established
    and data can be transferred bidirectionally across it.
    This is the default state of a new {{domxref("RTCDataChannel")}} created by the WebRTC layer
    when the remote peer created the channel
    and delivered it to the site or app
    in a {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event.
- `closing`
  - : The process of closing the underlying data transport has begun.
    It is no longer possible to queue new messages to be sent,
    but previously queued messages may still be send or received
    before entering the `closed` state.
- `closed`
  - : The underlying data transport has closed,
    or the attempt to make the connection failed.

## Example

```js
const dataChannel = peerConnection.createDataChannel("File Transfer");
const sendQueue = [];

function sendMessage(msg) {
  switch (dataChannel.readyState) {
    case "connecting":
      console.log(`Connection not open; queueing: ${msg}`);
      sendQueue.push(msg);
      break;
    case "open":
      sendQueue.forEach((msg) => dataChannel.send(msg));
      break;
    case "closing":
      console.log(`Attempted to send message while closing: ${msg}`);
      break;
    case "closed":
      console.log("Error! Attempt to send while connection closed.");
      break;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
