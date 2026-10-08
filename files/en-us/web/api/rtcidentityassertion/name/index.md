---
title: "RTCIdentityAssertion: name property"
short-title: name
slug: Web/API/RTCIdentityAssertion/name
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCIdentityAssertion.name
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`name`** property of the {{domxref("RTCIdentityAssertion")}} interface indicates the verified peer identity. It is a string in an email address-like format (for example, `user@example.com`), as defined by {{RFC(5322)}}.

## Value

A string containing the verified peer identity in an {{RFC(5322)}} email address-like format (for example, `alice@identity.example.com`).

## Examples

### Logging the verified peer identity name

In this example, the {{domxref("RTCPeerConnection.peerIdentity")}} promise is awaited to obtain the identity assertion, and then the peer's verified identity name is logged.

```js
const pc = new RTCPeerConnection();

// …

async function logPeerName() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`Peer identity: ${identity.name}`);
  } catch (err) {
    console.error("Could not verify peer identity:", err);
  }
}

logPeerName();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIdentityAssertion.idp")}}
- {{domxref("RTCPeerConnection.peerIdentity")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
