---
title: Introduction to the Real-time Transport Protocol (RTP)
slug: Web/API/WebRTC_API/Intro_to_RTP
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

The **Real-time Transport Protocol** (**RTP**), defined in {{RFC(3550)}}, is an IETF standard protocol to enable real-time connectivity for exchanging data that needs real-time priority. This article provides an overview of what RTP is and how it functions in the context of WebRTC.

> **Note:** WebRTC actually uses **SRTP** (Secure Real-time Transport Protocol) to ensure that the exchanged data is secure and authenticated as appropriate.

Keeping latency to a minimum is especially important for WebRTC, since face-to-face communication needs to be performed with as little {{Glossary("latency")}} as possible. The more time lag there is between one user saying something and another hearing it, the more likely there is to be episodes of cross-talking and other forms of confusion.

## Key features of RTP

Before examining RTP's use in WebRTC contexts, it's useful to have a general idea of what RTP does and does not offer. RTP is a data transport protocol, whose mission is to move data between two endpoints as efficiently as possible under current conditions. Those conditions may be affected by everything from the underlying layers of the network stack to the physical network connection, the intervening networks, the performance of the remote endpoint, noise levels, traffic levels, and so forth.

Since RTP is a data transport, it is augmented by the closely-related **RTP Control Protocol** (**RTCP**), which is defined in {{RFC(3550, "", 6)}}. RTCP adds features including **Quality of Service** (**QoS**) monitoring, participant information sharing, and the like. It isn't adequate for the purposes of fully managing users, memberships, permissions, and so forth, but provides the basics needed for an unrestricted multi-user communication session.

The very fact that RTCP is defined in the same RFC as RTP is a clue as to just how closely-interrelated these two protocols are.

### Capabilities of RTP

RTP's primary benefits in terms of WebRTC include:

- Generally low latency.
- Packets are sequence-numbered and timestamped for reassembly if they arrive out of order. This lets data sent using RTP be delivered on transports that don't guarantee ordering or even guarantee delivery at all.
- This means RTP can be — but is not required to be — used atop {{Glossary("UDP")}} for its performance as well as its multiplexing and checksum features.
- RTP supports multicast; while this isn't yet important for WebRTC, it's likely to matter in the future, when WebRTC is (hopefully) enhanced to support multi-user conversations.
- RTP isn't limited to use in audiovisual communication. It can be used for any form of continuous or active data transfer, including data streaming, active badges or status display updates, or control and measurement information transport.

### Things RTP doesn't do

RTP itself doesn't provide every possible feature, which is why other protocols are also used by WebRTC. Some of the more noteworthy things RTP doesn't include:

- RTP does _not_ guarantee **[quality-of-service](https://en.wikipedia.org/wiki/Quality-of-service)** (**QoS**).
- While RTP is intended for use in latency-critical scenarios, it doesn't inherently offer any features that ensure QoS. Instead, it only offers the information necessary to allow QoS to be implemented elsewhere in the stack.
- RTP doesn't handle allocation or reservation of resources that may be needed.

Where it matters for WebRTC purposes, these are dealt with in a variety of places within the WebRTC infrastructure. For example, RTCP handles QoS monitoring.

## RTCPeerConnection and RTP

Each {{domxref("RTCPeerConnection")}} has methods which provide access to the list of RTP transports that service the peer connection. These correspond to the following three types of transport supported by `RTCPeerConnection`:

- {{domxref("RTCRtpSender")}}
  - : `RTCRtpSender`s handle the encoding and transmission of {{domxref("MediaStreamTrack")}} data to a remote peer. The senders for a given connection can be obtained by calling {{domxref("RTCPeerConnection.getSenders()")}}.
- {{domxref("RTCRtpReceiver")}}
  - : `RTCRtpReceiver`s provide the ability to inspect and obtain information about incoming `MediaStreamTrack` data. A connection's receivers can be obtained by calling {{domxref("RTCPeerConnection.getReceivers()")}}.
- {{domxref("RTCRtpTransceiver")}}
  - : An `RTCRtpTransceiver` is a pair of one RTP sender and one RTP receiver which share an SDP `mid` attribute, which means they share the same SDP media m-line (representing a bidirectional SRTP stream). These are returned by the {{domxref("RTCPeerConnection.getTransceivers()")}} method, and each `mid` and transceiver share a one-to-one relationship, with the `mid` being unique for each `RTCPeerConnection`.

### Leveraging RTP to implement a "hold" feature

Because the streams for an `RTCPeerConnection` are implemented using RTP and the interfaces [above](#rtcpeerconnection_and_rtp), you can take advantage of the access this gives you to the internals of streams to make adjustments. Among the simplest things you can do is to implement a "hold" feature, wherein a participant in a call can click a button and turn off their microphone, begin sending music to the other peer instead, and stop accepting incoming audio.

> **Note:** This example makes use of modern JavaScript features including [async functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and the [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) expression. This enormously simplifies and makes far more readable the code dealing with the promises returned by WebRTC methods.

In the examples below, we'll refer to the peer which is turning "hold" mode on and off as the local peer and the user being placed on hold as the remote peer.

#### Activating hold mode

##### Local peer

When the local user decides to enable hold mode, the `enableHold()` method below is called. It accepts as input a {{domxref("MediaStream")}} containing the audio to play while the call is on hold.

```js
async function enableHold(audioStream) {
  try {
    await audioTransceiver.sender.replaceTrack(audioStream.getAudioTracks()[0]);
    audioTransceiver.receiver.track.enabled = false;
    audioTransceiver.direction = "sendonly";
  } catch (err) {
    /* handle the error */
  }
}
```

The three lines of code within the [`try`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block perform the following steps:

1. Replace their outgoing audio track with a {{domxref("MediaStreamTrack")}} containing hold music.
2. Disable the incoming audio track.
3. Switch the audio transceiver into send-only mode.

This triggers renegotiation of the `RTCPeerConnection` by sending it a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event, which your code responds to generating an SDP offer using {{domxref("RTCPeerConnection.createOffer")}} and sending it through the signaling server to the remote peer.

The `audioStream`, containing the audio to play instead of the local peer's microphone audio, can come from anywhere. One possibility is to have a hidden {{HTMLElement("audio")}} element and use {{domxref("HTMLMediaElement.captureStream", "HTMLAudioElement.captureStream()")}} to get its audio stream.

##### Remote peer

On the remote peer, when we receive an SDP offer with the directionality set to `"sendonly"`, we handle it using the `holdRequested()` method, which accepts as input an SDP offer string.

```js
async function holdRequested(offer) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(null);
    audioTransceiver.direction = "recvonly";
    await sendAnswer();
  } catch (err) {
    /* handle the error */
  }
}
```

The steps taken here are:

1. Set the remote description to the specified `offer` by calling {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
2. Replace the audio transceiver's {{domxref("RTCRtpSender")}}'s track with `null`, meaning no track. This stops sending audio on the transceiver.
3. Set the audio transceiver's {{domxref("RTCRtpTransceiver.direction", "direction")}} property to `"recvonly"`, instructing the transceiver to only accept audio and not to send any.
4. The SDP answer is generated and sent using a method called `sendAnswer()`, which generates the answer using {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} then sends the resulting SDP to the other peer over the signaling service.

#### Deactivating hold mode

##### Local peer

When the local user clicks the interface widget to disable hold mode, the `disableHold()` method is called to begin the process of restoring normal functionality.

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

This reverses the steps taken in `enableHold()` as follows:

1. The audio transceiver's `RTCRtpSender`'s track is replaced with the specified stream's first audio track.
2. The transceiver's incoming audio track is re-enabled.
3. The audio transceiver's direction is set to `"sendrecv"`, indicating that it should return to both sending and receiving streamed audio, instead of only sending.

Just like when hold was engaged, this triggers negotiation again, resulting in your code sending a new offer to the remote peer.

##### Remote peer

When the `"sendrecv"` offer is received by the remote peer, it calls its `holdEnded()` method:

```js
async function holdEnded(offer, micStream) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
    audioTransceiver.direction = "sendrecv";
    await sendAnswer();
  } catch (err) {
    /* handle the error */
  }
}
```

The steps taken inside the `try` block here are:

1. The received offer is stored as the remote description by calling `setRemoteDescription()`.
2. The audio transceiver's `RTCRtpSender`'s {{domxref("RTCRtpSender.replaceTrack", "replaceTrack()")}} method is used to set the outgoing audio track to the first track of the microphone's audio stream.
3. The transceiver's direction is set to `"sendrecv"`, indicating that it should resume both sending and receiving audio.

From this point on, the microphone is re-engaged and the remote user is once again able to hear the local user, as well as speak to them.

## See also

- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
