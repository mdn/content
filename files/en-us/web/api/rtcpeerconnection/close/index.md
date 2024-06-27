---
title: "RTCPeerConnection: close() method"
short-title: close()
slug: Web/API/RTCPeerConnection/close
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.close
---

{{APIRef("WebRTC")}}

The **`close()`** method of the {{domxref("RTCPeerConnection")}} interface closes the current peer connection.

## Syntax

```js-nolint
close()
```

_This method has no parameters, and returns nothing._

Calling this method terminates the RTCPeerConnection's ICE agent, ending any ongoing ICE processing and any active streams.
This also releases any resources in use by the ICE agent, including TURN permissions.
All {{domxref("RTCRtpSender")}} objects are considered to be stopped once this returns (they may still be in the process of stopping, but for all intents and purposes, they're stopped).

Once this method returns, the signaling state as returned by {{domxref("RTCPeerConnection.signalingState")}} is `closed`.

Make sure that you `delete` all references to the previous {{domxref("RTCPeerConnection")}} before attempting to create a new one that connects to the same remote peer, as not doing so might result in some errors depending on the browser.

## Example

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
  pc.close(); // We decided to close after the first received message
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.signalingState")}}
