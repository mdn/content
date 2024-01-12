---
title: "RTCTransformEvent: transformer property"
short-title: transformer
slug: Web/API/RTCTransformEvent/transformer
page-type: web-api-instance-property
browser-compat: api.RTCTransformEvent.transformer
---

{{APIRef("WebRTC")}}

The read-only **`transformer`** property of the {{domxref("RTCTransformEvent")}} interface returns the {{domxref("RTCRtpScriptTransformer")}} associated with the event.

The property exposes the WebRTC sender or receiver pipeline as a readable and writable stream of encoded media frames, which a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) can insert itself into in order to modify frames.

## Value

A {{domxref("RTCRtpScriptTransformer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
