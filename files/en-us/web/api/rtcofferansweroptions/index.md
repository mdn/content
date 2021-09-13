---
title: RTCOfferAnswerOptions
slug: Web/API/RTCOfferAnswerOptions
tags:
  - Configuration
  - Dictionary
  - Options
  - RTCOfferAnswerOptions
  - Reference
  - Settings
  - WebRTC
  - WebRTC API
  - createAnswer
  - createOffer
browser-compat: api.RTCOfferAnswerOptions
---
{{APIRef("WebRTC")}}

The [WebRTC API's](/en-US/docs/Web/API/WebRTC_API) **`RTCOfferAnswerOptions`** dictionary is used to specify options that configure and control the process of creating WebRTC offers or answers.

It's used as the base type for the `options` parameter when calling {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} or {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} on an {{domxref("RTCPeerConnection")}}.

Each of `createOffer()` and `createAnswer()` use `RTCOfferAnswerOptions` as the base type for their `options` parameter's dictionary. `createOffer()` uses {{domxref("RTCOfferOptions")}} and `createAnswer()` uses {{domxref("RTCAnswerOptions")}}.

## Properties

- {{domxref("RTCOfferAnswerOptions.voiceActivityDetection", "voiceActivityDetection")}} {{optional_inline}}
  - : For configurations of systems and codecs that are able to detect when the user is speaking and toggle muting on and off automatically, this option enables and disables that behavior. The default value is `true`, enabling this functionality

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
