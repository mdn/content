---
title: RTCAnswerOptions
slug: Web/API/RTCAnswerOptions
tags:
  - API
  - Dictionary
  - RTCAnswerOptions
  - RTCPeerConnection
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - answer
  - createAnswer
  - rtc
browser-compat: api.RTCAnswerOptions
---
{{APIRef("WebRTC")}}

The **`RTCAnswerOptions`** dictionary is used to provide optional settings when creating an {{Glossary("SDP")}} answer using {{domxref("RTCPeerConnection.createOffer()")}} after receiving an offer from a remote peer.

The `createOffer()` method's `options` parameter is of this type.

## Properties

_This dictionary inherits properties from the {{domxref("RTCOfferAnswerOptions")}} dictionary, on which it's based._

> **Note:** At this time, `RTCAnswerOptions` does not have any additional properties defined beyond those included in {{domxref("RTCOfferAnswerOptions")}}. However, this is likely to change in the future, so the type has been defined in preparation for that eventuality.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
