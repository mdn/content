---
title: RTCIceServers.urls
slug: Web/API/RTCIceServer/urls
page-type: web-api-instance-property
tags:
  - Property
  - RTCIceServer
  - Reference
  - WebRTC
  - urls
browser-compat: api.RTCIceServer.urls
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceServer")}} dictionary's **`urls`**
property specifies the URL or URLs of the servers to be used for ICE negotiations. These
are typically STUN and/or TURN servers.

## Syntax

```js
const iceServer = {
  urls: iceServerUrl, /* or an array or URLs: [ url1, ..., urlN ] */
  username: "webrtc", // optional
  credential: "turnpassword" // optional
};

iceServers.push(iceServer);
```

The value of this property may be specified as a single URL or as an array of multiple
URLs.

## Examples

Let's look a few examples of varying complexity.

### A single ICE server

This example creates a new {{domxref("RTCPeerConnection")}} which will use a
{{Glossary("STUN")}} server at `stunserver.example.org` to negotiate
connections.

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: "stun:stunserver.example.org"
    }
  ]
});
```

Notice that only the `urls` property is provided; the STUN server doesn't
require authentication, so this is all that's needed.

### A single ICE server with authentication

The second example creates a new {{domxref("RTCPeerConnection")}} which will use a
{{Glossary("TURN")}} server at `turnserver.example.org` to negotiate
connections. Logging into the TURN server will use the username "webrtc" and the
creative password "turnpassword".

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:turnserver.example.org",
      username: "webrtc",
      credential: "turnpassword"
    }
  ]
});
```

### A single ICE server with multiple URLs

The next example creates a new {{domxref("RTCPeerConnection")}} which will use a single
{{Glossary("TURN")}} server which has multiple URLs. This is useful if the server is,
for example, available both on "turn" and "turns" schemes, or if there's a fallback
address available for the server.

> **Note:** Keep in mind that ICE will try all the URLs you list here, so the more you include,
> the longer connections will take to establish.

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: ["turns:turnserver.example.org", "turn:turnserver.example.org"],
      username: "webrtc",
      credential: "turnpassword"
    }
  ]
});
```

### Multiple ICE servers

Finally, this example creates a new {{domxref("RTCPeerConnection")}} which will use one
of two servers for ICE negotiation. Each server can have one or more URLs, as
demonstrated above.

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: ["turns:turnserver.example.org", "turn:turnserver.example.org"],
      username: "webrtc",
      credential: "turnpassword"
    },
    {
      urls: "stun: stunserver.example.org"
    }
  ]
});
```

Two ICE servers are provided. One is a TURN server which can be accessed both over TURN
and TURNS. The other is a STUN server. Any number of servers could be listed of any
combination of types.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceServer")}}
