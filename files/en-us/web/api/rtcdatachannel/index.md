---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
tags:
  - API
  - Communication
  - Data Transfer
  - Experimental
  - Interface
  - Media
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
browser-compat: api.RTCDataChannel
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel`** interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data. Every data channel is associated with an {{DOMxRef("RTCPeerConnection")}}, and each peer connection can have up to a theoretical maximum of 65,534 data channels (the actual limit may vary from browser to browser).

To create a data channel and ask a remote peer to join you, call the {{DOMxRef("RTCPeerConnection")}}'s {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}} method. The peer being invited to exchange data receives a {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event (which has type {{DOMxRef("RTCDataChannelEvent")}}) to let it know the data channel has been added to the connection.

{{InheritanceDiagram}}

## Properties

_Also inherits properties from {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDataChannel.binaryType", "binaryType")}}
  - : Is a string specifying the type of object
    that should be used to represent binary data received on the `RTCDataChannel`.
    Values are the same as allowed on the {{DOMxRef("WebSocket.binaryType")}} property:
    `blob` if {{DOMxRef("Blob")}} objects are being used,
    or `arraybuffer` if {{jsxref("ArrayBuffer")}} objects are being used.
    The default is `blob`.
- {{DOMxRef("RTCDataChannel.bufferedAmount", "bufferedAmount")}} {{ReadOnlyInline}}
  - : Returns the number of bytes of data
    currently queued to be sent over the data channel.
- {{DOMxRef("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}
  - : Specifies the number of bytes of buffered outgoing data that is considered "low".
    The default value is 0.
- {{DOMxRef("RTCDataChannel.id", "id")}} {{ReadOnlyInline}}
  - : Returns an ID number (between 0 and 65,534)
    which uniquely identifies the `RTCDataChannel`.
- {{DOMxRef("RTCDataChannel.label", "label")}} {{ReadOnlyInline}}
  - : Returns a string that contains a name describing the data channel.
    These labels are not required to be unique.
- {{DOMxRef("RTCDataChannel.maxPacketLifeTime", "maxPacketLifeTime")}} {{ReadOnlyInline}}
  - : Returns the amount of time,
    in milliseconds,
    the browser is allowed to take to attempt to transmit a message,
    as set when the data channel was created,
    or `null`.
- {{DOMxRef("RTCDataChannel.maxRetransmits", "maxRetransmits")}} {{ReadOnlyInline}}
  - : Returns the maximum number of times
    the browser should try to retransmit a message before giving up,
    as set when the data channel was created,
    or `null`, which indicates that there is no maximum.
- {{DOMxRef("RTCDataChannel.negotiated", "negotiated")}} {{ReadOnlyInline}}
  - : Indicates
    whether the `RTCDataChannel`'s connection was negotiated by the Web app
    (`true`)
    or by the WebRTC layer (`false`).
    The default is `false`.
- {{DOMxRef("RTCDataChannel.ordered", "ordered")}} {{ReadOnlyInline}}
  - : Indicates whether or not the data channel guarantees in-order delivery of messages;
    the default is `true`, which indicates that the data channel is indeed ordered.
- {{DOMxRef("RTCDataChannel.protocol", "protocol")}} {{ReadOnlyInline}}
  - : Returns a string containing the name of the subprotocol in use.
    If no protocol was specified
    when the data channel was created,
    then this property's value is the empty string (`""`).
- {{DOMxRef("RTCDataChannel.readyState", "readyState")}} {{ReadOnlyInline}}
  - : Returns a string
    which indicates the state of the data channel's underlying data connection.
    It can have on of the following values:
    `connecting`, `open`, `closing`, or `closed`.

### Event handlers

_Also inherits event handlers from {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDataChannel.onbufferedamountlow", "onbufferedamountlow")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function the browser calls
    when the{{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event is sent to the data channel.
- {{DOMxRef("RTCDataChannel.onclose", "onclose")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function to be called by the browser
    when the {{DOMxRef("RTCDataChannel.close_event", "close")}} event is received by the data channel.
- {{DOMxRef("RTCDataChannel.onclosing", "onclosing")}} {{Experimental_inline}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function to be called by the browser
    when the {{DOMxRef("RTCDataChannel.closing_event", "closing")}} event is received by the data channel.
- {{DOMxRef("RTCDataChannel.onerror", "onerror")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function to be called
    when the {{DOMxRef("RTCDataChannel.error_event", "error")}} event is received.
- {{DOMxRef("RTCDataChannel.onmessage", "onmessage")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function to be called
    when the {{DOMxRef("RTCDataChannel.message_event", "message")}} event is fired on the channel.
- {{DOMxRef("RTCDataChannel.onopen", "onopen")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers)
    which specifies a function to be called when the {{DOMxRef("RTCDataChannel.open_event", "open")}} event is fired on the

### Obsolete properties

- {{DOMxRef("RTCDataChannel.reliable", "reliable")}} {{ReadOnlyInline}} {{Obsolete_Inline}}
  - : Indicates whether or not the data channel is _reliable_.
- {{DOMxRef("RTCDataChannel.stream", "stream")}} {{ReadOnlyInline}} {{Obsolete_Inline}}
  - : Returns an ID number (between 0 and 65,535)
    which uniquely identifies the data channel.

## Methods

_Also inherits methods from {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDataChannel.close", "close()")}}
  - : Closes the{{domxref("RTCDataChannel")}}.
    Either peer is permitted to call this method
    to initiate closure of the channel.
- {{DOMxRef("RTCDataChannel.send", "send()")}}
  - : Sends data across the data channel to the remote peer.

## Events

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : Sent
    when the number of bytes of data in the outgoing data buffer
    falls below the value specified by {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}.
    Also available as the {{domxref("RTCDataChannel.onbufferedamountlow", "onbufferedamountlow")}} event handler property.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : Sent when the underlying data transport closes.
    Also available as the {{domxref("RTCDataChannel.onclose", "onclose")}} event handler property.
- {{domxref("RTCDataChannel.closing_event", "closing")}} {{Experimental_inline}}
  - : Sent when the underlying data transport is about to start closing.
    Also available as the {{domxref("RTCDataChannel.onclosing", "onclosing")}} event handler property.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : Sent when an error occurs on the data channel.
    Also available as the {{domxref("RTCDataChannel.onerror", "onerror")}} event handler property.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : Sent when a message has been received from the remote peer.
    The message contents can be found
    in the event's {{domxref("MessageEvent.data", "data")}} property.
    Also available as the {{domxref("RTCDataChannel.onmessage", "onmessage")}} event handler property.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : Sent when the data channel is first opened,
    or when an existing data channel's underlying connection re-opens.
    Also available as the {{domxref("RTCDataChannel.onopen", "onopen")}} event handler property.

## Data format

The underlying data format is defined by the IEEE draft specification [`draft-ietf-mmusic-sctp-sdp`](https://datatracker.ietf.org/doc/draft-ietf-mmusic-sctp-sdp). The current format specifies its protocol as either `"UDP/DTLS/SCTP"` (UDP carrying DTLS carrying SCTP) or `"TCP/DTLS/SCTP"` (TCP carrying DTLS carrying SCTP). Older browsers may only specify `"DTLS/SCTP"`.

## Example

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
