---
title: WebRTC connectivity
slug: Web/API/WebRTC_API/Connectivity
page-type: guide
tags:
  - API
  - Advanced
  - Audio
  - Draft
  - Guide
  - Media
  - Video
  - WebRTC
---
{{WebRTCSidebar}}

This article describes how the various WebRTC-related protocols interact with one another in order to create a connection and transfer data and/or media among peers.

> **Note:** This page needs heavy rewriting for structural integrity and content completeness. Lots of info here is good but the organization is a mess since this is sort of a dumping ground right now.

## Signaling

Unfortunately, WebRTC can't create connections without some sort of server in the middle. We call this the **signal channel** or **signaling service**. It's any sort of channel of communication to exchange information before setting up a connection, whether by email, postcard, or a carrier pigeon. It's up to you.

The information we need to exchange is the Offer and Answer which just contains the {{Glossary("SDP")}} mentioned below.

Peer A who will be the initiator of the connection, will create an Offer. They will then send this offer to Peer B using the chosen signal channel. Peer B will receive the Offer from the signal channel and create an Answer. They will then send this back to Peer A along the signal channel.

### Session descriptions

The configuration of an endpoint on a WebRTC connection is called a **session description**. The description includes information about the kind of media being sent, its format, the transfer protocol being used, the endpoint's IP address and port, and other information needed to describe a media transfer endpoint. This information is exchanged and stored using **Session Description Protocol** ({{Glossary("SDP")}}); if you want details on the format of SDP data, you can find it in {{RFC(2327)}}.

When a user starts a WebRTC call to another user, a special description is created called an **offer**. This description includes all the information about the caller's proposed configuration for the call. The recipient then responds with an **answer**, which is a description of their end of the call. In this way, both devices share with one another the information needed in order to exchange media data. This exchange is handled using Interactive Connectivity Establishment ({{Glossary("ICE")}}), a protocol which lets two devices use an intermediary to exchange offers and answers even if the two devices are separated by Network Address Translation ({{Glossary("NAT")}}).

Each peer, then, keeps two descriptions on hand: the **local description**, describing itself, and the **remote description**, describing the other end of the call.

The offer/answer process is performed both when a call is first established, but also any time the call's format or other configuration needs to change. Regardless of whether it's a new call, or reconfiguring an existing one, these are the basic steps which must occur to exchange the offer and answer, leaving out the ICE layer for the moment:

1. The caller captures local Media via {{domxref("MediaDevices.getUserMedia")}}
2. The caller creates `RTCPeerConnection` and calls {{domxref("RTCPeerConnection.addTrack()")}} (Since `addStream` is deprecating)
3. The caller calls {{domxref("RTCPeerConnection.createOffer()")}} to create an offer.
4. The caller calls {{domxref("RTCPeerConnection.setLocalDescription()")}} to set that offer as the _local description_ (that is, the description of the local end of the connection).
5. After setLocalDescription(), the caller asks STUN servers to generate the ice candidates
6. The caller uses the signaling server to transmit the offer to the intended receiver of the call.
7. The recipient receives the offer and calls {{domxref("RTCPeerConnection.setRemoteDescription()")}} to record it as the _remote description_ (the description of the other end of the connection).
8. The recipient does any setup it needs to do for its end of the call: capture its local media, and attach each media tracks into the peer connection via {{domxref("RTCPeerConnection.addTrack()")}}
9. The recipient then creates an answer by calling {{domxref("RTCPeerConnection.createAnswer()")}}.
10. The recipient calls {{domxref("RTCPeerConnection.setLocalDescription()")}}, passing in the created answer, to set the answer as its local description. The recipient now knows the configuration of both ends of the connection.
11. The recipient uses the signaling server to send the answer to the caller.
12. The caller receives the answer.
13. The caller calls {{domxref("RTCPeerConnection.setRemoteDescription()")}} to set the answer as the remote description for its end of the call. It now knows the configuration of both peers. Media begins to flow as configured.

### Pending and current descriptions

Taking one step deeper into the process, we find that `localDescription` and `remoteDescription`, the properties which return these two descriptions, aren't as simple as they look. Because during renegotiation, an offer might be rejected because it proposes an incompatible format, it's necessary that each endpoint have the ability to propose a new format but not actually switch to it until it's accepted by the other peer. For that reason, WebRTC uses _pending_ and _current_ descriptions.

The **current description** (which is returned by the {{domxref("RTCPeerConnection.currentLocalDescription")}} and {{domxref("RTCPeerConnection.currentRemoteDescription")}} properties) represents the description currently in actual use by the connection. This is the most recent connection that both sides have fully agreed to use.

The **pending description** (returned by {{domxref("RTCPeerConnection.pendingLocalDescription")}} and {{domxref("RTCPeerConnection.pendingRemoteDescription")}}) indicates a description which is currently under consideration following a call to `setLocalDescription()` or `setRemoteDescription()`, respectively.

When reading the description (returned by {{domxref("RTCPeerConnection.localDescription")}} and {{domxref("RTCPeerConnection.remoteDescription")}}), the returned value is the value of `pendingLocalDescription`/`pendingRemoteDescription` if there's a pending description (that is, the pending description isn't `null`); otherwise, the current description (`currentLocalDescription`/`currentRemoteDescription`) is returned.

When changing the description by calling `setLocalDescription()` or `setRemoteDescription()`, the specified description is set as the pending description, and the WebRTC layer begins to evaluate whether or not it's acceptable. Once the proposed description has been agreed upon, the value of `currentLocalDescription` or `currentRemoteDescription` is changed to the pending description, and the pending description is set to null again, indicating that there isn't a pending description.

> **Note:** The `pendingLocalDescription` contains not just the offer or answer under consideration, but any local ICE candidates which have already been gathered since the offer or answer was created. Similarly, `pendingRemoteDescription` includes any remote ICE candidates which have been provided by calls to {{domxref("RTCPeerConnection.addIceCandidate()")}}.

See the individual articles on these properties and methods for more specifics, and [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs) for information about codecs supported by WebRTC and which are compatible with which browsers. The codecs guide also offers guidance to help you choose the best codecs for your needs.

## ICE candidates

As well as exchanging information about the media (discussed above in Offer/Answer and SDP), peers must exchange information about the network connection. This is known as an **ICE candidate** and details the available methods the peer is able to communicate (directly or through a TURN server). Typically, each peer will propose its best candidates first, making their way down the line toward their worse candidates. Ideally, candidates are UDP (since it's faster, and media streams are able to recover from interruptions relatively easily), but the ICE standard does allow TCP candidates as well.

> **Note:** Generally, ICE candidates using TCP are only going to be used when UDP is not available or is restricted in ways that make it not suitable for media streaming. Not all browsers support ICE over TCP, however.

ICE allows candidates to represent connections over either {{Glossary("TCP")}} or {{Glossary("UDP")}}, with UDP generally being preferred (and being more widely supported). Each protocol supports a few types of candidate, with the candidate types defining how the data makes its way from peer to peer.

### UDP candidate types

UDP candidates (candidates with their {{domxref("RTCIceCandidate.protocol", "protocol")}} set to `udp`) can be one of these types:

- `host`
  - : A host candidate is one for which its {{domxref("RTCIceCandidate/address", "ip")}} address is the actual, direct IP address of the remote peer.
- `prflx`
  - : A peer reflexive candidate is one whose IP address comes from a symmetric NAT between the two peers, usually as an additional candidate during trickle ICE (that is, additional candidate exchanges that occur after primary signaling but before the connection verification phase is finished).
- `srflx`
  - : A server reflexive candidate is generated by a STUN/TURN server; the connection's initiator requests a candidate from the STUN server, which forwards the request through the remote peer's NAT, which creates and returns a candidate whose IP address is local to the remote peer. The STUN server then replies to the initiator's request with a candidate whose IP address is unrelated to the remote peer.
- `relay`
  - : A relay candidate is generated just like a server reflexive candidate (`"srflx"`), but using {{Glossary("TURN")}} instead of {{Glossary("STUN")}}.

### TCP candidate types

TCP candidates (that is, candidates whose {{domxref("RTCIceCandidate.protocol", "protocol")}} is `tcp`) can be of these types:

- `active`
  - : The transport will try to open an outbound connection but won't receive incoming connection requests. This is the most common type, and the only one that most user agents will gather.
- `passive`
  - : The transport will receive incoming connection attempts but won't attempt a connection itself.
- `so`
  - : The transport will try to simultaneously open a connection with its peer.

### Choosing a candidate pair

The ICE layer selects one of the two peers to serve as the **controlling agent**. This is the ICE agent which will make the final decision as to which candidate pair to use for the connection. The other peer is called the **controlled agent**. You can identify which one your end of the connection is by examining the value of {{domxref("RTCIceTransport.role", "RTCIceCandidate.transport.role")}}, although in general it doesn't matter which is which.

The controlling agent not only takes responsibility for making the final decision as to which candidate pair to use, but also for signaling that selection to the controlled agent by using STUN and an updated offer, if necessary. The controlled agent just waits to be told which candidate pair to use.

It's important to keep in mind that a single ICE session may result in the controlling agent choosing more than one candidate pair. Each time it does so and shares that information with the controlled agent, the two peers reconfigure their connection to use the new configuration described by the new candidate pair.

Once the ICE session is complete, the configuration that's currently in effect is the final one, unless an ICE reset occurs.

At the end of each generation of candidates, an end-of-candidates notification is sent in the form of an {{domxref("RTCIceCandidate")}} whose {{domxref("RTCIceCandidate.candidate", "candidate")}} property is an empty string. This candidate should still be added to the connection using {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} method, as usual, in order to deliver that notification to the remote peer.

When there are no more candidates at all to be expected during the current negotiation exchange, an end-of-candidates notification is sent by delivering a {{domxref("RTCIceCandidate")}} whose {{domxref("RTCIceCandidate.candidate", "candidate")}} property is `null`. This message does _not_ need to be sent to the remote peer. It's a legacy notification of a state which can be detected instead by watching for the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} to change to `complete`, by watching for the {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} event.

## When things go wrong

During negotiation, there will be times when things just don't work out. For example, when renegotiating a connection—for example, to adapt to changing hardware or network configurations—it's possible that negotiation could reach a dead end, or some form of error might occur that prevents negotiation at all. There may be permissions issues or other problems as well, for that matter.

### ICE rollbacks

When renegotiating a connection that's already active and a situation arises in which the negotiation fails, you don't really want to kill the already-running call. After all, you were most likely just trying to upgrade or downgrade the connection, or to otherwise make adaptations to an ongoing session. Aborting the call would be an excessive reaction in that situation.

Instead, you can initiate an **ICE rollback**. A rollback restores the SDP offer (and the connection configuration by extension) to the configuration it had the last time the connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}} was `stable`.

To programmatically initiate a rollback, send a description whose {{domxref("RTCSessionDescription.type", "type")}} is `rollback`. Any other properties in the description object are ignored.

In addition, the ICE agent will automatically initiate a rollback when a peer that had previously created an offer receives an offer from the remote peer. In other words, if the local peer is in the state `have-local-offer`, indicating that the local peer had previously *sent* an offer, calling `setRemoteDescription()` with a *received* offer triggers rollback so that the negotiation switches from the remote peer being the caller to the local peer being the caller.

### ICE restarts

For now, see {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Session_lifetime", "ICE restart")}}.

## The entire exchange in a complicated diagram

[![A complete architectural diagram showing the whole WebRTC process.](webrtc-complete-diagram.png)](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)
