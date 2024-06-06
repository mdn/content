---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
page-type: web-api-interface
browser-compat: api.RTCSessionDescription
---

{{APIRef("WebRTC")}}

The **`RTCSessionDescription`** interface describes one end of a connection—or potential connection—and how it's configured. Each `RTCSessionDescription` consists of a description {{domxref("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.

The process of negotiating a connection between two peers involves exchanging `RTCSessionDescription` objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## Instance properties

_The `RTCSessionDescription` interface doesn't inherit any properties._

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : An enum describing the session description's type.
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : A string containing the {{Glossary("SDP")}} describing the session.

## Instance methods

_The `RTCSessionDescription` doesn't inherit any methods._

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : This constructor returns a new `RTCSessionDescription`. The parameter is a {{domxref("RTCSessionDescriptionInit")}} dictionary containing the values to assign the two properties.
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
      logError,
    );
  } else {
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      () => {},
      logError,
    );
  }
};
```

## RTCSessionDescription, RTCSessionDescriptionInit, and RTCLocalSessionDescriptionInit

There are other similar interfaces that are used to provide the SDP values for `RTCSessionDescription` objects. These are:
- {{domxref("RTCSessionDescriptionInit")}}
- {{domxref("RTCLocalSessionDescriptionInit")}}

These interfaces are used in several methods of the {{domxref("RTCPeerConnection")}} interface utilize these interfaces, including {{domxref("RTCPeerConnection.createOffer")}}, {{domxref("RTCPeerConnection.createAnswer")}}, {{domxref("RTCPeerConnection.setLocalDescription")}}, and {{domxref("RTCPeerConnection.setRemoteDescription")}}.

In essence, `RTCSessionDescriptionInit` and `RTCLocalSessionDescriptionInit` are defined as dictionaries, enabling users to provide necessary values without creating a full `RTCSessionDescription` object. Also, `RTCPeerConnection.setLocalDescription()` accepts `RTCLocalSessionDescriptionInit` as an argument, allowing users to omit this argument altogether. This eliminates the need for separate calls to `RTCPeerConnection.createOffer()` and `RTCPeerConnection.setLocalDescription()`. (For more information, see [Implicit description in RTCPeerConnection.setLocalDescription()](/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription#implicit_description)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}
- {{domxref("RTCSessionDescriptionInit")}}
- {{domxref("RTCLocalSessionDescriptionInit")}}
