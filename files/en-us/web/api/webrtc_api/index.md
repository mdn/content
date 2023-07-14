---
title: WebRTC API
slug: Web/API/WebRTC_API
page-type: web-api-overview
spec-urls:
  - https://w3c.github.io/webrtc-pc/
  - https://w3c.github.io/mediacapture-main/
  - https://w3c.github.io/mediacapture-fromelement/
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary. The set of standards that comprise WebRTC makes it possible to share data and perform teleconferencing peer-to-peer, without requiring that the user install plug-ins or any other third-party software.

WebRTC consists of several interrelated APIs and protocols which work together to achieve this. The documentation you'll find here will help you understand the fundamentals of WebRTC, how to set up and use both data and media connections, and more.

## WebRTC concepts and usage

WebRTC serves multiple purposes; together with the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API), they provide powerful multimedia capabilities to the Web, including support for audio and video conferencing, file exchange, screen sharing, identity management, and interfacing with legacy telephone systems including support for sending {{Glossary("DTMF")}} (touch-tone dialing) signals. Connections between peers can be made without requiring any special drivers or plug-ins, and can often be made without any intermediary servers.

Connections between two peers are represented by the {{DOMxRef("RTCPeerConnection")}} interface. Once a connection has been established and opened using `RTCPeerConnection`, media streams ({{DOMxRef("MediaStream")}}s) and/or data channels ({{DOMxRef("RTCDataChannel")}}s) can be added to the connection.

Media streams can consist of any number of tracks of media information; tracks, which are represented by objects based on the {{DOMxRef("MediaStreamTrack")}} interface, may contain one of a number of types of media data, including audio, video, and text (such as subtitles or even chapter names). Most streams consist of at least one audio track and likely also a video track, and can be used to send and receive both live media or stored media information (such as a streamed movie).

You can also use the connection between two peers to exchange arbitrary binary data using the {{DOMxRef("RTCDataChannel")}} interface. This can be used for back-channel information, metadata exchange, game status packets, file transfers, or even as a primary channel for data transfer.

### Interoperability

WebRTC is in general well supported in modern browsers, but some incompatibilities remain. The [adapter.js](https://github.com/webrtcHacks/adapter) library is a shim to insulate apps from these incompatibilities.

## WebRTC reference

Because WebRTC provides interfaces that work together to accomplish a variety of tasks, we have divided up the reference by category. Please see the sidebar for an alphabetical list.

### Connection setup and management

These interfaces, dictionaries, and types are used to set up, open, and manage WebRTC connections. Included are interfaces representing peer media connections, data channels, and interfaces used when exchanging information on the capabilities of each peer in order to select the best possible configuration for a two-way media connection.

#### Interfaces

- {{DOMxRef("RTCPeerConnection")}}
  - : Represents a WebRTC connection between the local computer and a remote peer. It is used to handle efficient streaming of data between the two peers.
- {{DOMxRef("RTCDataChannel")}}
  - : Represents a bi-directional data channel between two peers of a connection.
- {{DOMxRef("RTCDataChannelEvent")}}
  - : Represents events that occur while attaching a {{DOMxRef("RTCDataChannel")}} to a {{DOMxRef("RTCPeerConnection")}}. The only event sent with this interface is {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}.
- {{DOMxRef("RTCSessionDescription")}}
  - : Represents the parameters of a session. Each `RTCSessionDescription` consists of a description {{DOMxRef("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.
- {{DOMxRef("RTCStatsReport")}}
  - : Provides information detailing statistics for a connection or for an individual track on the connection; the report can be obtained by calling {{DOMxRef("RTCPeerConnection.getStats()")}}.
- {{DOMxRef("RTCIceCandidate")}}
  - : Represents a candidate Interactive Connectivity Establishment ({{Glossary("ICE")}}) server for establishing an {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCIceTransport")}}
  - : Represents information about an {{Glossary("ICE")}} transport.
- {{DOMxRef("RTCPeerConnectionIceEvent")}}
  - : Represents events that occur in relation to ICE candidates with the target, usually an {{DOMxRef("RTCPeerConnection")}}. Only one event is of this type: {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}.
- {{DOMxRef("RTCRtpSender")}}
  - : Manages the encoding and transmission of data for a {{DOMxRef("MediaStreamTrack")}} on an {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCRtpReceiver")}}
  - : Manages the reception and decoding of data for a {{DOMxRef("MediaStreamTrack")}} on an {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCTrackEvent")}}
  - : The interface used to represent a {{domxref("RTCPeerConnection.track_event", "track")}} event, which indicates that an {{DOMxRef("RTCRtpReceiver")}} object was added to the {{DOMxRef("RTCPeerConnection")}} object, indicating that a new incoming {{DOMxRef("MediaStreamTrack")}} was created and added to the `RTCPeerConnection`.
- {{DOMxRef("RTCSctpTransport")}}
  - : Provides information which describes a Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) transport and also provides a way to access the underlying Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) transport over which SCTP packets for all of an [`RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection)'s data channels are sent and received.

#### Dictionaries

- {{DOMxRef("RTCIceServer")}}
  - : Defines how to connect to a single {{Glossary("ICE")}} server (such as a {{Glossary("STUN")}} or {{Glossary("TURN")}} server).
- {{DOMxRef("RTCRtpContributingSource")}}
  - : Contains information about a given contributing source (CSRC) including the most recent time a packet that the source contributed was played out.

#### Events

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : The amount of data currently buffered by the data channel—as indicated by its {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} property—has decreased to be at or below the channel's minimum buffered data size, as specified by {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : The data channel has completed the closing process and is now in the `closed` state. Its underlying data transport is completely closed at this point. You can be notified _before_ closing completes by watching for the `closing` event instead.
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : The `RTCDataChannel` has transitioned to the `closing` state, indicating that it will be closed soon. You can detect the completion of the closing process by watching for the `close` event.
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : The connection's state, which can be accessed in {{domxref("RTCPeerConnection.connectionState", "connectionState")}}, has changed.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : A new {{domxref("RTCDataChannel")}} is available following the remote peer opening a new data channel. This event's type is {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : An {{domxref("RTCErrorEvent")}} indicating that an error occurred on the data channel.
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - : An {{domxref("RTCErrorEvent")}} indicating that an error occurred on the {{domxref("RTCDtlsTransport")}}. This error will be either `dtls-failure` or `fingerprint-failure`.
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : The {{domxref("RTCIceTransport")}}'s gathering state has changed.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : An {{domxref("RTCPeerConnectionIceEvent")}} which is sent whenever the local device has identified a new ICE candidate which needs to be added to the local peer by calling {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : An {{domxref("RTCPeerConnectionIceErrorEvent")}} indicating that an error has occurred while gathering ICE candidates.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Sent to an {{domxref("RTCPeerConnection")}} when its ICE connection's state—found in the {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}} property—changes.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Sent to an {{domxref("RTCPeerConnection")}} when its ICE gathering state—found in the {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}} property—changes.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : A message has been received on the data channel. The event is of type {{domxref("MessageEvent")}}.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Informs the `RTCPeerConnection` that it needs to perform session negotiation by calling {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} followed by {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : The underlying data transport for the `RTCDataChannel` has been successfully opened or re-opened.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : The currently-selected pair of ICE candidates has changed for the `RTCIceTransport` on which the event is fired.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : The `track` event, of type {{domxref("RTCTrackevent")}} is sent to an {{domxref("RTCPeerConnection")}} when a new track is added to the connection following the successful negotiation of the media's streaming.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Sent to the peer connection when its {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} has changed. This happens as a result of a call to either {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} or {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - : The state of the `RTCDtlsTransport` has changed.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : The state of the `RTCIceTransport` has changed.
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : The state of the `RTCSctpTransport` has changed.

#### Types

- {{DOMxRef("RTCSctpTransport.state")}}
  - : Indicates the state of an {{DOMxRef("RTCSctpTransport")}} instance.

### Identity and security

These APIs are used to manage user identity and security, in order to authenticate the user for a connection.

- {{DOMxRef("RTCIdentityProvider")}}
  - : Enables a user agent is able to request that an identity assertion be generated or validated.
- {{DOMxRef("RTCIdentityAssertion")}}
  - : Represents the identity of the remote peer of the current connection. If no peer has yet been set and verified this interface returns `null`. Once set it can't be changed.
- {{DOMxRef("RTCIdentityProviderRegistrar")}}
  - : Registers an identity provider (idP).
- {{DOMxRef("RTCCertificate")}}
  - : Represents a certificate that an {{DOMxRef("RTCPeerConnection")}} uses to authenticate.

### Telephony

These interfaces and events are related to interactivity with Public-Switched Telephone Networks (PTSNs). They're primarily used to send tone dialing sounds—or packets representing those tones—across the network to the remote peer.

#### Interfaces

- {{DOMxRef("RTCDTMFSender")}}
  - : Manages the encoding and transmission of Dual-Tone Multi-Frequency ({{Glossary("DTMF")}}) signaling for an {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCDTMFToneChangeEvent")}}
  - : Used by the {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}} event to indicate that a DTMF tone has either begun or ended. This event does not bubble (except where otherwise stated) and is not cancelable (except where otherwise stated).

#### Events

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : Either a new {{Glossary("DTMF")}} tone has begun to play over the connection, or the last tone in the `RTCDTMFSender`'s {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} has been sent and the buffer is now empty. The event's type is {{domxref("RTCDTMFToneChangeEvent")}}.

## Guides

- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
  - : This article introduces the protocols on top of which the WebRTC API is built.
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
  - : A guide to how WebRTC connections work and how the various protocols and interfaces can be used together to build powerful communication apps.
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC lets you build peer-to-peer communication of arbitrary data, audio, or video—or any combination thereof—into a browser application. In this article, we'll look at the lifetime of a WebRTC session, from establishing the connection all the way through closing the connection when it's no longer needed.
- [Establishing a connection: The perfect negotiation pattern](/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfect negotiation** is a design pattern which is recommended for your signaling process to follow, which provides transparency in negotiation while allowing both sides to be either the offerer or the answerer, without significant coding needed to differentiate the two.
- [Signaling and two-way video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : A tutorial and example which turns a WebSocket-based chat system created for a previous example and adds support for opening video calls among participants. The chat server's WebSocket connection is used for WebRTC signaling.
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
  - : A guide to the codecs which WebRTC requires browsers to support as well as the optional ones supported by various popular browsers. Included is a guide to help you choose the best codecs for your needs.
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
  - : This guide covers how you can use a peer connection and an associated {{DOMxRef("RTCDataChannel")}} to exchange arbitrary data between two peers.
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTC's support for interacting with gateways that link to old-school telephone systems includes support for sending DTMF tones using the {{DOMxRef("RTCDTMFSender")}} interface. This guide shows how to do so.

## Tutorials

- [Improving compatibility using WebRTC adapter.js](/en-US/docs/Web/API/WebRTC_API/adapter.js)
  - : The WebRTC organization [provides on GitHub the WebRTC adapter](https://github.com/webrtc/adapter/) to work around compatibility issues in different browsers' WebRTC implementations. The adapter is a JavaScript shim which lets your code to be written to the specification so that it will "just work" in all browsers with WebRTC support.
- [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : The {{DOMxRef("RTCDataChannel")}} interface is a feature which lets you open a channel between two peers over which you may send and receive arbitrary data. The API is intentionally similar to the [WebSocket API](/en-US/docs/Web/API/WebSockets_API), so that the same programming model can be used for each.
- [Building an internet connected phone with Peer.js](/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : This tutorial is a step-by-step guide on how to build a phone using Peer.js

## Specifications

{{Specifications}}

### WebRTC-proper protocols

- [Application Layer Protocol Negotiation for Web Real-Time Communications](https://datatracker.ietf.org/doc/rfc8833/)
- [WebRTC Audio Codec and Processing Requirements](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/rfc8832/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC Security Architecture](https://datatracker.ietf.org/doc/rfc8827/)
- [Transports for RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### Related supporting protocols

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/rfc7635/)

## See also

- {{DOMxRef("MediaDevices")}}
- {{DOMxRef("MediaStreamEvent")}}
- {{DOMxRef("MediaStreamTrack")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MediaStream")}}
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Web media technologies](/en-US/docs/Web/Media)
