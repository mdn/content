---
title: RTCIceServer.credentialType
slug: Web/API/RTCIceServer/credentialType
tags:
  - Authentication
  - ICE
  - OAuth
  - Property
  - RTCIceServer
  - Reference
  - WebRTC
  - WebRTC API
  - credentialType
  - credentials
  - password
browser-compat: api.RTCIceServer.credentialType
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceServer")}} dictionary's
**`credentialType`** property is a string value from the [`RTCIceCredentialType` enum](#RTCIceCredentialType_enum) which
indicates what type of credential the {{domxref("RTCIceServer.credential")}} value is.
The default is `password`.

## Syntax

```js
var iceServer = {
                  ...
                  credentialType = newCredentialType,
                  ...
                };

var credentialType = iceServer.credentialType;

iceServer.credentialType = newCredentialType;
```

### Value

The permitted values are found in the {{domxref("RTCIceCredentialType")}} enumerated
string type:

{{page("/en-US/docs/Web/API/RTCIceCredentialType", "Values")}}

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
      credential: "turnpassword",
      credentialType: "password"
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
