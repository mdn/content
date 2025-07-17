---
title: Using WebRTC data channels
slug: Web/API/WebRTC_API/Using_data_channels
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

In this guide, we'll examine how to add a data channel to a peer connection, which can then be used to securely exchange arbitrary data; that is, any kind of data we wish, in any format we choose.

> [!NOTE]
> Since all WebRTC components are required to use encryption, any data transmitted on an `RTCDataChannel` is automatically secured using Datagram Transport Layer Security (**DTLS**). See [Security](#security) below for more information.

## Creating a data channel

The underlying data transport used by the {{domxref("RTCDataChannel")}} can be created in one of two ways:

- Let WebRTC create the transport and announce it to the remote peer for you (by causing it to receive a {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}} event). This is the easy way, and works for a wide variety of use cases, but may not be flexible enough for your needs.
- Write your own code to negotiate the data transport and write your own code to signal to the other peer that it needs to connect to the new channel.

Let's look at each of these cases, starting with the first, which is the most common.

### Automatic negotiation

Often, you can allow the peer connection to handle negotiating the {{domxref("RTCDataChannel")}} connection for you. To do this, call {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} without specifying a value for the `negotiated` property, or specifying the property with a value of `false`. This will automatically trigger the `RTCPeerConnection` to handle the negotiations for you, causing the remote peer to create a data channel and linking the two together across the network.

The `RTCDataChannel` object is returned immediately by `createDataChannel()`; you can tell when the connection has been made successfully by watching for the {{domxref("RTCDataChannel.open_event", "open")}} event to be sent to the `RTCDataChannel`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel");

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});
```

### Manual negotiation

To manually negotiate the data channel connection, you need to first create a new {{domxref("RTCDataChannel")}} object using the {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} method on the {{domxref("RTCPeerConnection")}}, specifying in the options a `negotiated` property set to `true`. This signals to the peer connection to not attempt to negotiate the channel on your behalf.

Then negotiate the connection out-of-band, using a web server or other means. This process should signal to the remote peer that it should create its own `RTCDataChannel` with the `negotiated` property also set to `true`, using the same {{domxref("RTCDataChannel.id", "id")}}. This will link the two objects across the `RTCPeerConnection`.

```js
let dataChannel = pc.createDataChannel("MyApp Channel", {
  negotiated: true,
});

dataChannel.addEventListener("open", (event) => {
  beginTransmission(dataChannel);
});

requestRemoteChannel(dataChannel.id);
```

In this code snippet, the channel is created with `negotiated` set to `true`, then a function called `requestRemoteChannel()` is used to trigger negotiation, to create a remote channel with the same ID as the local channel.

Doing this lets you create data channels with each peer using different properties, and to create channels declaratively by using the same value for `id`.

## Buffering

WebRTC data channels support buffering of outbound data. This is handled automatically. While there's no way to control the size of the buffer, you can learn how much data is currently buffered, and you can choose to be notified by an event when the buffer starts to run low on queued data. This makes it easy to write efficient routines that make sure there's always data ready to send without over-using memory or swamping the channel completely.

## Understanding message size limits

You should keep message sizes moderately small. While most modern browsers support sending messages of at least 256 kilobytes, there are downsides to sending large messages, especially when message interleaving is not available. Without message interleaving (as defined in {{rfc("8260")}}), sending a large message on one data channel can cause {{glossary("Head_of_line_blocking", "head-of-line blocking")}}, which in turn can negatively affect the latency of messages on other data channels.

The maximum message size can be negotiated using the `max-message-size` SDP attribute, as defined in [RFC 8841](https://www.rfc-editor.org/rfc/rfc8841.html). This attribute allows each peer to declare the maximum size of an SCTP user message that it is willing to receive. By negotiating this value, endpoints can avoid sending messages that are larger than the other peer can handle. If the `max-message-size` attribute is not present in the SDP, a default value of 64 kilobytes is assumed. A value of 0 indicates that the endpoint can handle messages of any size, limited only by available memory.

## Security

All data transferred using WebRTC is encrypted. In the case of `RTCDataChannel`, the encryption used is Datagram Transport Layer Security (DTLS), which is based on [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security) (TLS). Since TLS is used to secure every HTTPS connection, any data you send on a data channel is as secure as any other data sent or received by the user's browser.

More fundamentally, since WebRTC is a peer-to-peer connection between two user agents, the data never passes through the web or application server. This reduces opportunities to have the data intercepted.
