---
title: RTCDataChannel.negotiated
slug: Web/API/RTCDataChannel/negotiated
page-type: web-api-instance-property
tags:
  - Networking
  - Property
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
  - WebRTC API
  - data
  - datachannel
  - negotiated
browser-compat: api.RTCDataChannel.negotiated
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`negotiated`** indicates whether the
{{domxref("RTCDataChannel")}}'s connection was negotiated by the Web app
(`true`) or by the WebRTC layer (`false`). **The
default is `false`.**

See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels", "Creating a data channel")}} for further information about this property.

## Value

`true` if the {{domxref("RTCDataChannel")}}'s connection was negotiated by
the Web app itself; `false` if the negotiation was handled by the WebRTC
layer. The default is `false`.

## Example

The code snippet below checks the value of `negotiated`; if it's
`true`, a function called `shutdownRemoteChannel()` is called
with the channel's {{domxref("RTCDataChannel.id", "id")}}; presumably this would be
implemented to transmit a shutdown signal to the remote peer prior to terminating the
connection.

```js
if (dataChannel.negotiated) {
  shutdownRemoteChannel(dataChannel.id);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
