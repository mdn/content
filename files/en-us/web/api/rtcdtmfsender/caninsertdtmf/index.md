---
title: "RTCDTMFSender: canInsertDTMF property"
short-title: canInsertDTMF
slug: Web/API/RTCDTMFSender/canInsertDTMF
page-type: web-api-instance-property
browser-compat: api.RTCDTMFSender.canInsertDTMF
---

{{APIRef("WebRTC")}}

The **`canInsertDTMF`** read-only property of the {{domxref("RTCDTMFSender")}} interface returns a boolean value which indicates whether the `RTCDTMFSender` is capable of sending DTMF tones over the {{domxref("RTCPeerConnection")}}.

## Value

A boolean value which is `true` if the `RTCDTMFSender` is capable of sending DTMF tones, or `false` if it is not.

## Examples

```js
if (sender.dtmf.canInsertDTMF) {
  const duration = 500;
  sender.dtmf.insertDTMF("1234", duration);
} else {
  console.log("DTMF function not available");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
- {{domxref("RTCDTMFSender.insertDTMF()")}}
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
