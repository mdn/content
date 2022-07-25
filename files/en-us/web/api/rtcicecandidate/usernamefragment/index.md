---
title: RTCIceCandidate.usernameFragment
slug: Web/API/RTCIceCandidate/usernameFragment
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - NeedsExample
  - Property
  - RTCIceCandidate
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - ufrag
  - usernameFragment
browser-compat: api.RTCIceCandidate.usernameFragment
---
{{APIRef("WebRTC")}}

The read-only **`usernameFragment`** property on the {{domxref("RTCIceCandidate")}} interface is a string indicating the
username fragment ("ufrag") that uniquely identifies a single ICE interaction session.

This value is specified using the `usernameFragment` property in the `candidateInfo` options object that is passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
If you call the constructor with an m-line string instead of the options object, the value of `usernameFragment` is extracted from the specified candidate m-line string.

Note that 24 bits of the username fragment are required to be randomized by the browser. See [Randomization](#randomization) below for details.

## Value

A string containing the username fragment (usually referred to in
shorthand as "ufrag" or "ice-ufrag") that, along with the ICE password ("ice-pwd"),
uniquely identifies a single ongoing ICE interaction, including for any communication
with the {{Glossary("STUN")}} server. The string may be up to 256 characters long, and
has no default value.

#### Randomization

At least 24 bits of the text in the `ufrag` are required to be randomly
selected by the ICE layer at the beginning of the ICE session. The specifics for which
bits are random and what the remainder of the `ufrag` text are left up to the
browser implementation to decide. For example, a browser might choose to always use a
24-character `ufrag` in which bit 4 of each character is randomly selected
between 0 and 1. Another example: it might take a user-defined string and append three
8-bit random bytes to the end. Or perhaps every character is entirely random.

## Usage notes

ICE uses the `usernameFragment` and password to ensure message integrity.
This avoids crosstalk among multiple ongoing ICE sessions, but, more importantly, helps
secure ICE transactions (and all of WebRTC by extension) against attacks that might try
to inject themselves into an ICE exchange.

> **Note:** There is no API to obtain the ICE password, for what should be fairly obvious security reasons.

The `usernameFragment` and password both change every time an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) occurs.

## Examples

Although the WebRTC infrastructure will filter out obsolete candidates for you after an
ICE restart, you can do it yourself if you're trying to absolutely minimize the number
of messages going back and forth.

To do so, you can compare the value of `usernameFragment` to the current
`usernameFragment` being used for the connection after receiving the
candidate from the signaling server and before calling
{{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} to add it to the
set of possible candidates.

When the web app receives a message from the signaling server that includes a candidate
to be added to the {{domxref("RTCPeerConnection")}}, you can (and generally
_should_) call `addIceCandidate()`. There's not typically a need to
manually worry about filtering the candidates.

However, let's imagine that we do need to minimize traffic. The function below,
`ssNewCandidate()`, is called when a message, `signalMsg`, arrives
from the signaling server that contains an ICE candidate to be added to the
`RTCPeerConnection`. To avoid including candidates obsoleted by an ICE
restart, we can use code like this:

```js
const ssNewCandidate = (signalMsg) => {
  let candidate = new RTCIceCandidate(signalMsg.candidate);
  let receivers = pc.getReceivers();

  receivers.forEach((receiver) => {
    let parameters = receiver.transport.getParameters();

    if (parameters.usernameFragment === candidate.usernameFragment) {
      return;
    }
  });

  pc.addIceCandidate(candidate)
    .catch(reportError);
}
```

This walks through the list of the {{domxref("RTCRtpReceiver")}} objects being used to
receive ICE data, and looks to see if the `usernameFragment` indicated in the
candidate matches any of them. If it does, `ssNewCandidate()` aborts.
Otherwise, after checking every receiver, it adds the new candidate to the connection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
