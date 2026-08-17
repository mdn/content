---
title: "RTCIdentityAssertion: idp property"
short-title: idp
slug: Web/API/RTCIdentityAssertion/idp
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCIdentityAssertion.idp
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`idp`** property of the {{domxref("RTCIdentityAssertion")}} interface indicates the domain name of the {{Glossary("Identity provider", "identity provider")}} (IdP) that validated the identity assertion (a verified claim of the remote peer's identity).

## Value

A string containing the domain name of the identity provider that validated this identity.

## Examples

### Displaying the identity provider domain

In this example, the {{domxref("RTCPeerConnection.peerIdentity")}} promise resolves with an {{domxref("RTCIdentityAssertion")}} whose `idp` property is logged to the console.

```js
const pc = new RTCPeerConnection();

// …

async function getIdentityProvider() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`Identity provider: ${identity.idp}`);
  } catch (err) {
    console.error("Failed to get peer identity:", err);
  }
}

getIdentityProvider();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIdentityAssertion.name")}}
- {{domxref("RTCPeerConnection.peerIdentity")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
