---
title: "RTCPeerConnection: canTrickleIceCandidates property"
short-title: canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.canTrickleIceCandidates
---

{{APIRef("WebRTC")}}

The **`canTrickleIceCandidates`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns a boolean value which indicates whether or not the remote peer can accept [trickled ICE candidates](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice).

**ICE trickling** is the process of continuing to send candidates after the initial offer or answer has already been sent to the other peer.

This property is only set after having called {{domxref("RTCPeerConnection.setRemoteDescription()")}}. Ideally, your signaling protocol provides a way to detect trickling support, so that you don't need to rely on this property.
A WebRTC browser will always support trickle ICE. If trickling isn't supported, or you aren't able to tell, you can check for a falsy value for this property and then wait until the value of {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} changes to `"completed"` before creating and sending the initial offer.
That way, the offer contains all of the candidates.

## Value

A boolean value that is `true` if the remote peer can accept trickled ICE candidates and `false` if it cannot.
If no remote peer has been established, this value is `null`.

> [!NOTE]
> This property's value is determined once the local peer has called {{domxref("RTCPeerConnection.setRemoteDescription()")}};
> the provided description is used by the ICE agent to determine whether or not the remote peer supports trickled ICE candidates.

## Examples

```js
const pc = new RTCPeerConnection();

function waitToCompleteIceGathering(pc) {
  return new Promise((resolve) => {
    pc.addEventListener(
      "icegatheringstatechange",
      (e) =>
        e.target.iceGatheringState === "complete" &&
        resolve(pc.localDescription),
    );
  });
}

// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
async function newPeer(remoteOffer) {
  await pc.setRemoteDescription(remoteOffer);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  if (pc.canTrickleIceCandidates) return pc.localDescription;
  const answer = await waitToCompleteIceGathering(pc);
  sendAnswerToPeer(answer); //To peer via signaling channel
}
// Handle error with try/catch

pc.addEventListener(
  "icecandidate",
  (e) => pc.canTrickleIceCandidates && sendCandidateToPeer(e.candidate),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
