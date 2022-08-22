---
title: RTCIceServer.credential
slug: Web/API/RTCIceServer/credential
page-type: web-api-instance-property
tags:
  - Credential
  - Property
  - RTCIceServer
  - Reference
  - TURN
  - WebRTC
browser-compat: api.RTCIceServer.credential
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceServer")}} dictionary's
**`credential`** property is a string providing the credential
to use when connecting to the described server. This is typically a password, key, or
other secret.

> **Note:** This value is used when the `RTCIceServer` describes a
> {{Glossary("TURN")}} server.

## Syntax

```js
const iceServer = {
  // ...
  credential: someCredential,
  // ...
};

const credential = iceServer.credential;

iceServer.credential = newCredential;
```

## Example

This example creates a new {{domxref("RTCPeerConnection")}} which uses a
{{Glossary("TURN")}} server at `turnserver.example.org` to negotiate
connections. Logging into the TURN server uses the username "webrtc" and the creative
password "turnpassword".

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
- {{domxref("RTCIceServer.credentialType")}}
