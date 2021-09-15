---
title: RTCDataChannel.protocol
slug: Web/API/RTCDataChannel/protocol
tags:
  - Property
  - Protocol
  - RTCDataChannel
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.RTCDataChannel.protocol
---
{{APIRef("WebRTC")}}

The read-only `RTCDataChannel` property
**`protocol`** returns a string containing the
name of the subprotocol in use. If no protocol was specified when the data channel was
created, then this property's value is the empty string (`""`).

> **Note:** The permitted values of this property are defined by the Web site or app using the
> data channel.

The ability for each channel to have a defined subprotocol lets your app, for example,
use JSON objects as messages on one channel while another channel is plaintext and
another is raw binary or even some other format.

## Syntax

```js
var subProtocol = aDataChannel.protocol;
```

### Value

A string identifying the app-defined subprotocol being used for exchanging data on the
channel. If none has been established, this is an empty string ("").

## Example

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel", {
           protocol: "json"
});

function handleChannelMessage(dataChannel, msg) {
  switch(dataChannel.protocol) {
    case "json":
      /* process JSON data */
      break;
    case "raw":
      /* process raw binary data */
      break;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
