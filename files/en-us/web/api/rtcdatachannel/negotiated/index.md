---
title: "RTCDataChannel: negotiated property"
short-title: negotiated
slug: Web/API/RTCDataChannel/negotiated
page-type: web-api-instance-property
browser-compat: api.RTCDataChannel.negotiated
---

{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`negotiated`** indicates whether the
{{domxref("RTCDataChannel")}}'s connection was negotiated by the Web app
(`true`) or by the WebRTC layer (`false`). **The
default is `false`.**

See [Creating a data channel](/en-US/docs/Web/API/WebRTC_API/Using_data_channels#creating_a_data_channel) for further information about this property.

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
