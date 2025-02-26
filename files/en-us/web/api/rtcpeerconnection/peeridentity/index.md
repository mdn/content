---
title: "RTCPeerConnection: peerIdentity property"
short-title: peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.peerIdentity
---

{{APIRef("WebRTC")}}

The **`peerIdentity`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns a JavaScript {{jsxref("Promise")}} that resolves to an {{domxref("RTCIdentityAssertion")}} which contains a string identifying the remote peer.
Once this promise resolves successfully, the resulting identity is the **target peer identity** and cannot change for the duration of the connection.

## Value

A JavaScript {{jsxref("Promise")}} which resolves to an {{domxref("RTCIdentityAssertion")}} that describes the remote peer's identity.

If an error occurs while attempting to validate an incoming identity assertion (that is, the information describing a peer's identity), the promise is rejected.
If there isn't already a target peer identity, `peerIdentity` is set to a newly created promise and the process begins again, until the process succeeds or no further attempts to authenticate occur.

> [!NOTE]
> The promise returned by {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} cannot resolve until any target peer identity that's been set is validated.
> If the identity hasn't been validated yet, the promise returned by `setRemoteDescription()` will be rejected.
> If there's no target peer identity, `setRemoteDescription()` doesn't need to wait for validation to occur before it resolves.

## Examples

In this example, a function, `getIdentityAssertion()`, is created which asynchronously waits for the peer's identity to be verified, then returns the identity to the caller.
If an error occurs and the promise is rejected, this logs the error to the console and returns `null` to the caller.

```js
let pc = new RTCPeerConnection();

// …

async function getIdentityAssertion(pc) {
  try {
    const identity = await pc.peerIdentity;
    return identity;
  } catch (err) {
    console.log("Error identifying remote peer: ", err);
    return null;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
