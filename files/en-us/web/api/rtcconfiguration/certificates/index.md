---
title: RTCConfiguration.certificates
slug: Web/API/RTCConfiguration/certificates
tags:
  - API
  - Configuration
  - DLTS
  - Property
  - RTCConfiguration
  - RTCPeerConnection
  - Reference
  - Security
  - Settings
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - certificates
  - parameters
browser-compat: api.RTCConfiguration.certificates
---
{{APIRef("WebRTC API")}}

The {{domxref("RTCConfiguration")}} dictionary's optional
**`certificates`** property is an array of
{{domxref("RTCCertificate")}} objects providing the security certificates available for
use when authenticating duing the connection process.

## Syntax

```js
let rtcConfiguration = {
  certificates: certificateList
};

let rtcConfiguration.certificates = [ cert1... ];
let certificates = rtcConfiguration.certificates;
```

### Value

An array of {{domxref("RTCCertificate")}} objects, each specifying one security
certificate available for use when connecting to a remote peer. If this property isn't
specified, the browser will automatically generate and use a certificate to secure the
connection.

See {{anch("Using certificates")}} below for more information on why you might want
to—or not to—explicitly provide certificates.

## Description

If this property isn't included in the configuration, a set of certificates is
automatically generated for each instance of {{domxref("RTCPeerConnection")}}. Although
a given {{Glossary("DTLS")}} connection only uses a single certificate, providing
multiple options in the `certificates` list may improve the odds of
establishing a connection by increasing the chances a mutually-compatible encryption
algorithm and key size may be found.

The method by which a browser decides which certificate to use is
implementation-dependent. Some browsers may choose the first listed certificate and
ignore the rest of the list; others may take a different approach.

### Using certificates

When you wish to provide your own certificates for use by an
{{domxref("RTCPeerConnection")}} instead of having the `RTCPeerConnection`
generate them automatically, you do so by calling the static
{{domxref("RTCPeerConnection.generateCertificate()")}} function.

The `certificates` property's value cannot be changed once it's first
specified. If it's included in the configuration passed into a call to a connection's
{{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}}, it is ignored.

This attribute supports providing multiple certificates because even though a given
DTLS connection uses only one certificate, providing multiple certificates allows
support for multiple encryption algorithms. The implementation of
`RTCPeerConnection` will choose which certificate to use based on the
algorithms it and the remote peer support, as determined during DTLS handshake.

If you don't provide certificates, new ones are generated automatically. One obvious
benefit to providing your own is identity key continuity—if you use the same certificate
for subsequent calls, the remote peer can tell you're the same caller. This also avoids
the cost of generating new keys.

**<<<--- add link to information about identity --->>>**

## Examples

This example uses {{domxref("RTCPeerConnection.generateCertificate()")}} to create a
certificate, then uses it to open a new {{domxref("RTCPeerConnection")}}.

```js
RTCPeerConnection.generateCertificate({
    name: 'RSASSA-PKCS1-v1_5',
    hash: 'SHA-256',
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1])
}).then(function(cert) {
  var pc = new RTCPeerConnection({certificates: [cert]});
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
