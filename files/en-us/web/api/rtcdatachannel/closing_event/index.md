---
title: 'RTCDataChannel: closing event'
slug: Web/API/RTCDataChannel/closing_event
page-type: web-api-event
tags:
  - API
  - Communications
  - Connection
  - Disconnecting
  - Networking
  - RTCDataChannel
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - closing
  - events
  - Event
browser-compat: api.RTCDataChannel.closing_event
---
{{APIRef("WebRTC")}}

The **`closing`** event is sent to an {{domxref("RTCDataChannel")}} just before the channel begins the process of shutting down its underlying data transport.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('bufferedamountlow', (event) => { });

onbufferedamountlow = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Description

While the `closing` event is sent to the channel just before beginning to close the channel's data transport, the {{domxref("RTCDataChannel.close_event", "close")}} event is sent once the closing process is complete.

## Examples

This example updates a connection status interface when the `closing` event arrives.

First, an example using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
dataChannel.addEventListener("closing", (ev) => {
  myConnectionStatus.icon = closingIcon;
  myConnectionStatus.text = "Connection closing";
});
```

You can also set the {{domxref("RTCDataChannel.closing_event", "onclosing")}} event handler property directly:

```js
pc.onclosing = (ev) => {
 myConnectionStatus.icon = closingIcon;
 myConnectionStatus.text = "Connection closing";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
