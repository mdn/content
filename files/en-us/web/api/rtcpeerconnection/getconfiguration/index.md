---
title: RTCPeerConnection.getConfiguration()
slug: Web/API/RTCPeerConnection/getConfiguration
tags:
  - API
  - Method
  - Reference
  - WebRTC
  - getConfiguration
browser-compat: api.RTCPeerConnection.getConfiguration
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.getConfiguration()`** method returns
an object which indicates the current configuration of
the {{domxref("RTCPeerConnection")}} on which the method is called.

The returned configuration is the last configuration applied via
{{domxref("RTCPeerConnection.setConfiguration","setConfiguration()")}}, or if
`setConfiguration()` hasn't been called, the configuration the
`RTCPeerConnection` was constructed with. The configuration includes a list
of the ICE servers used by the connection, information about transport policies, and
identity information.

## Syntax

```js
var configuration = RTCPeerConnection.getConfiguration();
```

### Parameters

This method takes no input parameters.

### Return value

An object describing the {{domxref("RTCPeerConnection")}}'s current configuration. See [`RTCPeerConnection()`](/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) for more information on what options are allowed.

## Example

This example adds a new certificate to an active connection if it doesn't already have
one in use.

```js
let configuration = myPeerConnection.getConfiguration();

if ((configuration.certificates != undefined) && (!configuration.certificates.length)) {
   RTCPeerConnection.generateCertificate({
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1])
  }).then(function(cert) {
    configuration.certificates = [cert];
    myPeerConnection.setConfiguration(configuration);
  });
}
```

This example fetches the current configuration of the {{domxref("RTCPeerConnection")}},
then looks to see if it has any certificates set by examining whether or not (a) the
configuration has a value for `certificates`, and (b) whether its length is
zero.

If it's determined that there are no certificates in place,
{{domxref("RTCPeerConnection.generateCertificate()")}} is called to create a new
certificate; we provide a fulfillment handler which adds a new array containing the one
newly-created certificate to the current configuration and passes it to
{{domxref("RTCPeerConnect.setConfiguration", "setConfiguration()")}} to add the
certificate to the connection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.setConfiguration()")}}
- {{domxref("RTCPeerConnection.RTCPeerConnection")}}
- {{domxref("RTCPeerConnection")}}

