---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
page-type: web-api-interface
status:
  - experimental
browser-compat: api.RTCIdentityAssertion
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCIdentityAssertion`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represents the identity of a remote peer of the current connection. If no peer has yet been set and verified, then this interface returns `null`. Once set it can't be changed.

## Instance properties

- {{domxref("RTCIdentityAssertion.idp")}} {{Experimental_Inline}}
  - : Indicates the provider of the identity assertion.
- {{domxref("RTCIdentityAssertion.name")}} {{Experimental_Inline}}
  - : Indicates the name of the identity assertion provider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
