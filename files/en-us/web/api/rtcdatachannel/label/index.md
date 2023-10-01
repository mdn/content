---
title: "RTCDataChannel: label property"
short-title: label
slug: Web/API/RTCDataChannel/label
page-type: web-api-instance-property
browser-compat: api.RTCDataChannel.label
---

{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property **`label`**
returns a string containing a name describing the data channel. These
labels are not required to be unique.

You may use the label as you wish; you could use it to identify all the channels that
are being used for the same purpose, by giving them all the same name. Or you could give
each channel a unique label for tracking purposes. It's entirely up to the design
decisions made when building your site or app.

A unique ID can be found in the {{domxref("RTCDataChannel.id", "id")}} property.

> **Note:** A data channel's label is set when the channel is created by calling
> {{domxref("RTCPeerConnection.createDataChannel()")}}. It cannot be changed after that.

## Value

A string identifier assigned by the website or app when the data channel was created,
as specified when {{domxref("RTCPeerConnection.createDataChannel()")}} was called to
create the channel.

## Example

This sample creates a data channel on an {{domxref("RTCPeerConnection")}}, then, some
time later, sets the content of a UI element to display the channel's name.

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

// …

document.getElementById(
  "channel-name",
).innerHTML = `<span class='channelName'>${dc.label}</span>`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.id")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
