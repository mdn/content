---
title: "RTCPeerConnectionIceEvent: url property"
short-title: url
slug: Web/API/RTCPeerConnectionIceEvent/url
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnectionIceEvent.url
---

{{APIRef("WebRTC")}}

The read-only **`url`** property of the {{domxref("RTCPeerConnectionIceEvent")}} interface returns the URL of the {{Glossary("STUN")}} or {{Glossary("TURN")}} server used to gather the ICE candidate that caused the event. If the candidate was not gathered from a {{Glossary("STUN")}} or {{Glossary("TURN")}} server, the value is `null`.

> [!NOTE]
> This property is considered deprecated by the specification in favor of the `url` property on the {{domxref("RTCIceCandidate")}} interface itself.

## Value

A string containing the URL of the {{Glossary("STUN")}} or {{Glossary("TURN")}} server used to gather this candidate, or `null` if the candidate was not gathered from a server (for example, a local host candidate).

## Examples

### Logging the ICE server URL

```js
pc.onicecandidate = (event) => {
  if (event.candidate) {
    console.log(`Candidate gathered from: ${event.url}`);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
- {{domxref("RTCPeerConnectionIceEvent.candidate")}}
- {{domxref("RTCPeerConnection")}}
