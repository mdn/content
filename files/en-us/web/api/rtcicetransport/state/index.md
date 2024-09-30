---
title: "RTCIceTransport: state property"
short-title: state
slug: Web/API/RTCIceTransport/state
page-type: web-api-instance-property
browser-compat: api.RTCIceTransport.state
---

{{APIRef("WebRTC")}}

The **`state`** read-only property of the {{domxref("RTCIceTransport")}} interface returns the current state of the ICE transport, so you can determine the state of ICE gathering in which the ICE agent currently is operating.

This differs from the {{domxref("RTCIceTransport.gatheringState", "gatheringState")}}, which only indicates whether or not ICE gathering is currently underway.
It also differs from {{domxref("RTCPeerConnection.connectionState")}}, which aggregates the states across every {{domxref("RTCIceTransport")}} used by every {{domxref("RTCRtpSender")}} and every {{domxref("RTCRtpReceiver")}} on the entire connection.

## Value

A string whose value is one of the following:

- `"new"`
  - : The {{domxref("RTCIceTransport")}} is currently gathering local candidates, or is waiting for the remote device to begin to transmit the remote candidates, or both. In this state, checking of candidates to look for those which might be acceptable has not yet begun.
- `"checking"`
  - : At least one remote candidate has been received, and the `RTCIceTransport` has begun examining pairings of remote and local candidates in order to attempt to identify viable pairs that could be used to establish a connection. Keep in mind that gathering of local candidates may still be underway, and, similarly, the remote device also may still be gathering candidates of its own.
- `"connected"`

  - : A viable candidate pair has been found and selected, and the `RTCIceTransport` has connected the two peers together using that pair. However, there are still candidates pairings to consider, and there may still be gathering underway on one or both of the two devices.

    The transport may revert from the `"connected"` state to the `"checking"` state if either peer decides to cancel consent to use the selected candidate pair, and may revert to `"disconnected"` if there are no candidates left to check but one or both clients are still gathering candidates.

- `"completed"`
  - : The transport has finished gathering local candidates and has received a notification from the remote peer that no more candidates will be sent. In addition, all candidate pairs have been considered and a pair has been selected for use. If consent checks fail on all successful candidate pairs, the transport state will change to `"failed"`.
- `"disconnected"`
  - : The ICE agent has determined that connectivity has been lost for this {{domxref("RTCIceTransport")}}. This is not a failure state (that's `"failed"`). A value of `"disconnected"` means that a transient issue has occurred that has broken the connection, but that should resolve itself automatically without your code having to take any action. See [The disconnected state](#the_disconnected_state) for additional details.
- `"failed"`
  - : The `RTCIceTransport` has finished the gathering process, has received the "no more candidates" notification from the remote peer, and has finished checking pairs of candidates, without successfully finding a pair that is both valid and for which consent can be obtained. _This is a terminal state, indicating that the connection cannot be achieved or maintained._
- `"closed"`
  - : The transport has shut down and is no longer responding to STUN requests.

## Usage notes

If an ICE restart occurs, the candidate gathering and connectivity check process is started over again; this will cause a transition from the `"connected"` state if the restart occurred while the state was `"completed"`. If the restart occurred during a transient `"disconnected"` state, the state transitions to `"checking"`

### The disconnected state

`"disconnected"` is a transient state that occurs when the connection between the two peers fails in a manner that the WebRTC infrastructure can automatically correct once the connection is available again. It is _not_ a failure state. Instead, you can think of `"disconnected"` as being similar to `"checking"` but with the added information that the connection had been working but at the moment is not.

Every {{Glossary("user agent")}} and platform may have its own scenarios that can trigger the `"disconnected"` state. Possible causes include:

- The network interface being used by the connection has gone offline.
- {{Glossary("STUN")}} requests being sent to the remote device have gone unanswered repeatedly.

The `"disconnected"` state can also occur when the transport has finished checking all existing candidate pairs and has not found a pair that will work—or a valid pair was found but rejected due to consent to use the pair being denied. In this scenario, the transport is still continuing to gather candidates, and/or to wait for candidates to be sent by the remote peer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
