---
title: RTCRtpTransceiverDirection
slug: Web/API/RTCRtpTransceiverDirection
tags:
  - API
  - Audio
  - Media
  - RTCRtpTransceiver
  - RTCRtpTransceiverDirection
  - RTP
  - Reference
  - Transceiver
  - Transceiver Directionality
  - Video
  - WebRTC
  - inactive
  - recvonly
  - sendonly
  - sendrecv
browser-compat: api.RTCRtpTransceiverDirection
---
{{APIRef("WebRTC")}}

The **`RTCRtpTransceiverDirection`** type is an enumerated set of strings which are used to describe the directionality of a {{domxref("RTCRtpTransceiver")}} instance.

Both the preferred {{domxref("RTCRtpTransceiver.direction", "direction")}} and the {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} properties are of this type.

## Values

The `RTCRtpTransceiverDirection` type is an enumeration of string values. Each describes how the transceiver's associated {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}} behave as shown in the table below.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Value</th>
      <th scope="col"><code>RTCRtpSender</code> behavior</th>
      <th scope="col"><code>RTCRtpReceiver</code> behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>"sendrecv"</code></th>
      <td>
        Offers to send {{Glossary("RTP")}} data, and will do so if the
        other peer accepts the connection and at least one of the sender's
        encodings is active.
      </td>
      <td>
        Offers to receive RTP data, and does so if the other peer accepts.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"sendonly"</code></th>
      <td>
        Offers to send RTP data, and will do so if the other peer accepts the
        connection and at least one of the sender's encodings is active.
      </td>
      <td>Does <em>not</em> offer to receive RTP data and will not do so.</td>
    </tr>
    <tr>
      <th scope="row"><code>"recvonly"</code></th>
      <td>Does <em>not</em> offer to send RTP data, and will not do so.</td>
      <td>
        Offers to receive RTP data, and will do so if the other peer offers.
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"inactive"</code></th>
      <td>Does <em>not</em> offer to send RTP data, and will not do so.</td>
      <td>Does <em>not</em> offer to receive RTP data and will not do so.</td>
    </tr>
  </tbody>
</table>

To determine if a sender has at least one active encoding, the {{Glossary("user agent")}} gets its parameters using {{domxref("RTCRtpSender.getParameters()")}}, then looks at the parameters' {{domxref("RTCRtpParameters.encodings", "encodings")}} property; if any of the listed encodings has its {{domxref("RTCRtpEncodingParameters.active", "active")}} property set to `true`, the sender has an active encoding.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpTransceiver.direction")}} and {{domxref("RTCRtpTransceiver.currentDirection")}}
- {{domxref("RTCRtpReceiver")}} and {{domxref("RTCRtpSender")}}
