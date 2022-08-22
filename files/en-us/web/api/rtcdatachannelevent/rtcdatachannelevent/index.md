---
title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
page-type: web-api-constructor
tags:
  - Constructor
  - RTCDataChannelEvent
  - Reference
  - WebRTC
browser-compat: api.RTCDataChannelEvent.RTCDataChannelEvent
---
{{APIRef("WebRTC")}}

The **`RTCDataChannelEvent()`** constructor
creates a new {{domxref("RTCDataChannelEvent")}} object.

> **Note:** You will rarely if ever construct an `RTCDataChannelEvent` by hand; these
> events are normally created and sent by the WebRTC layer itself.

## Syntax

```js
new RTCDataChannelEvent(type, options);
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `datachannel`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `channel`
      - : A {{domxref("RTCDataChannel")}}, representing the data channel being associated with the event.

### Return value

A new {{domxref("RTCDataChannelEvent")}} object configured as specified.

## Example

In this example, a new {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} event is created. `dc` is a
data channel which already exists.

```js
const event = new RTCDataChannelEvent("datachannel", {"channel": dc});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection")}}
- [A simple RTCDataChannel sample](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
