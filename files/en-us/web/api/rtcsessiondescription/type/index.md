---
title: RTCSessionDescription.type
slug: Web/API/RTCSessionDescription/type
tags:
  - Experimental
  - Property
  - RTCSessionDescription
  - Reference
  - SDP
  - Type
  - WebRTC
browser-compat: api.RTCSessionDescription.type
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The property **`RTCSessionDescription.type`** is a read-only
value of type `RTCSdpType` which describes the description's type.

## Syntax

```js
var value = sessionDescription.type;
sessionDescription.type = value;
```

### Value

The possible values are defined by an enum of type RTCSdpType.

The allowed values are those of an enum of type `RTCSdpType`:

- `"offer"`, the description is the initial proposal in an offer/answer
  exchange.
- `"answer"`, the description is the definitive choice in an offer/answer
  exchange.
- `"pranswer"`, the description is a provisional answer and may be changed
  when the definitive choice will be given.
- "`rollback`", the description rolls back to offer/answer state to the
  last stable state.

## Example

```js
// The remote description has been set previously on pc, a RTCPeerconnection

alert(pc.remoteDescription.type);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
