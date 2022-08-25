---
title: RTCDataChannel.maxRetransmits
slug: Web/API/RTCDataChannel/maxRetransmits
page-type: web-api-instance-property
tags:
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - maxRetransmits
browser-compat: api.RTCDataChannel.maxRetransmits
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`maxRetransmits`** returns the maximum number of times the
browser should try to retransmit a message before giving up, as set when the data
channel was created, or `null`, which indicates that there is no
maximum. This can only be set when the {{domxref("RTCDataChannel")}} is created
by calling {{domxref("RTCPeerConnection.createDataChannel()")}}, using the
`maxRetransmits` field in the specified `options`.

## Value

The maximum number of times the browser will try to retransmit a message before giving
up, or `null` if not set when
{{domxref("RTCPeerConnection.createDataChannel()")}} was called. The default is
`null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.maxPacketLifetime")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
