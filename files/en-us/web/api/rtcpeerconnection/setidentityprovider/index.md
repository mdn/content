---
title: RTCPeerConnection.setIdentityProvider()
slug: Web/API/RTCPeerConnection/setIdentityProvider
tags:
  - Method
  - RTCPeerConnection
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnection.setIdentityProvider
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.setIdentityProvider()`** method sets
the Identity Provider (IdP) to the triplet given in parameter: its name, the protocol
used to communicate with it (optional) and an optional username. The IdP will be used
only when an assertion is needed.

If the {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is set to
`"closed"`, an `InvalidStateError` is raised.

## Syntax

```js
pc.setIdentityProvider(domainname [, protocol] [, username]);
```

_There is no return value for this method._

### Parameters

- _domainname_
  - : Is a {{domxref("DOMString")}} is the domain name where the IdP is.
- _protocol_ {{optional_Inline}}
  - : Is a {{domxref("DOMString")}} representing the protocol used to communicate with the
    IdP. It defaults to `"default"` and is used to determine the URL where the
    IdP is listening.
- _username_ {{optional_Inline}}
  - : Is a {{domxref("DOMString")}} representing the username associated with the IdP.

## Example

```js
var pc = new RTCPeerConnection();

pc.setIdentityAssertion("developer.mozilla.org");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
