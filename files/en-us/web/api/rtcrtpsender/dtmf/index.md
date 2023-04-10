---
title: "RTCRtpSender: dtmf property"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
page-type: web-api-instance-property
browser-compat: api.RTCRtpSender.dtmf
---

{{APIRef("WebRTC")}}

The read-only **`dtmf`** property on the
**{{domxref("RTCRtpSender")}}** interface returns a
{{domxref("RTCDTMFSender")}} object which can be used to send {{Glossary("DTMF")}} tones
over the {{domxref("RTCPeerConnection")}}. See [Using DTMF](/en-US/docs/Web/API/WebRTC_API/Using_DTMF) for details on how to
make use of the returned `RTCDTMFSender` object.

## Value

An {{domxref("RTCDTMFSender")}} which can be used to send DTMF over the RTP session, or
`null` if the track being carried by the RTP session or the
{{domxref("RTCPeerConnection")}} as a whole doesn't support DTMF.

> **Note:** Only audio tracks can support DTMF, and typically only one audio track per
> `RTCPeerConnection` will have an associated {{domxref("RTCDTMFSender")}}

## Example

tbd

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
