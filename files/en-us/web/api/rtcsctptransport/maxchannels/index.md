---
title: "RTCSctpTransport: maxChannels property"
short-title: maxChannels
slug: Web/API/RTCSctpTransport/maxChannels
page-type: web-api-instance-property
browser-compat: api.RTCSctpTransport.maxChannels
---

{{APIRef("WebRTC")}}

The **`maxChannels`** read-only property of the {{DOMxRef("RTCSctpTransport")}} interface indicates the maximum number of {{DOMxRef("RTCDataChannel")}} objects that can be opened simultaneously.

## Value

An integer value indicating the maximum number of {{DOMxRef("RTCDataChannel")}} objects that can be opened simultaneously, or `null` before the SCTP transport goes into the "connected" [state](/en-US/docs/Web/API/RTCSctpTransport/state).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
