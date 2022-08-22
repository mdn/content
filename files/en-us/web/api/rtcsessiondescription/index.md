---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
page-type: web-api-interface
tags:
  - API
  - Audio
  - Interface
  - Media
  - Reference
  - Video
  - Web
  - WebRTC
browser-compat: api.RTCSessionDescription
---
{{APIRef("WebRTC")}}

The **`RTCSessionDescription`** interface describes one end of a connection—or potential connection—and how it's configured. Each `RTCSessionDescription` consists of a description {{domxref("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.

The process of negotiating a connection between two peers involves exchanging `RTCSessionDescription` objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## Properties

_The `RTCSessionDescription` interface doesn't inherit any properties._

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : An enum describing the session description's type.
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : A string containing the {{Glossary("SDP")}} describing the session.

## Methods

_The `RTCSessionDescription` doesn't inherit any methods._

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : This constructor returns a new `RTCSessionDescription`. The parameter is a `RTCSessionDescriptionInit` dictionary containing the values to assign the two properties.
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : Returns a {{Glossary("JSON")}} description of the object. The values of both properties, {{domxref("RTCSessionDescription.type", "type")}} and {{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.

## Example

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.sdp) {
    pc.setRemoteDescription(
      new RTCSessionDescription(message),
      () => {
        // if we received an offer, we need to answer
        if (pc.remoteDescription.type === "offer") {
          pc.createAnswer(localDescCreated, logError);
        }
      },
      logError
    );
  } else {
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      () => {},
      logError
    );
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}
