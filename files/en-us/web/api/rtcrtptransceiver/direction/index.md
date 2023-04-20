---
title: "RTCRtpTransceiver: direction property"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
page-type: web-api-instance-property
browser-compat: api.RTCRtpTransceiver.direction
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRtpTransceiver")}} property
**`direction`** is a string which indicates the transceiver's
preferred directionality.

Its value must be one of the strings defined in the table below.

The transceiver's _current_ direction is indicated by the
{{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} property.

## Value

A string whose value is one of the strings which are a member of the following values, indicating the transceiver's preferred direction.

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

### Exceptions

When setting the value of `direction`, the following exception can occur:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if either the receiver's {{domxref("RTCPeerConnection")}} is closed or the
    {{domxref("RTCRtpReceiver")}} is stopped.

## Usage notes

### Setting the direction

When you change the value of `direction`, an `InvalidStateError`
exception will occur if the connection is closed or the receiver is stopped.

If the new value of `direction` is in fact different from the existing
value, renegotiation of the connection is required, so a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
event is sent to the {{domxref("RTCPeerConnection")}}.

### Effect on offers and answers

The value of `direction` is used by
{{domxref("RTCPeerConnection.createOffer()")}} or
{{domxref("RTCPeerConnection.createAnswer()")}} in order to generate the SDP generated
by each of those methods. The SDP contains an a-line which specifies the directionality.
For example, if the `direction` is specified as `"sendrecv"`, the
corresponding SDP a-line is:

```
a=sendrecv
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpTransceiver.currentDirection")}}
