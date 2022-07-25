---
title: 'RTCDataChannel: bufferedamountlow event'
slug: Web/API/RTCDataChannel/bufferedamountlow_event
page-type: web-api-event
tags:
  - API
  - Buffer
  - Communication
  - Media
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - bufferedamountlow
  - data
  - events
  - Event
  - rtc
browser-compat: api.RTCDataChannel.bufferedamountlow_event
---
{{APIRef("WebRTC")}}

A **`bufferedamountlow`** event is sent to an {{domxref("RTCDataChannel")}} when the number of bytes currently in the outbound data transfer buffer falls below the threshold specified in {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}. `bufferedamountlow` events aren't sent if `bufferedAmountLowThreshold` is 0.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('bufferedamountlow', (event) => { });

onbufferedamountlow = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example sets up a handler for `bufferedamountlow` to request more data any time the data channel's buffer falls below the number of bytes specified by {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}, which we have set to 65536. In other words, we'll try to keep at least 64kB of data in the buffer, reading 64kB at a time from the source.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("SendFile");
let source = /* source data object */

dc.bufferedAmountLowThreshold = 65536;

pc.addEventListener("bufferedamountlow", (ev) => {
  if (source.position <= source.length) {
    dc.send(source.readFile(65536));
  }
}, false);
```

After creating the `RTCPeerConnection`, this calls {{domxref("RTCPeerConnection.createDataChannel()")}} to create the data channel. Then a listener is created for `bufferedamountlow` to refill the incoming data buffer any time its contents fall below 65536 bytes.

You can also set up a listener for `bufferedamountlow` using its event handler property, {{domxref("RTCDataChannel.bufferedamountlow_event", "onbufferedamountlow")}}:

```js
pc.onbufferedamountlow = (ev) => {
  if (source.position <= source.length) {
    dc.send(source.readFile(65536));
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}}
