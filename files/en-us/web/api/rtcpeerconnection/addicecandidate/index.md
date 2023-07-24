---
title: "RTCPeerConnection: addIceCandidate() method"
short-title: addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.addIceCandidate
---

{{APIRef("WebRTC")}}

When a website or app using {{domxref("RTCPeerConnection")}} receives a new ICE candidate from the remote peer over its signaling channel, it delivers the newly-received candidate to the browser's {{Glossary("ICE")}} agent by calling **`RTCPeerConnection.addIceCandidate()`**.
This adds this new remote candidate to the `RTCPeerConnection`'s remote description, which describes the state of the remote end of the connection.

If the `candidate` parameter is missing or a value of `null` is given when calling `addIceCandidate()`, the added ICE candidate is an "end-of-candidates" indicator.
The same is the case if the value of the specified object's {{domxref("RTCIceCandidate.candidate", "candidate")}} is either missing or an empty string (`""`), it signals that all remote candidates have been delivered.

The end-of-candidates notification is transmitted to the remote peer using a candidate with an a-line value of `end-of-candidates`.

During negotiation, your app will likely receive many candidates which you'll deliver to the ICE agent in this way, allowing it to build up a list of potential connection methods.
This is covered in more detail in the articles [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity) and
[Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling).

## Syntax

```js-nolint
addIceCandidate(candidate)

addIceCandidate(candidate, successCallback) // deprecated
addIceCandidate(candidate, successCallback, failureCallback) // deprecated
```

### Parameters

- `candidate` {{optional_inline}}

  - : An {{domxref("RTCIceCandidate")}} object, or an object that has the following properties:

    <!-- RTCIceCandidateInit in spec -->

    - `candidate` {{optional_inline}}

      - : A string describing the properties of the candidate, taken directly from the [SDP](/en-US/docs/Web/API/WebRTC_API/Protocols#sdp) attribute `"candidate"`.
        The candidate string specifies the network connectivity information for the candidate.
        If the `candidate` is an empty string (`""`), the end of the candidate list has been reached; this candidate is known as the "end-of-candidates" marker.

        The syntax of the candidate string is described in {{RFC(5245, "", 15.1)}}.
        For an a-line (attribute line) that looks like this:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        the corresponding `candidate` string's value will be
        `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`.

        The {{Glossary("user agent")}} always prefers candidates with the highest {{domxref("RTCIceCandidate.priority", "priority")}}, all else being equal.
        In the example above, the priority is `2043278322`. The attributes are all separated by a single space character, and are in a specific order.
        The complete list of attributes for this example candidate is:

        - {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
        - {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (the number 1 is encoded to this string; 2 becomes `"rtcp"`)
        - {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
        - {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
        - {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
        - {{domxref("RTCIceCandidate.port", "port")}} = 44323
        - {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

        Additional information can be found in {{domxref("RTCIceCandidate.candidate")}}.

        > **Note:** For backward compatibility with older versions of the WebRTC specification, the constructor also accepts this string directly as an argument.

    - `sdpMid` {{optional_inline}}

      - : A string containing the identification tag of the media stream with which the candidate is associated, or `null` if there is no associated media stream. The default is `null`.

        Additional information can be found in {{domxref("RTCIceCandidate.sdpMid")}}.

    - `sdpMLineIndex` {{optional_inline}}

      - : A number property containing the zero-based index of the m-line with which the candidate is associated, within the [SDP](/en-US/docs/Web/API/WebRTC_API/Protocols#sdp) of the media description, or `null` if no such associated exists. The default is `null`.

        Additional information can be found in {{domxref("RTCIceCandidate.sdpMLineIndex")}}.

    - `usernameFragment` {{optional_inline}}

      - : A string containing the username fragment (usually referred to in shorthand as "ufrag" or "ice-ufrag").
        This fragment, along with the ICE password ("ice-pwd"), uniquely identifies a single ongoing ICE interaction (including for any communication with the {{Glossary("STUN")}} server).

        The string is generated by WebRTC at the beginning of the session.
        It may be up to 256 characters long, and at least 24 bits must contain random data.
        It has no default value and is not present unless set explicitly.

        Additional information can be found in {{domxref("RTCIceCandidate.usernameFragment")}}.

    The method will throw a {{jsxref("TypeError")}} exception if both `sdpMid` and `sdpMLineIndex` are `null`.

    The contents of the object should be constructed from a message received over the signaling channel, describing a newly received ICE candidate that's ready to be delivered to the local ICE agent.

    If no `candidate` object is specified, or its value is `null`, an end-of-candidates signal is sent to the remote peer using the `end-of-candidates` a-line, formatted like this:

    ```plain
    a=end-of-candidates
    ```

### Deprecated parameters

In older code and documentation, you may see a callback-based version of this function.
This has been deprecated and its use is **strongly** discouraged. You
should update any existing code to use the {{jsxref("Promise")}}-based version of
`addIceCandidate()` instead. The parameters for the older form of
`addIceCandidate()` are described below, to aid in updating existing code.

- `successCallback` {{deprecated_inline}}
  - : A function to be called when the ICE candidate has been successfully added. This
    function receives no input parameters and doesn't return a value.
- `failureCallback` {{deprecated_inline}}
  - : A function to be called if attempting to add the ICE candidate fails. Receives as
    input a {{domxref("DOMException")}} object describing why failure occurred.

### Return value

A {{jsxref("Promise")}} that is fulfilled when the candidate has been successfully
added to the remote peer's description by the ICE agent. The promise does not receive any input parameters.

### Exceptions

When an error occurs while attempting to add the ICE candidate, the
{{jsxref("Promise")}} returned by this method is rejected, returning one of the errors
below as the {{domxref("DOMException.name", "name")}} attribute in the specified
{{domxref("DOMException")}} object passed to the rejection handler.

- {{jsxref("TypeError")}}
  - : Returned if the specified candidate's {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} and
    {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} are both `null`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the `RTCPeerConnection` currently has no remote peer established
    ({{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} is `null`).
- `OperationError` {{domxref("DOMException")}}
  - : Returned in one of the following situations:
    - The value specified for {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} is
      non-`null` and doesn't match the media description ID of any
      media description included within the
      {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}.
    - The specified value of {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} is greater than or equal to the number of media
      descriptions included in the remote description.
    - The specified {{domxref("RTCIceCandidate.usernameFragment", "ufrag")}}
      doesn't match the `ufrag` field in any of the remote
      descriptions being considered.
    - One or more of the values in the {{domxref("RTCIceCandidate", "candidate")}} string are invalid or could not be parsed.
    - Attempting to add the candidate fails for any reason.

## Examples

This code snippet shows how to signal ICE candidates across an arbitrary signaling
channel.

```js
// This example assumes that the other peer is using a signaling channel as follows:
//
// pc.onicecandidate = (event) => {
//   if (event.candidate) {
//     signalingChannel.send(JSON.stringify({ice: event.candidate})); // "ice" is arbitrary
//   } else {
//     // All ICE candidates have been sent
//   }
// }

signalingChannel.onmessage = (receivedString) => {
  const message = JSON.parse(receivedString);
  if (message.ice) {
    // A typical value of ice here might look something like this:
    //
    // {candidate: "candidate:0 1 UDP 2122154243 192.0.2.43 53421 typ host", sdpMid: "0", …}
    //
    // Pass the whole thing to addIceCandidate:

    pc.addIceCandidate(message.ice).catch((e) => {
      console.log(`Failure during addIceCandidate(): ${e.name}`);
    });
  } else {
    // handle other things you might be signaling, like sdp
  }
};
```

The last candidate to be signaled this way by the remote peer will be a special
candidate denoting end-of-candidates. Out of interest, end-of-candidates may be
manually indicated as follows:

```js
pc.addIceCandidate({ candidate: "" });
```

However, in most cases you won't need to look for this explicitly, since the events
driving the {{domxref("RTCPeerConnection")}} will deal with it for you, sending the
appropriate events.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
