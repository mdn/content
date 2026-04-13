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
  - : Indicates the domain name of the {{Glossary("Identity provider", "identity provider")}} (IdP) that validated the identity.
- {{domxref("RTCIdentityAssertion.name")}} {{Experimental_Inline}}
  - : Indicates the verified peer identity as a string in an email address-like format.

## Examples

### Accessing the remote peer's identity

In this example, a function asynchronously waits for the remote peer's identity to be verified via {{domxref("RTCPeerConnection.peerIdentity")}}, then logs the {{Glossary("Identity provider", "identity provider")}} domain and the peer's identity name.

```js
const pc = new RTCPeerConnection();

// …

async function logPeerIdentity() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`IdP domain: ${identity.idp}`);
    console.log(`Peer name: ${identity.name}`);
  } catch (err) {
    console.error("Could not verify peer identity:", err);
  }
}

logPeerIdentity();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.peerIdentity")}}
- {{domxref("RTCPeerConnection.getIdentityAssertion()")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
