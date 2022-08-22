---
title: RTCIceServer.credentialType
slug: Web/API/RTCIceServer/credentialType
page-type: web-api-instance-property
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
**`credentialType`** property is a string value which
indicates what type of credential the {{domxref("RTCIceServer.credential")}} value is.
The default is `password`.

## Syntax

```js
const iceServer = {
  // ...
  credentialType: newCredentialType,
  // ...
};

const credentialType = iceServer.credentialType;

iceServer.credentialType = newCredentialType;
```

### Value

The permitted values are:

- `oauth`
  - : The {{domxref("RTCIceServer")}} requires the use of OAuth 2.0 to authenticate in order to use the ICE server described. This process is detailed in {{RFC(7635)}}. This property was formerly called `token`.
- `password`
  - : The `RTCIceServer` requires a username and password to authenticate prior to using the described ICE server.

## Example

This example creates a new {{domxref("RTCPeerConnection")}} which will use a
{{Glossary("TURN")}} server at `turnserver.example.org` to negotiate
connections. Logging into the TURN server will use the username "webrtc" and the
creative password "turnpassword".

```js
const myPeerConnection = new RTCPeerConnection({
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
