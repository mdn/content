---
title: RTCRtpTransceiver
slug: Web/API/RTCRtpTransceiver
page-type: web-api-interface
browser-compat: api.RTCRtpTransceiver
---

{{APIRef("WebRTC")}}

The WebRTC interface **`RTCRtpTransceiver`** describes a permanent pairing of an {{domxref("RTCRtpSender")}} and an {{domxref("RTCRtpReceiver")}}, along with some shared state.

Each {{Glossary("SDP")}} media section describes one bidirectional SRTP ("Secure Real Time Protocol") stream (excepting the media section for {{domxref("RTCDataChannel")}}, if present). This pairing of send and receive SRTP streams is significant for some applications, so `RTCRtpTransceiver` is used to represent this pairing, along with other important state from the media section. Each non-disabled SRTP media section is always represented by exactly one transceiver.

A transceiver is uniquely identified using its {{domxref("RTCRtpTransceiver.mid", "mid")}} property, which is the same as the media ID (`mid`) of its corresponding m-line. An `RTCRtpTransceiver` is **associated** with an m-line if its `mid` is non-null; otherwise it's considered disassociated.

## Instance properties

- {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} {{ReadOnlyInline}}
  - : A read-only string which indicates the transceiver's current directionality, or `null` if the transceiver is stopped or has never participated in an exchange of offers and answers. To change the transceiver's directionality, set the value of the {{domxref("RTCRtpTransceiver.direction", "direction")}} property.
- {{domxref("RTCRtpTransceiver.direction", "direction")}}
  - : A string which is used to set the transceiver's desired direction.
- {{domxref("RTCRtpTransceiver.mid", "mid")}} {{ReadOnlyInline}}
  - : The media ID of the m-line associated with this transceiver. This association is established, when possible, whenever either a local or remote description is applied. This field is `null` if neither a local or remote description has been applied, or if its associated m-line is rejected by either a remote offer or any answer.
- {{domxref("RTCRtpTransceiver.receiver", "receiver")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpReceiver")}} object that handles receiving and decoding incoming media.
- {{domxref("RTCRtpTransceiver.sender", "sender")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpSender")}} object responsible for encoding and sending data to the remote peer.
- {{domxref("RTCRtpTransceiver.stopped", "stopped")}} {{Deprecated_Inline}}
  - : Indicates whether or not sending and receiving using the paired `RTCRtpSender` and `RTCRtpReceiver` has been permanently disabled, either due to SDP offer/answer, or due to a call to {{domxref("RTCRtpTransceiver.stop", "stop()")}}.

## Instance methods

- {{domxref("RTCRtpTransceiver.setCodecPreferences", "setCodecPreferences()")}}
  - : A list of {{domxref("RTCRtpCodecParameters")}} objects which override the default preferences used by the {{Glossary("user agent")}} for the transceiver's codecs.
- {{domxref("RTCRtpTransceiver.stop", "stop()")}}
  - : Permanently stops the `RTCRtpTransceiver`. The associated sender stops sending data, and the associated receiver likewise stops receiving and decoding incoming data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} and {{domxref("RTCPeerConnection.addTransceiver()")}} both create transceivers
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
