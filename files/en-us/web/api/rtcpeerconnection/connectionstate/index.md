---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
tags:
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - connectionState
browser-compat: api.RTCPeerConnection.connectionState
---
{{APIRef("WebRTC")}}

The read-only **`connectionState`** property
of the {{domxref("RTCPeerConnection")}} interface
indicates the current state of the peer connection
by returning one of the following string values:
`new`, `connecting`, `connected`, `disconnected`,
`failed`, or `closed`.

This state essentially represents the aggregate state of all ICE transports
(which are of type {{domxref("RTCIceTransport")}} or {{domxref("RTCDtlsTransport")}})
being used by the connection.

When this property's value changes,
a {{domxref("RTCPeerconnection.connectionstatechange_event", "connectionstatechange")}} event
is sent to the {{domxref("RTCPeerConnection")}} instance.

## Syntax

```js
var connectionState = RTCPeerConnection.connectionState;
```

## Value

A string representing the current state of the connection, that is one of the following litterals:

- `new`
  - : At least one of the connection's {{Glossary("ICE")}} transports
    ({{domxref("RTCIceTransport")}} or {{domxref("RTCDtlsTransport")}} objects)
    is in the `new` state,
    and none of them are in one of the following states:
    `connecting`, `checking`, `failed`, `disconnected`,
    or all of the connection's transports are in the `closed` state.
- `connecting`
  - : One or more of the {{Glossary("ICE")}} transports are currently in the process of establishing a connection;
    that is, their {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} is
    either `checking` or `connected`,
    and no transports are in the `failed` state.
- `connected`
  - : Every {{Glossary("ICE")}} transport used by the connection
    is either in use
    (state `connected` or `completed`)
    or is closed (state `closed`);
    in addition, at least one transport is either `connected` or `completed`.
- `disconnected`
  - : At least one of the {{Glossary("ICE")}} transports for the connection
    is in the `disconnected` state
    and none of the other transports are in the state
    `failed`, `connecting`, or `checking`.
- `failed`
  - : One or more of the {{Glossary("ICE")}} transports on the connection
    is in the `failed` state.
- `closed`
  - : The {{DOMxRef("RTCPeerConnection")}} is closed.

## Example

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Lifetime of a WebRTC
  session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerconnection.connectionstatechange_event", "connectionstatechange")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
