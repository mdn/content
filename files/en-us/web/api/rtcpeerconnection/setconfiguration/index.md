---
title: "RTCPeerConnection: setConfiguration() method"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.setConfiguration
---

{{APIRef("WebRTC")}}

The **`setConfiguration()`** method of the {{domxref("RTCPeerConnection")}} interface sets the current configuration of the connection based on the values included in the specified object.
This lets you change the ICE servers used by the connection and which transport policies to use.

The most common use case for this method (and even then, probably not a very common use case) is to replace the set of ICE servers to be used. Two potential scenarios in which this might be done:

- The {{domxref("RTCPeerConnection")}} was instantiated without specifying any ICE servers.
  If, for example, the {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}} constructor was called with no parameters, you would have to then call `setConfiguration()` to add ICE servers before ICE negotiation could begin.
- Renegotiation of the connection is needed, and a different set of ICE servers needs to be used for some reason.
  Perhaps the user has moved into a new region, so using new regional ICE servers is necessary, for example.
  In this situation, one might call `setConfiguration()` to switch to new regional ICE servers, then initiate an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

> [!NOTE]
> Some options can't be changed after the connection is created.
> Any option that is left out of the configuration takes its default value, so leaving out one of these options can throw an `InvalidModificationError`.
> To update some options and keep the rest, get the current configuration with {{domxref("RTCPeerConnection.getConfiguration()", "getConfiguration()")}}, change the options you need, and then pass it to `setConfiguration()`.

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
  - : Thrown if one or more of the URLs specified in `configuration.iceServers` is a {{Glossary("TURN")}} server, but complete login information is not provided (that is, either the `username` or `credential` is missing, or if `credentialType` is `"password"` and `credential` is not a string).
    This prevents successful login to the server.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Thrown if `configuration` tries to change an option that can no longer be changed.
    This happens if any of the following differ from the current configuration (an option that is left out is compared using its default value):
    - `alwaysNegotiateDataChannels`, `bundlePolicy`, `certificates`, or `rtcpMuxPolicy`
    - `peerIdentity`, if it is set and differs from the identity the connection already expects for the remote peer
    - `iceCandidatePoolSize`, if {{domxref("RTCPeerConnection.setLocalDescription()")}} has already been called
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("RTCPeerConnection")}} is closed.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an entry in `configuration.iceServers` has an empty `urls` array or if one of its URLs isn't a valid STUN or TURN URL.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if one of the URLs in `configuration.iceServers` uses a STUN or TURN scheme (such as `turns:`) that the browser doesn't support.
- {{jsxref("TypeError")}}
  - : Thrown if `configuration.iceCandidatePoolSize` isn't a finite number in the range 0 to 255.
    Also thrown if `configuration.bundlePolicy`, `configuration.iceTransportPolicy`, or `configuration.rtcpMuxPolicy` isn't one of the allowed values, or if an entry in `configuration.iceServers` has no `urls` property.

## Example

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
