---
title: "RTCDataChannel: closing event"
short-title: closing
slug: Web/API/RTCDataChannel/closing_event
page-type: web-api-event
browser-compat: api.RTCDataChannel.closing_event
---

{{APIRef("WebRTC")}}

The **`closing`** event is sent to an {{domxref("RTCDataChannel")}} just before the channel begins the process of shutting down its underlying data transport.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("closing", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onclosing = (event) => { }
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

You can also set the `onclosing` event handler property directly (but note that this replaces other event listeners added using `onclosing`, if any):

```js
dataChannel.onclosing = (ev) => {
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
