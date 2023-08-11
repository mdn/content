---
title: "RTCRtpTransceiver: currentDirection property"
short-title: currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
page-type: web-api-instance-property
browser-compat: api.RTCRtpTransceiver.currentDirection
---

{{APIRef("WebRTC")}}

The read-only {{domxref("RTCRtpTransceiver")}} property
**`currentDirection`** is a string which indicates the current
directionality of the transceiver.

Its value is one of the strings defined in the table below.

You can examine and set the transceiver's preferred directionality using
{{domxref("RTCRtpTransceiver.direction", "direction")}} property.

## Value

A string whose value is one of the strings which are a member of the following values.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.direction")}}
