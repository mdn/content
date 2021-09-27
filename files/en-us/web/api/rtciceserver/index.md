---
title: RTCIceServer
slug: Web/API/RTCIceServer
tags:
  - Authentication
  - Configuration
  - Dictionary
  - Experimental
  - ICE
  - RTCIceServer
  - WebRTC
browser-compat: api.RTCIceServer
---
{{DefaultAPISidebar("WebRTC")}}

The **`RTCIceServer`** dictionary defines how to connect to a single ICE server (such as a {{Glossary("STUN")}} or {{Glossary("TURN")}} server). Objects of this type are provided in the [configuration](/en-US/docs/Web/API/RTCConfiguration) of an {{domxref("RTCPeerConnection")}}, in the {{domxref("RTCConfiguration.iceServers", "iceServers")}} array.

## Properties

- {{domxref("RTCIceServer.credential", "credential")}} {{optional_inline}}
  - : The credential to use when logging into the server. This is only used if the `RTCIceServer` represents a TURN server.
- {{domxref("RTCIceServer.credentialType", "credentialType")}} {{optional_inline}}
  - : If the `RTCIceServer` represents a TURN server, this attribute specifies what kind of `credential` is to be used when connecting. This must be one of the values defined by the {{domxref("RTCIceCredentialType")}} enum. The default is `password`.
- {{domxref("RTCIceServer.urls", "urls")}}
  - : This **required** property is either a single {{domxref("DOMString")}} or an array of {{domxref("DOMString")}}s, each specifying a URL which can be used to connect to the server.
- {{domxref("RTCIceServer.username", "username")}} {{optional_inline}}
  - : If the `RTCIceServer` is a TURN server, then this is the username to use during the authentication process.

Avoid specifying an unnecessarily large number of URLs in the `urls` property; the startup time for your connection will go up substantially. Every server in the list will be contacted and tried out before one is selected to be used for negotiation.

> **Note:** Older versions of the WebRTC specification included an `url` property instead of `urls`; this was changed in order to let you specify multiple addresses for each server in the list, as shown in the example below.

## Obsolete properties

_The following properties have been removed from the specification and should not be used._

- {{domxref("RTCIceServer.url", "url")}} {{deprecated_inline}}
  - : This obsolete property is a string specifies a single ICE server's URL. **Do not use this property; use {{domxref("RTCIceServer.urls", "urls")}} instead.** Because many older books and examples still use this, we include it to help developers update their code or make sense of older examples.

## Example

The configuration below establishes two ICE servers. The first one, `stun:stun.services.mozilla.com`, requires authentication, so the username and password are provided. The second server has two URLs: `stun:stun.example.com` and `stun:stun-1.example.com`.

```js
var configuration = { iceServers: [{
                          urls: "stun:stun.services.mozilla.com",
                          username: "louis@mozilla.com",
                          credential: "webrtcdemo"
                      }, {
                          urls: [
                                  "stun:stun.example.com",
                                  "stun:stun-1.example.com"
                          ]
                      }]
};

var pc = new RTCPeerConnection(configuration);
```

Once the configuration object has been created, it is passed into the {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} constructor to use it as the configuration for the new peer connection.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCConfiguration")}}
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
