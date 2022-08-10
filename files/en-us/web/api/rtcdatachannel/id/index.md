---
title: RTCDataChannel.id
slug: Web/API/RTCDataChannel/id
page-type: web-api-instance-property
tags:
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - id
browser-compat: api.RTCDataChannel.id
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`id`** returns an ID number (between 0 and 65,534) which
uniquely identifies the {{domxref("RTCDataChannel")}}. This ID is set at the
time the data channel is created, either by the user agent (if
{{domxref("RTCDataChannel.negotiated")}} is `false`) or by the site or app
script (if `negotiated` is `true`).

Each {{domxref("RTCPeerConnection")}} can therefore have up to a theoretical maximum of
65,534 data channels on it, although the actual maximum may vary from browser to
browser.

## Value

An `unsigned short` value (that is, an integer between 0 and 65,535) which
uniquely identifies the data channel.

While the {{domxref("RTCDataChannel.label", "label")}} property doesn't have to be
unique, this ID number is guaranteed to be unique among all data channels. Additionally,
known implementations of WebRTC use the same ID on both peers. A unique ID makes it
easier for your code to do its own out-of-band data channel-related signaling.

This can be also useful for logging and debugging purposes.

## Example

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

console.log(`Channel id: ${dc.id}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
