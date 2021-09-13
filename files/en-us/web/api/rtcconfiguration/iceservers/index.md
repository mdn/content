---
title: RTCConfiguration.iceServers
slug: Web/API/RTCConfiguration/iceServers
tags:
  - API
  - Configuration
  - ICE
  - JSEP
  - Negotiation
  - Property
  - RTCConfiguration
  - Reference
  - SDP
  - STUN
  - TURN
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - iceServers
browser-compat: api.RTCConfiguration.iceServers
---
{{DefaultAPISidebar("WebRTC API")}}

The {{domxref("RTCConfiguration")}} dictionary's
**`iceServers`** property is an array
of {{domxref("RTCIceServer")}} objects, each of which describes a single
{{Glossary("STUN")}} or {{Glossary("TURN")}} server to use for negotiation purposes.

## Syntax

```js
let rtcConfiguration = {
  iceServers: [ iceServer1... ]
};

let rtcConfiguration.iceServers = [ iceServer1... ];
```

### Value

An array of zero or more {{domxref("RTCIceServer")}} objects, each of which describes
one [STUN or TURN server](/en-US/docs/Web/API/WebRTC_API/Protocols) for the
ICE agent to use [during
the connection's negotiation](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection). Each object must at least have an
{{domxref("RTCIceServer.urls", "urls")}} property, which is an array of one or more
strings, each providing one server's URL.

If the array is empty, or if the `iceServers` option isn't specified, the
ICE agent will negotiate without the use of any servers, which will limit the
connection to local peers.

## Description

How the list of servers you provide is used is up to the implementation of the
{{Glossary("user agent")}}. While it can be useful to provide a second server as a
fallback in case the first is offline, listing too many servers can delay the user's
connection being established, depending on the network's performance and how many
servers get used for negotiation before a connection is established.

If the list of servers is changed while a connection is already active by calling the
{{domxref("RTCPeerConnection")}} method
{{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}}, no immediate
effect occurs. However, the new list of servers is used for any future renegotiation,
such as while handling an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Examples

The configuration below opens a new peer connection, specifying two servers for the
ICE agent to use for negotiation. The first one,
`stun:stun.services.mozilla.com`, requires authentication, so the username
and password are provided. The second server has two URLs:
`stun:stun.example.com` and `stun:stun-1.example.com`.

```js
var configuration = { iceServers: [{
                          urls: "stun:stun.services.mozilla.com",
                          username: "louis@mozilla.com",
                          credential: "webrtcdemo"
                      }, {
                          urls: ["stun:stun.example.com", "stun:stun-1.example.com"]
                      }]
};

var pc = new RTCPeerConnection(configuration);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to WebRTC
  protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Lifetime
  of a WebRTC connection](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection)
- [Establishing a
  connection: The WebRTC perfect negotiation pattern](/en-US/docs/Web/API/WebRTC_API/Perfect_negotiation)
