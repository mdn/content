---
title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
tags:
  - Constructor
  - RTCDataChannelEvent
  - Reference
  - WebRTC
browser-compat: api.RTCDataChannelEvent.RTCDataChannelEvent
---
{{APIRef("WebRTC")}}

The **`RTCDataChannelEvent()`** constructor
creates a new {{domxref("RTCDataChannelEvent")}}.

> **Note:** You will rarely if ever construct an `RTCDataChannelEvent` by hand; these
> events are normally created and sent by the WebRTC layer itself.

## Syntax

```js
 var event = new RTCDataChannelEvent(type, rtcDataChannelEventInit);
```

### Parameters

- `type`
  - : A string which specifies the name of the event. There is only one
    type of `RTCDataChannelEvent`, so this will always be
    `"datachannel"`.
- `rtcDataChannelEventInit`

  - : An object with the following fields:

    - `channel` of type {{domxref("RTCDataChannel")}}, representing the
      data channel being concerned by the event.
    - `bubbles`, optional, inherited from `EventInit`.
      Indicates if the event must bubble or not. **Default is
      `false`**.
    - `cancelable`, optional, inherited from `EventInit`.
      Indicates if the event can be canceled or not. **Default is false.**

### Value

A new {{domxref("RTCDataChannelEvent")}} configured as specified.

## Example

In this example, a new {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event is created. `dc` is a
data channel which already exists.

```js
var event = new RTCDataChannelEvent("datachannel", {"channel": dc});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection")}}
- [A simple
  RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
