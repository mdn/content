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
  - : This constructor returns a new `RTCSessionDescription`. The parameter is a [`RTCSessionDescriptionInit`](#rtcsessiondescriptioninit) dictionary containing the values to assign the two properties.
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

## RTCSessionDescriptionInit

`RTCSessionDescriptionInit` is a dictionary that holds same properties to `RTCSessionDescription`. It's used as an argument for the {{domxref("RTCPeerConnection.setLocalDescription")}}, and {{domxref("RTCPeerConnection.setRemoteDescription")}} methods, and a return value from the {{domxref("RTCPeerConnection.createOffer")}}, and {{domxref("RTCPeerConnection.createAnswer")}} methods.

The `RTCSessionDescriptionInit` dictionary has the following properties:

- `type` (required): A string indicating the type of the session description.
- `sdp`: A string containing the SDP describing the session. If sdp is not provided, it defaults to an empty string. If `type` is `"rollback"`, `sdp` must be null or an empty string.

For `setLocalDescription`, Web Specification uses `RTCLocalSessionDescriptionInit` dictionary, which is a subset of `RTCSessionDescriptionInit`. It has the same properties, but the `type` property is optional (explained in more detail in the [Implicit description in RTCPeerConnection.setLocalDescription()](/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription#implicit_description)).

For using in `setLocalDescription` and `setRemoteDescription` methods, creating an `RTCSessionDescription` also works, but it's not necessary. Some older examples may use this method, but such usage has no advantage over passing a dictionary directly to the method.

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.type && message.sdp) {
    // This line is changed not to use RTCSessionDescription constructor
    pc.setRemoteDescription(message).then(() => {
      // if we received an offer, we need to answer
      if (pc.remoteDescription.type === "offer") {
        pc.createAnswer(localDescCreated, logError);
      }
    }, logError);
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
