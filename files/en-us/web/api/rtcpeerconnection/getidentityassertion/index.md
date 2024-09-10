---
title: "RTCPeerConnection: getIdentityAssertion() method"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.getIdentityAssertion
---

{{APIRef("WebRTC")}}

The **`getIdentityAssertion()`** method of the {{domxref("RTCPeerConnection")}} interface initiates the gathering of an identity assertion.
This has an effect only if the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is not `"closed"`.

The method returns a JavaScript {{jsxref("Promise")}} which resolves to an identity assertion encoded as a string.

It is not expected for the application dealing with the `RTCPeerConnection`: this is automatically done; an explicit call only allows to anticipate the need.

## Syntax

```js-nolint
getIdentityAssertion()
```

_There is neither parameter nor return value for this method._

## Example

```js
const pc = new RTCPeerConnection();

pc.setIdentityProvider("developer.mozilla.org");
const assertion = await pc.getIdentityAssertion();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
