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

For any data being transmitted over a network, there are size restrictions. At a fundamental level, the individual network packets can't be larger than a certain value (the exact number depends on the network and the transport layer being used). At the application level—that is, within the {{Glossary("user agent", "user agent's")}} implementation of WebRTC on which your code is running—the WebRTC implementation implements features to support messages that are larger than the maximum packet size on the network's transport layer.

This can complicate things, since you don't necessarily know what the size limits are for various user agents, and how they respond when a larger message is sent or received. Even when user agents share the same underlying library for handling Stream Control Transmission Protocol (SCTP) data, there can still be variations due to how the library is used. For example, both Firefox and Google Chrome use the [`usrsctp`](https://github.com/sctplab/usrsctp) library to implement SCTP, but there are still situations in which data transfer on an `RTCDataChannel` can fail due to differences in how they call the library and react to errors it returns.

When two users running Firefox are communicating on a data channel, the message size limit is much larger than when Firefox and Chrome are communicating because Firefox implements a now deprecated technique for sending large messages in multiple SCTP messages, which Chrome does not. Chrome will instead see a series of messages that it believes are complete, and will deliver them to the receiving `RTCDataChannel` as multiple messages.

Messages smaller than 16 KiB can be sent without concern, as all major user agents handle them the same way. Beyond that, things get more complicated.

### Concerns with large messages

Currently, it's not practical to use `RTCDataChannel` for messages larger than 64 KiB (16 KiB if you want to support cross-browser exchange of data). The problem arises from the fact that SCTP—the protocol used for sending and receiving data on an `RTCDataChannel`—was originally designed for use as a signaling protocol. It was expected that messages would be relatively small. Support for messages larger than the network layer's [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit) was added almost as an afterthought, in case signaling messages needed to be larger than the MTU. This feature requires that each piece of the message have consecutive sequence numbers, so they have to be transmitted one after another, without any other data interleaved between them.

This eventually became a problem. Over time, various applications (including those implementing WebRTC) began to use SCTP to transmit larger and larger messages. Eventually it was realized that when the messages become too large, it's possible for the transmission of a large message to block all other data transfers on that data channel—including critical signaling messages.

This will become an issue when browsers properly support the current standard for supporting larger messages—the end-of-record (EOR) flag that indicates when a message is the last one in a series that should be treated as a single payload. This is implemented in Firefox 57, but is not yet implemented in Chrome (see [Chromium Bug 7774](https://crbug.com/webrtc/7774)). With EOR support in place, `RTCDataChannel` payloads can be much larger (officially up to 256 KiB, but Firefox's implementation caps them at a whopping 1 GiB). Even at 256 KiB, that's large enough to cause noticeable delays in handling urgent traffic. If you go even larger, the delays can become untenable unless you are certain of your operational conditions.

In order to resolve this issue, a new system of **stream schedulers** has been designed to make it possible to interleave messages sent on different streams, including streams used to implement WebRTC data channels. This [proposal](https://datatracker.ietf.org/doc/html/draft-ietf-tsvwg-sctp-ndata) is still in IETF draft form, but once implemented, it will make it possible to send messages with essentially no size limitations, since the SCTP layer will automatically interleave the underlying sub-messages to ensure that every channel's data has the opportunity to get through.

Firefox support for stream schedulers is in the process of being implemented; see [Firefox bug 1381145](https://bugzil.la/1381145) to track it becoming available for general use. The Chrome team is tracking their implementation of stream schedulers support in [Chrome Bug 5696](https://crbug.com/webrtc/5696).

> [!NOTE]
> Much of the information in this section is based in part on the blog post [Demystifying WebRTC's Data Channel Message Size Limitations](https://lgrahl.de/articles/demystifying-webrtc-dc-size-limit.html), written by Lennart Grahl. He goes into a bit more detail there, but as browsers have been updated since then some of it may be out-of-date. In addition, as time goes by, it will become more so, especially once EOR and stream schedulers support are fully integrated in the major browsers.

## Security

All data transferred using WebRTC is encrypted. In the case of `RTCDataChannel`, the encryption used is Datagram Transport Layer Security (DTLS), which is based on [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security) (TLS). Since TLS is used to secure every HTTPS connection, any data you send on a data channel is as secure as any other data sent or received by the user's browser.

More fundamentally, since WebRTC is a peer-to-peer connection between two user agents, the data never passes through the web or application server. This reduces opportunities to have the data intercepted.
