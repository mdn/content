---
title: RTCSessionDescription()
slug: Web/API/RTCSessionDescription/RTCSessionDescription
tags:
  - Constructor
  - Deprecated
  - Experimental
  - Media
  - RTCSessionDescription
  - Reference
  - SDP
  - WebRTC
browser-compat: api.RTCSessionDescription.RTCSessionDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}{{deprecated_header}}

The **`RTCSessionDescription()`** constructor creates a new
{{domxref("RTCSessionDescription")}} with its properties initialized as described in the
specified object.

> **Note:** This constructor has been deprecated because
> {{domxref("RTCPeerConnection.setLocalDescription()")}} and other methods which take
> SDP as input now directly accept an object conforming to the
> `RTCSessionDescriptionInit` dictionary, so you don't have to instantiate an
> `RTCSessionDescription` yourself.

## Syntax

```js
sessionDescription = new RTCSessionDescription(rtcSessionDescriptionInit);
```

### Values

- `rtcSessionDescriptionInit` {{optional_inline}}

  - : An object providing the default values for the session description; the object
    conforms to the `RTCSessionDescriptionInit` dictionary. That dictionary has
    the following properties:

    - `type`
      - : **Required.** A string which is a member of the
        `RTCSdpType` enum; it must have one of the following values:{{page("/en-US/docs/Web/API/RTCSessionDescription", "RTCSdpType")}}
    - `sdp`
      - : A string containing a {{Glossary("SDP")}} message describing the session. This
        value is an empty string (`""`) by default and may not be
        `null`.

## Example

This example uses the constructor to convert an SDP offer into an
`RTCSessionDescription` object.

> **Note:** This is no longer necessary, however;
> {{domxref("RTCPeerConnection.setLocalDescription()")}} and other methods which take
> SDP as input now directly accept an object conforming to the
> `RTCSessionDescriptionInit` dictionary, so you don't have to instantiate an
> `RTCSessionDescription` yourself.

```js
navigator.getUserMedia({video: true}, function(stream) {
  pc.onaddstream({stream: stream});
  // Adding a local stream won't trigger the onaddstream callback
  pc.addStream(stream);

  pc.createOffer(function(offer) {
    pc.setLocalDescription(new RTCSessionDescription(offer), function() {
      // send the offer to a server to be forwarded to the friend you're calling.
    }, error);
  }, error);
}
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
