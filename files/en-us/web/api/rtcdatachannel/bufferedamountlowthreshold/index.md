---
title: RTCDataChannel.bufferedAmountLowThreshold
slug: Web/API/RTCDataChannel/bufferedAmountLowThreshold
page-type: web-api-instance-property
tags:
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - bufferedAmountLowThreshold
browser-compat: api.RTCDataChannel.bufferedAmountLowThreshold
---
{{APIRef("WebRTC")}}

The `RTCDataChannel` property
**`bufferedAmountLowThreshold`** is used to specify the number
of bytes of buffered outgoing data that is considered "low." The default value is
0\. When the number of buffered outgoing bytes, as indicated by the
{{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}} property, falls to or
below this value, a {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event is fired. This event may be
used, for example, to implement code which queues more messages to be sent whenever
there's room to buffer them. Listeners may be added with
{{domxref("RTCDataChannel.bufferedamountlow_event", "onbufferedamountlow")}} or
{{domxref("EventTarget.addEventListener", "addEventListener()")}}.

The user agent may implement the process of actually sending data in any way it
chooses; this may be done periodically during the event loop or truly asynchronously. As
messages are actually sent, this value is reduced accordingly.

> **Note:** `bufferedamountlow` events are not fired after the data channel is closed.

## Value

The number of queued outgoing data bytes below which the buffer is considered to be
"low."

## Example

In this snippet of code, `bufferedAmountLowThreshold` is set to 64kB, and a
handler for the {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event is established by setting the
{{domxref("RTCDataChannel.bufferedamountlow_event", "onbufferedamountlow")}} property to a function which should
send more data into the buffer by calling {{domxref("RTCDataChannel.send", "send()")}}.

```js
const dc = peerConnection.createDataChannel("File Transfer");
dc.bufferedAmountLowThreshold = 65535;

dc.onbufferedamountlow = () => {
  /* use send() to queue more data to be sent */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC data channels](/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.bufferedAmount")}}
- {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event
