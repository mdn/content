---
title: "RTCSessionDescription: type property"
short-title: type
slug: Web/API/RTCSessionDescription/type
page-type: web-api-instance-property
browser-compat: api.RTCSessionDescription.type
---

{{APIRef("WebRTC")}}

The property **`RTCSessionDescription.type`** is a read-only
string value which describes the description's type.

## Syntax

```js-nolint
const value = sessionDescription.type
sessionDescription.type = value
```

### Value

The possible values are:

- `"answer"`
  - : The SDP contained in the {{domxref("RTCSessionDescription.sdp", "sdp")}} property is the definitive choice in the exchange. In other words, this session description describes the agreed-upon configuration, and is being sent to finalize negotiation.
- `"offer"`
  - : The session description object describes the initial proposal in an offer/answer exchange. The session negotiation process begins with an offer being sent from the caller to the callee.
- `"pranswer"`
  - : The session description object describes a provisional answer; that is, a response to a previous offer that is not the final answer. It is usually employed by legacy hardware.
- `"rollback"`
  - : This special type with an empty session description is used to roll back to the previous stable state.

## Example

```js
// The remote description has been set previously on pc, a RTCPeerConnection

alert(pc.remoteDescription.type);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
