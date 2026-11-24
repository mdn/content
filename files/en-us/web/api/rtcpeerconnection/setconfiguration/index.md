---
title: "RTCPeerConnection: setConfiguration() method"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.setConfiguration
---

{{APIRef("WebRTC")}}

The **`setConfiguration()`** method of the {{domxref("RTCPeerConnection")}} interface sets the current configuration of the connection based on the values included in the specified object.
This is most often used to change the ICE servers that the connection uses.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameters

- `configuration`
  - : An object which provides the options to be set.
    The changes are not additive; instead, the new values completely replace the existing ones.
    See [`RTCPeerConnection()`](/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) for more information on what options are allowed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if an entry in `configuration.iceServers` has a {{Glossary("TURN")}} URL but no `username` or `credential`.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Thrown if `configuration` tries to change an option that can no longer be changed.
    This happens if any of the following differ from the current configuration (an option that is left out is compared using its default value):
    - `alwaysNegotiateDataChannels`, `bundlePolicy`, `certificates`, or `rtcpMuxPolicy`
    - `peerIdentity`, if it is set and differs from the identity the connection already expects for the remote peer
    - `iceCandidatePoolSize`, if {{domxref("RTCPeerConnection.setLocalDescription()")}} has already been called
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("RTCPeerConnection")}} is closed.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one of the URLs in `configuration.iceServers` uses a STUN or TURN scheme (such as `turns:`) that the browser doesn't support.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an entry in `configuration.iceServers` has an empty `urls` array or if one of its URLs isn't a valid STUN or TURN URL.
- {{jsxref("TypeError")}}
  - : Thrown if `configuration.iceCandidatePoolSize` isn't a finite number in the range 0 to 255.
    Also thrown if `configuration.bundlePolicy`, `configuration.iceTransportPolicy`, or `configuration.rtcpMuxPolicy` isn't one of the allowed values, or if an entry in `configuration.iceServers` has no `urls` property.

## Description

You might need to replace the ICE servers that a connection uses when:

- The {{domxref("RTCPeerConnection")}} was created without any ICE servers.
  In this case, you have to call `setConfiguration()` to add ICE servers before ICE negotiation can begin.
- The connection needs to use a different set of ICE servers, for example because the user has moved to a new region.
  In this case, call `setConfiguration()` with the new servers, and then [restart ICE](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) so that the connection is renegotiated using them.

Some options can't be changed after the connection is created.
Any option that is left out of the configuration takes its default value, so leaving out one of these options can throw an `InvalidModificationError`.
To update some options and keep the rest, get the current configuration with {{domxref("RTCPeerConnection.getConfiguration()", "getConfiguration()")}}, change the options you need, and then pass it to `setConfiguration()`.

## Examples

### Switching to a different ICE server

In this example, it has already been determined that ICE restart is needed, and that negotiation needs to be done using a different ICE server.

```js
const restartConfig = myPeerConnection.getConfiguration();
restartConfig.iceServers = [
  {
    urls: "turn:asia.turn-server.net",
    username: "allie@oopcode.com",
    credential: "topsecretpassword",
  },
];

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection.restartIce();

myPeerConnection
  .createOffer() // restartIce() causes iceRestart to be set true
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    // send the offer to the other peer using the signaling server
  })
  .catch(window.reportError);
```

First, the code reads the current configuration with {{domxref("RTCPeerConnection.getConfiguration()", "getConfiguration()")}} and replaces its `iceServers` option with the new ICE server and that server's credentials.
This updated configuration is then passed into `setConfiguration()`.
Starting from the current configuration keeps every other option the same, so `setConfiguration()` doesn't throw an `InvalidModificationError`.
ICE negotiation is restarted by calling {{domxref("RTCPeerConnection.restartIce()", "restartIce()")}}, which causes the next offer created to include the new ICE server information.
From there, we handle the process as usual, by setting the local description to the returned offer and then sending that offer to the other peer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.getConfiguration()")}}
- {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
- {{domxref("RTCPeerConnection")}}
