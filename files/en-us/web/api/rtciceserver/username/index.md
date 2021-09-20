---
title: RTCIceServer.username
slug: Web/API/RTCIceServer/username
tags:
  - Experimental
  - Property
  - RTCIceServer
  - Reference
  - WebRTC
  - username
browser-compat: api.RTCIceServer.username
---
{{APIRef("WebRTC")}}

{{draft("I'm experimenting with structure for pages documenting members of
  dictionaries. Please contact ~~sheppy with any feedback.")}}

{{SeeCompatTable}}

The {{domxref("RTCIceServer")}} dictionary's **`username`**
property is a string which specifies the username to use when authenticating with the
{{Glossary("ICE")}} server being described.

> **Note:** This value is used when the `RTCIceServer` describes a
> {{Glossary("TURN")}} server.

## Syntax

```js
var iceServer = {
                  ...
                  username = username,
                  ...
                };

var username = iceServer.username;

iceServer.username = newUsername;
```

## Example

This example creates a new {{domxref("RTCPeerConnection")}} which will use a
{{Glossary("TURN")}} server at `turnserver.example.org` to negotiate
connections. Logging into the TURN server will use the username "webrtc" and the
creative password "turnpassword".

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:turnserver.example.org",  // A TURN server
      username: "webrtc",
      credential: "turnpassword"
    }
  ]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceServer")}}
- {{domxref("RTCIceServer.credential")}}
- {{domxref("RTCIceServer.credentialType")}}
