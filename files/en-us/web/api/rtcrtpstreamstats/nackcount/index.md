---
title: "RTCRtpStreamStats: nackCount property"
short-title: nackCount
slug: Web/API/RTCRtpStreamStats/nackCount
page-type: web-api-instance-property
browser-compat: api.RTCRtpStreamStats.nackCount
---

{{APIRef("WebRTC")}}

The **`nackCount`** property of the
{{domxref("RTCRtpStreamStats")}} dictionary is a numeric value indicating the number
of times the receiver sent a **NACK packet** to the sender.

A NACK
(Negative ACKnowledgement, also called "Generic NACK") packet tells the sender that one
or more of the {{Glossary("RTP")}} packets it sent were lost in transport.

## Value

An integer value indicating how many times the receiver sent a NACK packet to the
sender after detecting that one or more packets were lost during transport.

> **Note:** This value is only available on the receiver.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
