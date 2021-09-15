---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
tags:
  - API
  - Experimental
  - Interface
  - RTCIdentityAssertion
  - Reference
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIdentityAssertion
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCIdentityAssertion`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represents the identity of the a remote peer of the current connection. If no peer has yet been set and verified this interface returns `null`. Once set it can't be changed.

## Properties

- {{domxref("RTCIdentityAssertion.idp")}}
  - : Indicates the provider of the identity assertion.
- {{domxref("RTCIdentityAssertion.name")}}
  - : Indicates the name of the identity assertion provider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
