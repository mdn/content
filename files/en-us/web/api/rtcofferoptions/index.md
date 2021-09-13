---
title: RTCOfferOptions
slug: Web/API/RTCOfferOptions
tags:
  - Dictionary
  - Media
  - Offer
  - RTCOfferOptions
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCOfferOptions
---
{{APIRef("WebRTC")}}

The **`RTCOfferOptions`** dictionary is used to provide optional settings when creating an {{domxref("RTCPeerConnection")}} offer with the {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} method.

## Properties

_This dictionary also inherits properties from the {{domxref("RTCOfferAnswerOptions")}} dictionary, on which it's based._

- {{domxref("RTCOfferOptions.iceRestart", "iceRestart")}} {{optional_inline}}
  - : A Boolean which, when set to `true`, tells `createOffer()` to generate and use new values for the identifying properties of the SDP it creates, resulting in a request that triggers renegotiation of the ICE connection. This is useful if network conditions have changed in a way that make the current configuration untenable or impractical, for instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
