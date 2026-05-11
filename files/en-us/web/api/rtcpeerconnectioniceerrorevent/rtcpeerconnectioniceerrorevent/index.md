---
title: "RTCPeerConnectionIceErrorEvent: RTCPeerConnectionIceErrorEvent() constructor"
short-title: RTCPeerConnectionIceErrorEvent()
slug: Web/API/RTCPeerConnectionIceErrorEvent/RTCPeerConnectionIceErrorEvent
page-type: web-api-constructor
browser-compat: api.RTCPeerConnectionIceErrorEvent.RTCPeerConnectionIceErrorEvent
---

{{APIRef("WebRTC")}}

The **`RTCPeerConnectionIceErrorEvent()`** constructor creates a new {{domxref("RTCPeerConnectionIceErrorEvent")}} object with its `type` and other properties initialized as specified in the parameters.

Note that you will not normally create an object of this type yourself.

## Syntax

```js-nolint
new RTCPeerConnectionIceErrorEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `address` {{optional_inline}}
      - : A string indicating the local address used to communicate with the STUN or TURN server, or `null`.
    - `errorCode`
      - : A positive number providing the STUN error code returned by the STUN or TURN server.
    - `errorText` {{optional_inline}}
      - : A string providing the STUN reason text returned by the STUN or TURN server.
    - `port` {{optional_inline}}
      - : A positive number indicating the local port used to communicate with the STUN or TURN server, or `null`.
    - `url` {{optional_inline}}
      - : A string indicating the URL of the STUN or TURN server we're attempting to communicate with.

### Return value

A new `RTCPeerConnectionIceErrorEvent` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
