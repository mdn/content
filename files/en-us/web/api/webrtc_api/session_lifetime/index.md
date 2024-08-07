---
title: Lifetime of a WebRTC session
slug: Web/API/WebRTC_API/Session_lifetime
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC lets you build peer-to-peer communication of arbitrary data, audio, or video—or any combination thereof—into a browser application. In this article, we'll look at the lifetime of a WebRTC session, from establishing the connection all the way through closing the connection when it's no longer needed.

This article doesn't get into details of the actual APIs involved in establishing and handling a WebRTC connection; it reviews the process in general with some information about why each step is required. See [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) for an actual example with a step-by-step explanation of what the code does.

> [!NOTE]
> This page is currently under construction, and some of the content will move to other pages as the WebRTC guide material is built out. Pardon our dust!

## Establishing the connection

The internet is big. Really big. It's so big that years ago, smart people saw how big it was, how fast it was growing, and the [limitations](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) of the 32-bit IP addressing system, and realized that something had to be done before we ran out of addresses to use, so they started working on designing a new 64-bit addressing system. But they realized that it would take longer to complete the transition than 32-bit addresses would last, so other smart people came up with a way to let multiple computers share the same 32-bit IP address. Network Address Translation ({{Glossary("NAT")}}) is a standard which supports this address sharing by handling routing of data inbound and outbound to and from devices on a LAN, all of which are sharing a single WAN (global) IP address.

The problem for users is that each individual computer on the internet no longer necessarily has a unique IP address, and, in fact, each device's IP address may change not only if they move from one network to another, but if their network's address is changed by {{Glossary("NAT")}} and/or [DHCP](https://en.wikipedia.org/wiki/DHCP). For developers trying to do peer-to-peer networking, this introduces a conundrum: without a unique identifier for every user device, it's not possible to instantly and automatically know how to connect to a specific device on the internet. Even though you know who you want to talk to, you don't necessarily know how to reach them or even what their address is.

This is like trying to mail a package to your friend Michelle by labeling it "Michelle" and dropping it in a mailbox when you don't know her address. You need to look up her address and include it on the package, or she'll wind up wondering why you forgot her birthday again.

This is where signaling comes in.

### Signaling

Signaling is the process of sending control information between two devices to determine the communication protocols, channels, media codecs and formats, and method of data transfer, as well as any required routing information. The most important thing to know about the signaling process for WebRTC: **it is not defined in the specification**.

Why, you may wonder, is something fundamental to the process of establishing a WebRTC connection left out of the specification? The answer is simple: since the two devices have no way to directly contact each other, and the specification can't predict every possible use case for WebRTC, it makes more sense to let the developer select an appropriate networking technology and messaging protocol.

In particular, if a developer already has a method in place for connecting two devices, it doesn't make sense for them to have to use another one, defined by the specification, just for WebRTC. Since WebRTC doesn't live in a vacuum, there is likely other connectivity in play, so it makes sense to avoid having to add additional connection channels for signaling if an existing one can be used.

In order to exchange signaling information, you can choose to send JSON objects back and forth over a WebSocket connection, or you could use XMPP or SIP over an appropriate channel, or you could use {{domxref("Window/fetch", "fetch()")}} over {{Glossary("HTTPS")}} with polling, or any other combination of technologies you can come up with. You could even use email as the signaling channel.

It's also worth noting that the channel for performing signaling doesn't even need to be over the network. One peer can output a data object that can be printed out, physically carried (on foot or by carrier pigeon) to another device, entered into that device, and a response then output by that device to be returned on foot, and so forth, until the WebRTC peer connection is open. It'd be very high latency but it could be done.

#### Information exchanged during signaling

There are three basic types of information that need to be exchanged during signaling:

- Control messages used to set up, open, and close the communication channel, and to handle errors.
- Information needed in order to set up the connection: the IP addressing and port information needed for the peers to be able to talk to one another.
- Media capability negotiation: what codecs and media data formats can the peers understand? These need to be agreed upon before the WebRTC session can begin.

Only once signaling has been successfully completed can the true process of opening the WebRTC peer connection begin.

It's worth noting that the signaling server does not actually need to understand or do anything with the data being exchanged through it by the two peers during signaling. The signaling server is, in essence, a relay: a common point which both sides connect to knowing that their signaling data can be transferred through it. The server doesn't need to react to this information in any way.

#### The signaling process

There's a sequence of things that have to happen in order to make it possible to begin a WebRTC session:

1. Each peer creates an {{domxref("RTCPeerConnection")}} object representing their end of the WebRTC session.
2. Each peer establishes a handler for {{domxref("RTCPeerConnection/icecandidate_event", "icecandidate")}} events, which handles sending those candidates to the other peer over the signaling channel.
3. Each peer establishes a handler for {{domxref("RTCPeerConnection.track_event", "track")}} event, which is received when the remote peer adds a track to the stream. This code should connect the tracks to its consumer, such as a {{HTMLElement("video")}} element.
4. The caller creates and shares with the receiving peer a unique identifier or token of some kind so that the call between them can be identified by the code on the signaling server. The exact contents and form of this identifier is up to you.
5. Each peer connects to an agreed-upon signaling server, such as a WebSocket server they both know how to exchange messages with.
6. Each peer tells the signaling server that they want to join the same WebRTC session (identified by the token established in step 4).
7. **_descriptions, candidates, etc. — more coming up_**

## ICE restart

Sometimes, during the lifetime of a WebRTC session, network conditions change. One of the users might transition from a cellular to a Wi-Fi network, or the network might become congested, for example. When this happens, the ICE agent may choose to perform **ICE restart**. This is a process by which the network connection is renegotiated, exactly the same way the initial ICE negotiation is performed, with one exception: media continues to flow across the original network connection until the new one is up and running. Then media shifts to the new network connection and the old one is closed.

> [!NOTE]
> Different browsers support ICE restart under different sets of conditions. Not all browsers will perform ICE restart due to network congestion, for example.

If you need to change the configuration of the connection in some way (such as changing to a different set of ICE servers), you can do so before restarting ICE by calling {{domxref("RTCPeerConnection.setConfiguration()")}} with an updated configuration object before restarting ICE.

To explicitly trigger ICE restart, start the renegotiation process by calling {{domxref("RTCPeerConnection.createOffer()")}}, specifying the `iceRestart` option with a value of `true`. Then handle the connection process from then on just like you normally would. This generates new values for the ICE username fragment (ufrag) and password, which will be used by the renegotiation process and the resulting connection.

The answerer side of the connection will automatically begin ICE restart when new values are detected for the ICE ufrag and ICE password.

## Transmission

## Reception
