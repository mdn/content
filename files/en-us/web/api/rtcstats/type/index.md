---
title: RTCStats.type
slug: Web/API/RTCStats/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCStats
  - Report
  - Statistics
  - Stats
  - Type
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCStats.type
---
{{APIRef("WebRTC")}}

The {{domxref("RTCStats")}} dictionary's property
**`type`** is a string which specifies the type of statistic
represented by the object.

The string can be used to determine which of the
{{domxref("RTCStats")}}-based dictionaries are the foundation of the statistics object.

## Value

A string which specifies which type of statistic is represented by
the object. It is one of the following values:

- `candidate-pair`
  - : An {{domxref("RTCIceCandidatePairStats")}} object providing statistics related to an {{domxref("RTCIceTransport")}}. Candidate pairs other than the currently active pair for the transport are deleted when the {{domxref("RTCPeerConnection")}} changes its {{domxref("RTCPeerConnection.iceGatheringState")}} to `new` during an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart). The active candidate pair is deleted after the transport switches to another candidate pair; this change cannot be detected otherwise.
- `certificate`
  - : An {{domxref("RTCCertificateStats")}} object providing statistics related to a certificate being used by an {{domxref("RTCIceTransport")}}.
- `codec`
  - : An {{domxref("RTCCodecStats")}} object containing statistics about a codec currently being used by {{Glossary("RTP")}} streams to send or receive data for the {{domxref("RTCPeerConnection")}}.
- `csrc`
  - : An {{domxref("RTCContributingSourceStats")}} object which contains statistics related to a contributing source (CSRC) that contributed to an inbound RTP stream.
- `data-channel`
  - : An {{domxref("RTCDataChannelStats")}} object which contains statistics about each {{domxref("RTCDataChannel")}} on the connection.
- `inbound-rtp`
  - : An {{domxref("RTCInboundRtpStreamStats")}} object providing statistics about _inbound_ data being received from remote peers. Since this only provides statistics related to inbound data, without considering the local peer's state, any values that require knowledge of both, such as round-trip time, is not included. This report isn't available if there are no connected peers.
- `local-candidate`
  - : An {{domxref("RTCIceCandidateStats")}} object giving statistics about an ICE local candidate; these candidates are found in the output from {{domxref("RTCIceTransport.getLocalCandidates()")}}.
- `outbound-rtp`
  - : The report is an {{domxref("RTCOutboundRtpStreamStats")}} object providing statistics based on the local peer's _outgoing_ data being sent to its peers. This information considers only the outbound RTP stream, so any data which requires information about the state of the remote peers (such as round-trip time) is unavailable, since those values can't be computed without knowing about the other peers' states.
- `peer-connection`
  - : A {{domxref("RTCPeerConnectionStats")}} object provides statistics related to the overall peer connection's {{domxref("RTCPeerConnection")}}.
- `receiver`
  - : Provides statistics about a specific {{domxref("RTCRtpReceiver")}}. The statistics object is an {{domxref("RTCAudioReceiverStats")}} object if {{domxref("RTCStats.kind", "kind")}} is `audio`; if `kind` is `video`, the object is an {{domxref("RTCVideoReceiverStats")}} object.
- `remote-candidate`
  - : The report is an {{domxref("RTCIceCandidateStats")}} object containing statistics about the remote candidate's {{domxref("RTCIceTransport")}}. This may include information such as the type of network, the protocol, the URL, the type of relay being used, and so forth.
- `remote-inbound-rtp`
  - : The report is an {{domxref("RTCRemoteInboundRtpStreamStats")}} object providing statistics about your outbound RTP data stream, but from the perspective of the remote peer. That is, this information is about your `outbound-rtp` stream, but as seen by the remote device that's handling the stream. You can use this information to do things like determine how well the remote peer is receiving data.
- `remote-outbound-rtp`
  - : The report is an {{domxref("RTCRemoteOutboundRtpStreamStats")}} object that contains statistics about your inbound RTP (`inbound-rtp`) stream, but from the perspective of the remote peer.
- `sender`
  - : An object containing statistics about the {{domxref("RTCRtpSender")}} for a stream on the {{domxref("RTCPeerConnection")}}. If {{domxref("RTCStats.kind", "kind")}} is `"audio"`, this object is of type {{domxref("RTCAudioSenderStats")}}; if `kind` is `"video"`, this is an {{domxref("RTCVideoSenderStats")}} object.
- `stream` {{deprecated_inline}}
  - : An object of type {{domxref("RTCMediaStreamStats")}}, providing statistics and information about a {{domxref("MediaStream")}} which is part of the {{domxref("RTCPeerConnection")}}.
- `track` {{deprecated_inline}}
  - : The object is one of the types based on {{domxref("RTCMediaHandlerStats")}}: for audio tracks, the type is {{domxref("RTCSenderAudioTrackAttachmentStats")}} and for video tracks, the type is {{domxref("RTCSenderVideoTrackAttachmentStats")}}. The data within provides statistics related to a particular {{domxref("MediaStreamTrack")}}'s attachment to an {{domxref("RTCRtpSender")}}; also included are the media level metrics that go along with the track.

> **Note:** All "track" stats have been made obsolete. The relevant metrics have been moved to "media-source", "sender", "outbound-rtp", "receiver" and "inbound-rtp" stats.

- `transport`
  - : An object that contains statistics related to a transport for an `RTCPeerConnection`. The object is of type {{domxref("RTCTransportStats")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
