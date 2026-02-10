---
title: "RTCDataChannel: priority property"
short-title: priority
slug: Web/API/RTCDataChannel/priority
page-type: web-api-instance-property
browser-compat: api.RTCDataChannel.priority
---

{{APIRef("WebRTC")}}

The read-only **`priority`** property of the {{domxref("RTCDataChannel")}} interface returns a string indicating the priority of the data channel. The priority is assigned by the user agent at channel creation time based on the `priority` option in the `dataChannelDict` parameter passed to {{domxref("RTCPeerConnection.createDataChannel()")}}, or from the remote peer for incoming data channels.

## Value

A string indicating the priority of the data channel. Possible values are, in order from lowest to highest priority:

- `"very-low"`
  - : The data channel has a very low priority.
- `"low"`
  - : The data channel has a low priority. This is the default value.
- `"medium"`
  - : The data channel has a medium priority.
- `"high"`
  - : The data channel has a high priority.

## Examples

### Checking the priority of a data channel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel", { priority: "high" });

console.log(dc.priority); // "high"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
