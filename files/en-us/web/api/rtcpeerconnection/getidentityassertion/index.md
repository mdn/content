---
title: RTCPeerConnection.getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
tags:
  - Method
  - RTCPeerConnection
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnection.getIdentityAssertion
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.getIdentityAssertion()`** method
initiates the gathering of an identity assertion. This has an effect only if the
{{domxref("RTCPeerConnection.signalingState", "signalingState")}} is not
`"closed"`.

The method returns a JavaScript {{jsxref("Promise")}} which resolves to an
identity assertion encoded as a {{domxref("DOMString")}}.

It is not expected for the application dealing with the `RTCPeerConnection`:
this is automatically done; an explicit call only allows to anticipate the need.

## Syntax

```js
pc.getIdentityAssertion();
```

_There is neither parameter nor return value for this method._

## Example

```js
var pc = new RTCPeerConnection();

pc.setIdentityProvider("developer.mozilla.org");
var assertion = await pc.getIdentityAssertion();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
