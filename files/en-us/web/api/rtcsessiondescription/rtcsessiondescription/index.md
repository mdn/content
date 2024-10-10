---
title: "RTCSessionDescription: RTCSessionDescription() constructor"
short-title: RTCSessionDescription()
slug: Web/API/RTCSessionDescription/RTCSessionDescription
page-type: web-api-constructor
status:
  - deprecated
browser-compat: api.RTCSessionDescription.RTCSessionDescription
---

{{APIRef("WebRTC")}}{{deprecated_header}}

The **`RTCSessionDescription()`** constructor creates a new
{{domxref("RTCSessionDescription")}} with its properties initialized as described in the
specified object.

> [!NOTE]
> This constructor has been deprecated because
> {{domxref("RTCPeerConnection.setLocalDescription()")}} and other methods which take
> SDP as input now directly accept an object containing the {{domxref("RTCSessionDescription.type", "type")}} and {{domxref("RTCSessionDescription.sdp", "sdp")}} properties, so you don't have to instantiate an
> `RTCSessionDescription` yourself.

## Syntax

```js-nolint
new RTCSessionDescription(options)
```

### Values

- `options`

  - : An object providing the default values for the session description. It should contain the following properties:

    - `type`
      - : **Required.** A string which is used to set the `type` property of the new `RTCSessionDescription` object. Must be one of the valid {{domxref("RTCSessionDescription.type")}} values.
    - `sdp` {{optional_inline}}
      - : A string containing a {{Glossary("SDP")}} message describing the session. This value is an empty string (`""`) by default and may not be `null`.

## Example

This example uses the constructor to convert an SDP offer into an
`RTCSessionDescription` object.

> [!NOTE]
> This is no longer necessary, however;
> {{domxref("RTCPeerConnection.setLocalDescription()")}} and other methods which take
> SDP as input now directly accept plain objects, so you don't have to instantiate an
> `RTCSessionDescription` yourself.

```js
navigator.getUserMedia({ video: true }, (stream) => {
  pc.onaddstream({ stream });
  // Adding a local stream won't trigger the onaddstream callback
  pc.addStream(stream);

  pc.createOffer((offer) => {
    pc.setLocalDescription(
      new RTCSessionDescription(offer),
      () => {
        // send the offer to a server to be forwarded to the friend you're calling.
      },
      error,
    );
  }, error);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
