---
title: "RTCSctpTransport: maxMessageSize property"
short-title: maxMessageSize
slug: Web/API/RTCSctpTransport/maxMessageSize
page-type: web-api-instance-property
browser-compat: api.RTCSctpTransport.maxMessageSize
---

{{APIRef("WebRTC")}}

The **`maxMessageSize`** read-only property of the {{DOMxRef("RTCSctpTransport")}} interface indicates the maximum size of a message that can be sent using the {{DOMxRef("RTCDataChannel.send()")}} method.

## Value

An integer value giving the maximum size, in bytes, of a message which can be sent using the {{DOMxRef("RTCDataChannel.send()")}} method.

## Examples

This example shows how you might split up a string into small enough parts to send based on maximum message size.

```js
// Function splits strings to a specified size and returns array.
function splitStringToMax(str, maxLength) {
  const result = [];
  let i = 0;
  while (i < str.length) {
    result.push(str.substring(i, i + maxLength));
    i += maxLength;
  }
  return result;
}

const peerConnection = new RTCPeerConnection(options);
const channel = peerConnection.createDataChannel("chat");
channel.onopen = (event) => {
  const maximumMessageSize = peerConnection.sctp.maxMessageSize;
  const textToSend = "This is my possibly overly long string!";
  splitStringToMax(textToSend, maximumMessageSize).forEach((elem) => {
    channel.send(elem);
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("RTCSctpTransport")}}
- [Understanding message size limits](/en-US/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) section of [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
