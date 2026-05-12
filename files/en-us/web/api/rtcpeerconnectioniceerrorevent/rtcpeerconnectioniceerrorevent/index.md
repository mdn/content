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
    This is usually `"icecandidateerror"`.
- `options`
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `address` {{optional_inline}}
      - : A string indicating the local address used to communicate with the {{Glossary("STUN")}} or {{Glossary("TURN")}} server.
        This should be set to `null` if the local IP address has not yet been exposed as part of a local {{Glossary("ICE")}} candidate.
    - `errorCode`
      - : A positive number providing the [STUN error code](https://www.iana.org/assignments/stun-parameters/stun-parameters.xhtml#stun-parameters-6) returned by the STUN or TURN server.
        If no host candidate can reach the server and the {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} is `gathering`, this should be set to `701`.
    - `errorText` {{optional_inline}}
      - : A string providing the STUN reason text returned by the STUN or TURN server.
    - `port` {{optional_inline}}
      - : A positive number indicating the local port used to communicate with the STUN or TURN server.
        This should be set to `null` if the connection hasn't been established (that is, if [`address`](#address) is `null`).
    - `url` {{optional_inline}}
      - : A string indicating the URL of the STUN or TURN server being used.

### Return value

A new `RTCPeerConnectionIceErrorEvent` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
