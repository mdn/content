---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
page-type: web-api-interface
browser-compat: api.RTCIceCandidate
---

{{APIRef("WebRTC")}}

The **`RTCIceCandidate`** interface—part of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API)—represents a candidate Interactive Connectivity Establishment ({{Glossary("ICE")}}) configuration which may be used to establish an {{domxref("RTCPeerConnection")}}.

An ICE candidate describes the protocols and routing needed for WebRTC to be able to communicate with a remote device. When starting a WebRTC peer connection, typically a number of candidates are proposed by each end of the connection, until they mutually agree upon one which describes the connection they decide will be best. WebRTC then uses that candidate's details to initiate the connection.

For details on how the ICE process works, see [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime). The article [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity) provides additional useful details.

## Constructor

- {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}

  - : Creates an `RTCIceCandidate` object to represent a single ICE candidate, optionally configured based on a configuration object.

    > **Note:** For backwards compatibility, the constructor also accepts as input a string containing the value of the {{domxref("RTCIceCandidate.candidate", "candidate")}} property instead of the configuration object.

## Instance properties

- {{domxref("RTCIceCandidate.address", "address")}} {{ReadOnlyInline}}
  - : A string containing the IP address of the candidate.
- {{domxref("RTCIceCandidate.candidate", "candidate")}} {{ReadOnlyInline}}
  - : A string representing the transport address for the candidate that can be used for connectivity checks. The format of this address is a `candidate-attribute` as defined in {{RFC(5245)}}. This string is empty (`""`) if the `RTCIceCandidate` is an "end of candidates" indicator.
- {{domxref("RTCIceCandidate.component", "component")}} {{ReadOnlyInline}}
  - : A string which indicates whether the candidate is an RTP or an RTCP candidate; its value is either `rtp` or `rtcp`, and is derived from the `"component-id"` field in the `candidate` a-line string.
- {{domxref("RTCIceCandidate.foundation", "foundation")}} {{ReadOnlyInline}}
  - : Returns a string containing a unique identifier that is the same for any candidates of the same type, share the same base (the address from which the ICE agent sent the candidate), and come from the same {{Glossary("STUN")}} server. This is used to help optimize ICE performance while prioritizing and correlating candidates that appear on multiple {{domxref("RTCIceTransport")}} objects.
- {{domxref("RTCIceCandidate.port", "port")}} {{ReadOnlyInline}}
  - : An integer value indicating the candidate's port number.
- {{domxref("RTCIceCandidate.priority", "priority")}} {{ReadOnlyInline}}
  - : A long integer value indicating the candidate's priority.
- {{domxref("RTCIceCandidate.protocol", "protocol")}} {{ReadOnlyInline}}
  - : A string indicating whether the candidate's protocol is `"tcp"` or `"udp"`.
- {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}} {{ReadOnlyInline}}
  - : If the candidate is derived from another candidate, `relatedAddress` is a string containing that host candidate's IP address. For host candidates, this value is `null`.
- {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}} {{ReadOnlyInline}}
  - : For a candidate that is derived from another, such as a relay or reflexive candidate, the `relatedPort` is a number indicating the port number of the candidate from which this candidate is derived. For host candidates, the `relatedPort` property is `null`.
- {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} {{ReadOnlyInline}}
  - : A string specifying the candidate's media stream identification tag which uniquely identifies the media stream within the component with which the candidate is associated, or `null` if no such association exists.
- {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} {{ReadOnlyInline}}
  - : If not `null`, `sdpMLineIndex` indicates the zero-based index number of the media description (as defined in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566)) in the {{Glossary("SDP")}} with which the candidate is associated.
- {{domxref("RTCIceCandidate.tcpType", "tcpType")}} {{ReadOnlyInline}}
  - : If `protocol` is `"tcp"`, `tcpType` represents the type of TCP candidate. Otherwise, `tcpType` is `null`.
- {{domxref("RTCIceCandidate.type", "type")}} {{ReadOnlyInline}}
  - : A string indicating the type of candidate as one of the strings listed on [`RTCIceCandidate.type`](/en-US/docs/Web/API/RTCIceCandidate/type#values).
- {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} {{ReadOnlyInline}}
  - : A string containing a randomly-generated username fragment ("ice-ufrag") which ICE uses for message integrity along with a randomly-generated password ("ice-pwd"). You can use this string to verify generations of ICE generation; each generation of the same ICE process will use the same `usernameFragment`, even across ICE restarts.

## Instance methods

- {{domxref("RTCIceCandidate.toJSON", "toJSON()")}}
  - : Returns a {{Glossary("JSON")}} representation of the `RTCIceCandidate`'s current configuration.
    The format of the representation is the same as the `candidateInfo` object that can optionally be passed to the {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate() constructor")}} to configure a candidate.

## Examples

For examples, see the article [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling), which demonstrates the entire process.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
