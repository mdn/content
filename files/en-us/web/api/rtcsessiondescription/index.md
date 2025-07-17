---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
page-type: web-api-interface
browser-compat: api.RTCSessionDescription
---

{{APIRef("WebRTC")}}

The **`RTCSessionDescription`** interface describes one end of a connection—or potential connection—and how it's configured. Each `RTCSessionDescription` consists of a description {{domxref("RTCSessionDescription.type", "type")}} indicating which part of the offer/answer negotiation process it describes and of the {{Glossary("SDP")}} descriptor of the session.

The process of negotiating a connection between two peers involves exchanging `RTCSessionDescription` objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## Constructor

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : Creates a new `RTCSessionDescription` by specifying the `type` and `sdp`. All methods that accept `RTCSessionDescription` objects also accept objects with the same properties, so you can use a plain object instead of creating an `RTCSessionDescription` instance.

## Instance properties

_The `RTCSessionDescription` interface doesn't inherit any properties._

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : An enum describing the session description's type.
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : A string containing the {{Glossary("SDP")}} describing the session.

## Instance methods

_The `RTCSessionDescription` doesn't inherit any methods._

- {{domxref("RTCSessionDescription.toJSON()")}}
  - : Returns a {{Glossary("JSON")}} description of the object. The values of both properties, {{domxref("RTCSessionDescription.type", "type")}} and {{domxref("RTCSessionDescription.sdp", "sdp")}}, are contained in the generated JSON.

## Example

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.type && message.sdp) {
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription()")}}
