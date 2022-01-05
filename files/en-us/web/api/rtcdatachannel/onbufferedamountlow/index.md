---
title: RTCDataChannel.onbufferedamountlow
slug: Web/API/RTCDataChannel/onbufferedamountlow
tags:
  - Event Handler
  - Networking
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - buffering
  - onbufferedamountlow
browser-compat: api.RTCDataChannel.onbufferedamountlow
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.onbufferedamountlow`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function the browser calls when the
{{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event is sent to the {{domxref("RTCDataChannel")}}. This
event, which is represented by a simple {{domxref("Event")}} object, is sent when the
amount of data buffered to be sent falls to or below the threshold specified by the
channel's {{domxref("RTCDataChannel.bufferedAmountLowThreshold",
  "bufferedAmountLowThreshold")}}.

See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels",
  "Buffering")}} to learn more about how to work with the data channel buffer.

## Syntax

```js
RTCDataChannel.onbufferedamountlow = function;
```

### Value

A function which the browser will call to handle the {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
event. This function receives as its only input parameter a simple {{domxref("Event")}}
object representing the event which has occurred.

## Example

This example responds to the {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event by fetching up to
64kB of a file represented by an object `source` and calling
{{domxref("RTCDataChannel.send()")}} to queue up the retrieved data for sending on the
data channel.

    pc = new RTCPeerConnection();
    dc = pc.createDataChannel("SendFile");

    /* ... */

    dc.onbufferedamountlow = function() {
      if (source.position <= source.length) {
        dc.send(source.readFile(65536));
      }
    }

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
